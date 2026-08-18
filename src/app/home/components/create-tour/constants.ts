import { isCarAvailableForParticipants } from './components/steps/car-choice/constants';
import { isContactValueValid } from './components/steps/contact-information/constants';
import type {
  CreateTourAnswers,
  CreateTourStepDefinition,
  CreateTourStepId,
  GroupType,
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

export const INITIAL_ANSWERS: CreateTourAnswers = {
  'select-days': {
    endDate: null,
    startDate: null,
  },
  'select-participants': {
    adults: 1,
    groupType: 'solo',
    participants: 1,
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

export const INITIAL_STEP_ID: CreateTourStepId = 'select-days';

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
export const CREATE_TOUR_STEPS: readonly CreateTourStepDefinition[] = [
  {
    id: 'select-days',
    isComplete: (answers) => {
      return Boolean(
        answers['select-days'].startDate
        && answers['select-days'].endDate,
      );
    },
    label: 'Step 1',
    title: 'Select number of days 📆',
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
    title: 'Select travel participants 👨‍👩‍👧‍👦',
  },
  {
    id: 'select-attractions',
    isComplete: (answers) => {
      return answers['select-attractions'].selectedIds.length > 0;
    },
    label: 'Step 3',
    title: 'Select attractions 🏛',
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
    title: 'Select transportation 🚗',
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
    title: 'Contact information 📱',
  },
];
