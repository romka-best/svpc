import { CAR_OPTIONS } from './components/steps/car-choice/constants';
import { CONTACT_METHODS } from './components/steps/contact-information/constants';
import { ATTRACTIONS_BY_ID } from './components/steps/select-attractions/constants';
import {
  computeTourPrice,
  GROUP_TYPES,
  PLAN_YOUR_TOUR_STEPS,
} from './constants';
import type {
  CarId,
  ContactMethod,
  GroupType,
  PlanYourTourAnswers,
  PlanYourTourStepId,
} from './types';

const DATE_KEY_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
const CAR_IDS = new Set<CarId>(CAR_OPTIONS.map((car) => {
  return car.id;
}));
const CONTACT_METHOD_IDS = new Set<ContactMethod>(CONTACT_METHODS.map((method) => {
  return method.id;
}));
const GROUP_TYPE_IDS = new Set<GroupType>(GROUP_TYPES.map((group) => {
  return group.id;
}));
const STEP_IDS = new Set<PlanYourTourStepId>(PLAN_YOUR_TOUR_STEPS.map((step) => {
  return step.id;
}));

const isRecord = (value: unknown): value is Record<string, unknown> => {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
};

const isInteger = (value: unknown): value is number => {
  return typeof value === 'number' && Number.isInteger(value);
};

const isDateKey = (value: unknown): value is string => {
  return typeof value === 'string' && DATE_KEY_PATTERN.test(value);
};

export const isPlanYourTourStepId = (value: unknown): value is PlanYourTourStepId => {
  return typeof value === 'string' && STEP_IDS.has(value as PlanYourTourStepId);
};

export const isPlanYourTourAnswers = (
  value: unknown,
): value is PlanYourTourAnswers => {
  if (!isRecord(value)) {
    return false;
  }

  const selectDays = value['select-days'];
  const selectParticipants = value['select-participants'];
  const selectAttractions = value['select-attractions'];
  const carChoice = value['car-choice'];
  const contactInformation = value['contact-information'];

  if (
    !isRecord(selectDays)
    || !isRecord(selectParticipants)
    || !isRecord(selectAttractions)
    || !isRecord(carChoice)
    || !isRecord(contactInformation)
  ) {
    return false;
  }

  const startDate = selectDays.startDate;
  const endDate = selectDays.endDate;
  const groupType = selectParticipants.groupType;
  const selectedIds = selectAttractions.selectedIds;
  const carId = carChoice.carId;
  const method = contactInformation.method;

  if (
    !(startDate === null || isDateKey(startDate))
    || !(endDate === null || isDateKey(endDate))
    || !(groupType === null || (typeof groupType === 'string' && GROUP_TYPE_IDS.has(groupType as GroupType)))
    || !isInteger(selectParticipants.adults)
    || !isInteger(selectParticipants.participants)
    || typeof selectAttractions.autoChoice !== 'boolean'
    || !Array.isArray(selectedIds)
    || !selectedIds.every((id) => {
      return typeof id === 'string' && id in ATTRACTIONS_BY_ID;
    })
    || !(carId === null || (typeof carId === 'string' && CAR_IDS.has(carId as CarId)))
    || typeof contactInformation.agreedToPrivacy !== 'boolean'
    || typeof contactInformation.contactValue !== 'string'
    || typeof method !== 'string'
    || !CONTACT_METHOD_IDS.has(method as ContactMethod)
  ) {
    return false;
  }

  return true;
};

export const isBookingReadyForCheckout = (answers: PlanYourTourAnswers) => {
  return PLAN_YOUR_TOUR_STEPS.every((step) => {
    return step.isComplete(answers);
  }) && computeTourPrice(answers) > 0;
};
