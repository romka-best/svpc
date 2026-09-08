import type {
  PlanYourTourAnswers,
  PlanYourTourStepId,
} from './types';
import {
  isPlanYourTourAnswers,
  isPlanYourTourStepId,
} from './validation';

const STORAGE_KEY = 'svpc.plan-your-tour.v1';

export interface PersistedPlanYourTour {
  answers: PlanYourTourAnswers;
  paidSessionId?: string;
  stepId: PlanYourTourStepId;
}

const isPersistedPlanYourTour = (value: unknown): value is PersistedPlanYourTour => {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  const persisted = value as Partial<PersistedPlanYourTour>;

  if (
    !isPlanYourTourAnswers(persisted.answers)
    || !isPlanYourTourStepId(persisted.stepId)
  ) {
    return false;
  }

  if (
    persisted.paidSessionId !== undefined
    && typeof persisted.paidSessionId !== 'string'
  ) {
    return false;
  }

  return true;
};

export const loadPersistedPlanYourTour = (): PersistedPlanYourTour | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const rawValue = window.sessionStorage.getItem(STORAGE_KEY);

    if (!rawValue) {
      return null;
    }

    const parsedValue: unknown = JSON.parse(rawValue);

    return isPersistedPlanYourTour(parsedValue) ? parsedValue : null;
  } catch {
    return null;
  }
};

export const persistPlanYourTour = (value: PersistedPlanYourTour) => {
  if (typeof window === 'undefined') {
    return;
  }

  window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(value));
};

export const clearPersistedPlanYourTour = () => {
  if (typeof window === 'undefined') {
    return;
  }

  window.sessionStorage.removeItem(STORAGE_KEY);
};
