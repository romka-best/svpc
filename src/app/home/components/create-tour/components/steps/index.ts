import type { ComponentType } from 'react';

import type { CreateTourStepId } from '../../types';

import { CarChoiceStep } from './car-choice';
import { ContactInformationStep } from './contact-information';
import { SelectAttractionsStep } from './select-attractions';
import { SelectDaysStep } from './select-days';
import { SelectParticipantsStep } from './select-participants';

/**
 * Maps step ids → UI. Add a component here when implementing the next Figma step.
 */
export const CREATE_TOUR_STEP_COMPONENTS: Record<CreateTourStepId, ComponentType> = {
  'car-choice': CarChoiceStep,
  'contact-information': ContactInformationStep,
  'select-attractions': SelectAttractionsStep,
  'select-days': SelectDaysStep,
  'select-participants': SelectParticipantsStep,
};
