'use client';

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  type ReactNode,
} from 'react';

import {
  trackCheckoutAbandoned,
  trackCheckoutFailed,
  trackCheckoutStarted,
  trackPlannerStepCompleted,
} from '@/lib/analytics/client';

import {
  createCheckoutSession,
  getCheckoutSessionStatus,
} from '../api';
import { isCarAvailableForParticipants } from '../components/steps/car-choice/constants';
import {
  computeTourPrice,
  INITIAL_ANSWERS,
  INITIAL_STEP_ID,
  PLAN_YOUR_TOUR_STEPS,
} from '../constants';
import {
  clearPersistedPlanYourTour,
  loadPersistedPlanYourTour,
  persistPlanYourTour,
  type PersistedPlanYourTour,
} from '../storage';
import type {
  CarChoiceAnswer,
  ContactInformationAnswer,
  PlanYourTourAnswers,
  PlanYourTourState,
  PlanYourTourStepDefinition,
  PlanYourTourStepId,
  SelectAttractionsAnswer,
  SelectDaysAnswer,
  SelectParticipantsAnswer,
  SubmissionStatus,
} from '../types';
import { isBookingReadyForCheckout } from '../validation';

type PlanYourTourAction =
  | {
    payload: PlanYourTourStepId;
    type: 'go-to-step';
  }
  | {
    type: 'go-back';
  }
  | {
    type: 'go-next';
  }
  | {
    payload: Partial<SelectDaysAnswer>;
    type: 'patch-select-days';
  }
  | {
    payload: Partial<SelectParticipantsAnswer>;
    type: 'patch-select-participants';
  }
  | {
    payload: Partial<SelectAttractionsAnswer>;
    type: 'patch-select-attractions';
  }
  | {
    payload: Partial<CarChoiceAnswer>;
    type: 'patch-car-choice';
  }
  | {
    payload: Partial<ContactInformationAnswer>;
    type: 'patch-contact-information';
  }
  | {
    type: 'start-submission';
  }
  | {
    type: 'start-confirmation';
  }
  | {
    payload: string;
    type: 'complete-submission';
  }
  | {
    payload: string;
    type: 'fail-submission';
  }
  | {
    type: 'reset-submission';
  }
  | {
    payload: PersistedPlanYourTour;
    type: 'restore-state';
  };

interface PlanYourTourContextValue {
  answers: PlanYourTourAnswers;
  canGoBack: boolean;
  canGoNext: boolean;
  currentStep: PlanYourTourStepDefinition;
  goBack: () => void;
  goNext: () => void;
  goToStep: (stepId: PlanYourTourStepId) => void;
  patchCarChoice: (payload: Partial<CarChoiceAnswer>) => void;
  patchContactInformation: (payload: Partial<ContactInformationAnswer>) => void;
  patchSelectAttractions: (payload: Partial<SelectAttractionsAnswer>) => void;
  patchSelectDays: (payload: Partial<SelectDaysAnswer>) => void;
  patchSelectParticipants: (payload: Partial<SelectParticipantsAnswer>) => void;
  price: number;
  progress: number;
  resetSubmission: () => void;
  stepId: PlanYourTourStepId;
  stepIndex: number;
  steps: readonly PlanYourTourStepDefinition[];
  submissionError: string | null;
  submissionStatus: SubmissionStatus;
  submitTour: () => void;
}

const PlanYourTourContext = createContext<PlanYourTourContextValue | null>(null);

const CHECKOUT_ERROR_MESSAGE = 'We could not start payment. Please try again.';
const CHECKOUT_CONFIRM_ERROR_MESSAGE = 'We could not confirm your payment. Please try again.';

const INITIAL_STATE: PlanYourTourState = {
  answers: INITIAL_ANSWERS,
  paidSessionId: null,
  stepId: INITIAL_STEP_ID,
  submissionError: null,
  submissionStatus: 'idle',
};

const getStepIndex = (stepId: PlanYourTourStepId) => {
  return PLAN_YOUR_TOUR_STEPS.findIndex((step) => {
    return step.id === stepId;
  });
};

const replaceCheckoutUrl = () => {
  const url = new URL(window.location.href);

  url.searchParams.delete('checkout');
  url.searchParams.delete('session_id');

  if (!url.hash) {
    url.hash = 'plan-your-tour';
  }

  window.history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`);
};

const scrollToPlanYourTour = () => {
  document.getElementById('plan-your-tour')?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

const planYourTourReducer = (
  state: PlanYourTourState,
  action: PlanYourTourAction,
): PlanYourTourState => {
  switch (action.type) {
    case 'go-to-step': {
      return {
        ...state,
        stepId: action.payload,
      };
    }
    case 'go-back': {
      const currentIndex = getStepIndex(state.stepId);
      const previousStep = PLAN_YOUR_TOUR_STEPS[currentIndex - 1];

      if (!previousStep) {
        return state;
      }

      return {
        ...state,
        stepId: previousStep.id,
      };
    }
    case 'go-next': {
      const currentIndex = getStepIndex(state.stepId);
      const currentStep = PLAN_YOUR_TOUR_STEPS[currentIndex];
      const nextStep = PLAN_YOUR_TOUR_STEPS[currentIndex + 1];

      if (!currentStep?.isComplete(state.answers) || !nextStep) {
        return state;
      }

      return {
        ...state,
        stepId: nextStep.id,
      };
    }
    case 'patch-select-days': {
      return {
        ...state,
        answers: {
          ...state.answers,
          'select-days': {
            ...state.answers['select-days'],
            ...action.payload,
          },
        },
        paidSessionId: null,
      };
    }
    case 'patch-select-participants': {
      const nextParticipants = {
        ...state.answers['select-participants'],
        ...action.payload,
      };
      const selectedCarId = state.answers['car-choice'].carId;
      const isSelectedCarAvailable = !selectedCarId
        || isCarAvailableForParticipants(selectedCarId, nextParticipants.participants);

      return {
        ...state,
        answers: {
          ...state.answers,
          'select-participants': nextParticipants,
          'car-choice': isSelectedCarAvailable
            ? state.answers['car-choice']
            : { carId: null },
        },
        paidSessionId: null,
      };
    }
    case 'patch-select-attractions': {
      return {
        ...state,
        answers: {
          ...state.answers,
          'select-attractions': {
            ...state.answers['select-attractions'],
            ...action.payload,
          },
        },
        paidSessionId: null,
      };
    }
    case 'patch-car-choice': {
      const nextCarId = action.payload.carId ?? state.answers['car-choice'].carId;
      const participants = state.answers['select-participants'].participants;

      if (nextCarId && !isCarAvailableForParticipants(nextCarId, participants)) {
        return state;
      }

      return {
        ...state,
        answers: {
          ...state.answers,
          'car-choice': {
            ...state.answers['car-choice'],
            ...action.payload,
          },
        },
        paidSessionId: null,
      };
    }
    case 'patch-contact-information': {
      return {
        ...state,
        answers: {
          ...state.answers,
          'contact-information': {
            ...state.answers['contact-information'],
            ...action.payload,
          },
        },
        paidSessionId: null,
      };
    }
    case 'start-submission': {
      return {
        ...state,
        submissionError: null,
        submissionStatus: 'loading',
      };
    }
    case 'start-confirmation': {
      return {
        ...state,
        submissionError: null,
        submissionStatus: 'confirming',
      };
    }
    case 'complete-submission': {
      return {
        ...state,
        paidSessionId: action.payload,
        submissionError: null,
        submissionStatus: 'success',
      };
    }
    case 'fail-submission': {
      return {
        ...state,
        submissionError: action.payload,
        submissionStatus: 'error',
      };
    }
    case 'reset-submission': {
      return {
        ...state,
        submissionError: null,
        submissionStatus: 'idle',
      };
    }
    case 'restore-state': {
      return {
        ...state,
        answers: action.payload.answers,
        paidSessionId: action.payload.paidSessionId ?? null,
        stepId: action.payload.stepId,
      };
    }
    default: {
      return state;
    }
  }
};

const computeProgress = (
  answers: PlanYourTourAnswers,
  stepIndex: number,
) => {
  if (PLAN_YOUR_TOUR_STEPS.length === 0) {
    return 0;
  }

  const completedCount = PLAN_YOUR_TOUR_STEPS.reduce((count, step, index) => {
    if (index > stepIndex) {
      return count;
    }

    return step.isComplete(answers) ? count + 1 : count;
  }, 0);

  return Math.round((completedCount / PLAN_YOUR_TOUR_STEPS.length) * 100);
};

interface ProviderProps {
  children: ReactNode;
}

const PlanYourTourProvider = ({ children }: ProviderProps) => {
  const [
    state,
    dispatch,
  ] = useReducer(planYourTourReducer, INITIAL_STATE);
  const shouldPersistRef = useRef(false);
  const completedStepsRef = useRef(new Set<PlanYourTourStepId>());

  const stepIndex = Math.max(0, getStepIndex(state.stepId));
  const currentStep = PLAN_YOUR_TOUR_STEPS[stepIndex] ?? PLAN_YOUR_TOUR_STEPS[0];

  useEffect(() => {
    const persisted = loadPersistedPlanYourTour();
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get('session_id')?.trim();
    const isCancelled = params.get('checkout') === 'cancelled';

    if (persisted?.paidSessionId && !sessionId) {
      clearPersistedPlanYourTour();
    } else if (persisted) {
      dispatch({
        payload: persisted,
        type: 'restore-state',
      });
    }

    if (isCancelled) {
      trackCheckoutAbandoned(persisted?.answers ?? INITIAL_ANSWERS);
      replaceCheckoutUrl();
      scrollToPlanYourTour();
      return;
    }

    if (!sessionId) {
      return;
    }

    let isCancelledEffect = false;

    dispatch({ type: 'start-confirmation' });

    void getCheckoutSessionStatus(sessionId)
      .then((isPaid) => {
        if (isCancelledEffect) {
          return;
        }

        if (isPaid) {
          dispatch({
            payload: sessionId,
            type: 'complete-submission',
          });
        } else {
          trackCheckoutFailed({
            reason: 'unpaid',
            stage: 'confirm',
          });
          dispatch({ type: 'reset-submission' });
        }

        replaceCheckoutUrl();
        scrollToPlanYourTour();
      })
      .catch(() => {
        if (isCancelledEffect) {
          return;
        }

        dispatch({
          payload: CHECKOUT_CONFIRM_ERROR_MESSAGE,
          type: 'fail-submission',
        });
        trackCheckoutFailed({
          reason: 'confirm-error',
          stage: 'confirm',
        });
        replaceCheckoutUrl();
        scrollToPlanYourTour();
      });

    return () => {
      isCancelledEffect = true;
    };
  }, [
  ]);

  useEffect(() => {
    if (!shouldPersistRef.current) {
      shouldPersistRef.current = true;
      return;
    }

    if (state.submissionStatus === 'success') {
      clearPersistedPlanYourTour();
      return;
    }

    persistPlanYourTour({
      answers: state.answers,
      stepId: state.stepId,
    });
  }, [
    state.answers,
    state.stepId,
    state.submissionStatus,
  ]);

  const value = useMemo<PlanYourTourContextValue>(() => {
    const isCurrentComplete = currentStep.isComplete(state.answers);

    return {
      answers: state.answers,
      canGoBack: stepIndex > 0,
      canGoNext: isCurrentComplete,
      currentStep,
      goBack: () => {
        dispatch({ type: 'go-back' });
      },
      goNext: () => {
        if (!isCurrentComplete) {
          return;
        }

        if (!completedStepsRef.current.has(state.stepId)) {
          completedStepsRef.current.add(state.stepId);
          trackPlannerStepCompleted(state.stepId, state.answers);
        }

        dispatch({ type: 'go-next' });
      },
      goToStep: (stepId) => {
        dispatch({
          payload: stepId,
          type: 'go-to-step',
        });
      },
      patchCarChoice: (payload) => {
        dispatch({
          payload,
          type: 'patch-car-choice',
        });
      },
      patchContactInformation: (payload) => {
        dispatch({
          payload,
          type: 'patch-contact-information',
        });
      },
      patchSelectAttractions: (payload) => {
        dispatch({
          payload,
          type: 'patch-select-attractions',
        });
      },
      patchSelectDays: (payload) => {
        dispatch({
          payload,
          type: 'patch-select-days',
        });
      },
      patchSelectParticipants: (payload) => {
        dispatch({
          payload,
          type: 'patch-select-participants',
        });
      },
      resetSubmission: () => {
        dispatch({ type: 'reset-submission' });
      },
      price: computeTourPrice(state.answers),
      progress: state.submissionStatus === 'idle'
        ? computeProgress(state.answers, stepIndex)
        : 100,
      stepId: state.stepId,
      stepIndex,
      steps: PLAN_YOUR_TOUR_STEPS,
      submissionError: state.submissionError,
      submissionStatus: state.submissionStatus,
      submitTour: () => {
        if (!isBookingReadyForCheckout(state.answers)) {
          return;
        }

        if (!completedStepsRef.current.has('contact-information')) {
          completedStepsRef.current.add('contact-information');
          trackPlannerStepCompleted('contact-information', state.answers);
        }

        trackCheckoutStarted(state.answers);
        dispatch({ type: 'start-submission' });

        void createCheckoutSession(state.answers)
          .then((checkoutUrl) => {
            window.location.assign(checkoutUrl);
          })
          .catch((error: unknown) => {
            const message = error instanceof Error && error.message
              ? error.message
              : CHECKOUT_ERROR_MESSAGE;

            trackCheckoutFailed({
              reason: 'create-error',
              stage: 'create',
            });
            dispatch({
              payload: message,
              type: 'fail-submission',
            });
          });
      },
    };
  }, [
    currentStep,
    state.answers,
    state.stepId,
    state.submissionError,
    state.submissionStatus,
    stepIndex,
  ]);

  return (
    <PlanYourTourContext.Provider value={value}>
      {children}
    </PlanYourTourContext.Provider>
  );
};

const usePlanYourTour = () => {
  const context = useContext(PlanYourTourContext);

  if (!context) {
    throw new Error('usePlanYourTour must be used within PlanYourTourProvider');
  }

  return context;
};

export {
  PlanYourTourProvider,
  usePlanYourTour,
};
