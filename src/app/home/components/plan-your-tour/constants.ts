import {
  CARS_BY_ID,
  isCarAvailableForParticipants,
} from './components/steps/car-choice/constants';
import { isContactValueValid } from './components/steps/contact-information/constants';
import {
  computeAttractionTicketsTotal,
  isAttractionSelectionComplete,
} from './components/steps/select-attractions/constants';
import { getTourDayCount } from './components/steps/select-days/utils';
import type {
  GroupType,
  PlanYourTourAnswers,
  PlanYourTourStepDefinition,
  PlanYourTourStepId,
} from './types';

export const GROUP_TYPES: readonly {
  id: GroupType;
  label: string;
}[] = [
  {
    id: 'solo',
    label: 'Solo',
  },
  {
    id: 'partners',
    label: 'Partners',
  },
  {
    id: 'family',
    label: 'Family',
  },
  {
    id: 'group',
    label: 'Group',
  },
];

export const PARTICIPANTS_MIN = 1;
export const FAMILY_GROUP_PARTICIPANTS_MIN = 2;
export const ADULTS_MIN = 1;
export const PARTICIPANTS_MAX = 6;
export const TOUR_PRICE_PER_DAY = 300;
export const TOUR_PRICE_PER_PERSON_PER_DAY = 25;

export const computeTourPrice = (answers: PlanYourTourAnswers) => {
  const {
    endDate,
    startDate,
  } = answers['select-days'];

  if (!startDate || !endDate) {
    return 0;
  }

  const dayCount = getTourDayCount(startDate, endDate);
  const {
    adults,
    participants,
  } = answers['select-participants'];
  const attractionTickets = computeAttractionTicketsTotal(
    answers['select-attractions'].selectedIds,
    adults,
    participants,
  );
  const selectedCarId = answers['car-choice'].carId;
  const carPricePerDay = selectedCarId
    ? CARS_BY_ID[selectedCarId]?.price ?? 0
    : 0;

  return dayCount * TOUR_PRICE_PER_DAY
    + dayCount * participants * TOUR_PRICE_PER_PERSON_PER_DAY
    + attractionTickets
    + dayCount * carPricePerDay;
};

export const INITIAL_ANSWERS: PlanYourTourAnswers = {
  'select-days': {
    endDate: null,
    startDate: null,
  },
  'select-participants': {
    adults: 0,
    groupType: null,
    participants: 0,
  },
  'select-attractions': {
    autoChoice: false,
    selectedIds: [
    ],
  },
  'car-choice': { carId: null },
  'contact-information': {
    agreedToPrivacy: false,
    contactValue: '',
    method: 'email',
  },
};

export const INITIAL_STEP_ID: PlanYourTourStepId = 'select-days';

export const getMinParticipantsForGroup = (groupType: GroupType) => {
  switch (groupType) {
    case 'family':
    case 'group': {
      return FAMILY_GROUP_PARTICIPANTS_MIN;
    }
    case 'partners': {
      return 2;
    }
    default: {
      return PARTICIPANTS_MIN;
    }
  }
};

export const getMaxParticipantsForGroup = (groupType: GroupType) => {
  switch (groupType) {
    case 'solo': {
      return 1;
    }
    case 'partners': {
      return 2;
    }
    default: {
      return PARTICIPANTS_MAX;
    }
  }
};

export const getDefaultsForGroup = (groupType: GroupType) => {
  switch (groupType) {
    case 'solo': {
      return {
        adults: 1,
        participants: 1,
      };
    }
    case 'partners': {
      return {
        adults: 2,
        participants: 2,
      };
    }
    case 'family': {
      return {
        adults: 2,
        participants: 4,
      };
    }
    case 'group': {
      return {
        adults: 2,
        participants: 4,
      };
    }
  }
};

/**
 * Declarative step registry. Append new steps here as Figma frames land —
 * wizard UI, progress, and navigation derive from this list.
 */
export const PLAN_YOUR_TOUR_STEPS: readonly PlanYourTourStepDefinition[] = [
  {
    id: 'select-days',
    isComplete: (answers) => {
      return Boolean(
        answers['select-days'].startDate
        && answers['select-days'].endDate,
      );
    },
    label: 'Step 1',
    title: 'Dates 📆',
  },
  {
    id: 'select-participants',
    isComplete: (answers) => {
      const {
        adults,
        groupType,
        participants,
      } = answers['select-participants'];

      return Boolean(
        groupType
        && participants >= getMinParticipantsForGroup(groupType)
        && adults >= ADULTS_MIN
        && adults <= participants,
      );
    },
    label: 'Step 2',
    title: 'Number of People 👨‍👩‍👧‍👦',
  },
  {
    id: 'select-attractions',
    isComplete: (answers) => {
      if (answers['select-attractions'].autoChoice) {
        return true;
      }

      const {
        endDate,
        startDate,
      } = answers['select-days'];

      if (!startDate || !endDate) {
        return false;
      }

      return isAttractionSelectionComplete(
        answers['select-attractions'].selectedIds,
        getTourDayCount(startDate, endDate),
      );
    },
    label: 'Step 3',
    title: 'Attractions 🏛',
  },
  {
    id: 'car-choice',
    isComplete: (answers) => {
      const carId = answers['car-choice'].carId;

      if (!carId) {
        return false;
      }

      return isCarAvailableForParticipants(
        carId,
        answers['select-participants'].participants,
      );
    },
    label: 'Step 4',
    title: 'Transportation 🚗',
  },
  {
    id: 'contact-information',
    isComplete: (answers) => {
      const {
        agreedToPrivacy,
        contactValue,
        method,
      } = answers['contact-information'];

      return agreedToPrivacy && isContactValueValid(method, contactValue);
    },
    label: 'Step 5',
    title: 'Contact Details 📱',
  },
];
