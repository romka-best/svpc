import { getTourDayCount } from '@/app/home/components/plan-your-tour/components/steps/select-days/utils';
import { computeTourPrice } from '@/app/home/components/plan-your-tour/constants';
import type {
  PlanYourTourAnswers,
  PlanYourTourStepId,
} from '@/app/home/components/plan-your-tour/types';

const getAnswersDayCount = (answers: PlanYourTourAnswers) => {
  const {
    endDate,
    startDate,
  } = answers['select-days'];

  if (!startDate || !endDate) {
    return 0;
  }

  return getTourDayCount(startDate, endDate);
};

const getPlannerStepProperties = (
  stepId: PlanYourTourStepId,
  answers: PlanYourTourAnswers,
) => {
  switch (stepId) {
    case 'select-days': {
      return {
        detail: String(getAnswersDayCount(answers)),
        step: 'dates',
      };
    }
    case 'select-participants': {
      const {
        groupType,
        participants,
      } = answers['select-participants'];

      return {
        detail: `${groupType ?? 'unknown'}-${participants}`,
        step: 'people',
      };
    }
    case 'select-attractions': {
      const {
        autoChoice,
        selectedIds,
      } = answers['select-attractions'];

      return {
        detail: autoChoice ? 'surprise' : String(selectedIds.length),
        step: 'attractions',
      };
    }
    case 'car-choice': {
      return {
        detail: answers['car-choice'].carId ?? 'none',
        step: 'car',
      };
    }
    case 'contact-information': {
      return {
        detail: answers['contact-information'].method,
        step: 'contact',
      };
    }
  }
};

const getCheckoutProperties = (answers: PlanYourTourAnswers) => {
  return {
    amount: computeTourPrice(answers),
    days: getAnswersDayCount(answers),
  };
};

export {
  getCheckoutProperties,
  getPlannerStepProperties,
};
