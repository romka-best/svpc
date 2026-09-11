import {
  CARS_BY_ID,
  isCarAvailableForParticipants,
} from './components/steps/car-choice/constants';
import { isContactValueValid } from './components/steps/contact-information/constants';
import {
  ATTRACTIONS_BY_ID,
  getAttractionChildPrice,
  isAttractionSelectionComplete,
} from './components/steps/select-attractions/constants';
import {
  formatRangeLabel,
  getTourDayCount,
  isTourDateRangeAllowed,
} from './components/steps/select-days/utils';
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
    label: 'Couple',
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

export interface TourPriceLine {
  amount: number;
  description?: string;
  name: string;
  quantity: number;
  unitAmount: number;
}

const pluralize = (count: number, singular: string, plural: string) => {
  return count === 1 ? singular : plural;
};

export const computeTourPriceLines = (answers: PlanYourTourAnswers) => {
  const {
    endDate,
    startDate,
  } = answers['select-days'];

  if (!startDate || !endDate) {
    return [
    ];
  }

  const dayCount = getTourDayCount(startDate, endDate);

  if (dayCount < 1) {
    return [
    ];
  }

  const {
    adults,
    participants,
  } = answers['select-participants'];
  const dateLabel = formatRangeLabel(startDate, endDate);
  const selectedCarId = answers['car-choice'].carId;
  const car = selectedCarId
    ? CARS_BY_ID[selectedCarId]
    : null;
  const childrenCount = Math.max(0, participants - adults);
  const lines: TourPriceLine[] = [
    {
      amount: dayCount * TOUR_PRICE_PER_DAY,
      description: `${dateLabel} · ${dayCount} ${pluralize(dayCount, 'day', 'days')}`,
      name: 'Tour',
      quantity: dayCount,
      unitAmount: TOUR_PRICE_PER_DAY,
    },
    {
      amount: dayCount * participants * TOUR_PRICE_PER_PERSON_PER_DAY,
      description: `${participants} ${pluralize(participants, 'guest', 'guests')} · ${dayCount} ${pluralize(dayCount, 'day', 'days')}`,
      name: 'Lunch',
      quantity: dayCount * participants,
      unitAmount: TOUR_PRICE_PER_PERSON_PER_DAY,
    },
  ];

  if (car) {
    lines.push({
      amount: dayCount * car.price,
      description: `${car.label} · ${dayCount} ${pluralize(dayCount, 'day', 'days')}`,
      name: 'Vehicle',
      quantity: dayCount,
      unitAmount: car.price,
    });
  }

  answers['select-attractions'].selectedIds.forEach((id) => {
    const attraction = ATTRACTIONS_BY_ID[id];

    if (!attraction) {
      return;
    }

    const amount = attraction.isGroupPrice
      ? attraction.price
      : adults * attraction.price
        + childrenCount * getAttractionChildPrice(attraction);

    lines.push({
      amount,
      name: attraction.title,
      quantity: 1,
      unitAmount: amount,
    });
  });

  return lines.filter((line) => {
    return line.quantity > 0;
  });
};

export const computeTourPrice = (answers: PlanYourTourAnswers) => {
  return computeTourPriceLines(answers).reduce((total, line) => {
    return total + line.amount;
  }, 0);
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
        adults: 4,
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
      return isTourDateRangeAllowed(
        answers['select-days'].startDate,
        answers['select-days'].endDate,
      );
    },
    label: 'Step 1',
    title: 'Dates',
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
    title: 'Guests',
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
    title: 'Attractions',
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
    title: 'Transportation',
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
    title: 'Contact Details',
  },
];
