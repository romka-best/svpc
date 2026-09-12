import type { ComponentType } from 'react';

import type { PlanYourTourStepId } from '../../types';

import { CarChoiceStep } from './car-choice';
import { ContactInformationStep } from './contact-information';
import { SelectAttractionsStep } from './select-attractions';
import { SelectDaysStep } from './select-days';
import { SelectParticipantsStep } from './select-participants';

export const PLAN_YOUR_TOUR_STEP_COMPONENTS: Record<PlanYourTourStepId, ComponentType> = {
  'car-choice': CarChoiceStep,
  'contact-information': ContactInformationStep,
  'select-attractions': SelectAttractionsStep,
  'select-days': SelectDaysStep,
  'select-participants': SelectParticipantsStep,
};
