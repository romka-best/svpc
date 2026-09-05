'use client';

import {
  createContext,
  useContext,
  useMemo,
  useReducer,
  type ReactNode,
} from 'react';

import {
  computeCarPrice,
  isCarAvailableForParticipants,
} from '../components/steps/car-choice/constants';
import { computeAttractionsPrice } from '../components/steps/select-attractions/constants';
import {
  INITIAL_ANSWERS,
  INITIAL_STEP_ID,
  PLAN_YOUR_TOUR_STEPS,
} from '../constants';
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
    type: 'complete-submission';
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
  stepId: PlanYourTourStepId;
  stepIndex: number;
  steps: readonly PlanYourTourStepDefinition[];
  submissionStatus: SubmissionStatus;
  submitTour: () => void;
  completeSubmission: () => void;
}

const PlanYourTourContext = createContext<PlanYourTourContextValue | null>(null);

const getStepIndex = (stepId: PlanYourTourStepId) => {
  return PLAN_YOUR_TOUR_STEPS.findIndex((step) => {
    return step.id === stepId;
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
      };
    }
    case 'start-submission': {
      return {
        ...state,
        submissionStatus: 'loading',
      };
    }
    case 'complete-submission': {
      return {
        ...state,
        submissionStatus: 'success',
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

const computePrice = (answers: PlanYourTourAnswers) => {
  return computeAttractionsPrice(answers['select-attractions'].selectedIds)
    + computeCarPrice(answers['car-choice'].carId);
};

interface ProviderProps {
  children: ReactNode;
}

const PlanYourTourProvider = ({ children }: ProviderProps) => {
  const [
    state,
    dispatch,
  ] = useReducer(planYourTourReducer, {
    answers: INITIAL_ANSWERS,
    stepId: INITIAL_STEP_ID,
    submissionStatus: 'idle',
  });

  const stepIndex = Math.max(0, getStepIndex(state.stepId));
  const currentStep = PLAN_YOUR_TOUR_STEPS[stepIndex] ?? PLAN_YOUR_TOUR_STEPS[0];

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
      completeSubmission: () => {
        dispatch({ type: 'complete-submission' });
      },
      price: computePrice(state.answers),
      progress: state.submissionStatus === 'idle'
        ? computeProgress(state.answers, stepIndex)
        : 100,
      stepId: state.stepId,
      stepIndex,
      steps: PLAN_YOUR_TOUR_STEPS,
      submissionStatus: state.submissionStatus,
      submitTour: () => {
        dispatch({ type: 'start-submission' });
      },
    };
  }, [
    currentStep,
    state.answers,
    state.stepId,
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
