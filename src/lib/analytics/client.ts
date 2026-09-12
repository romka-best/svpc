import { track } from '@vercel/analytics';

import type {
  PlanYourTourAnswers,
  PlanYourTourStepId,
} from '@/app/home/components/plan-your-tour/types';

import {
  ANALYTICS_EVENT,
  type CheckoutFailureStage,
  clipAnalyticsValue,
  type CtaDestination,
  type CtaLocation,
  type GuideContactChannel,
  type GuideContactLocation,
} from './events';
import {
  getCheckoutProperties,
  getPlannerStepProperties,
} from './planner';

const trackEvent = (
  name: string,
  properties: Record<string, string | number | boolean | null>,
) => {
  try {
    track(name, properties);
  } catch {
    return;
  }
};

const trackCtaClicked = ({
  destination,
  location,
}: {
  destination: CtaDestination;
  location: CtaLocation;
}) => {
  trackEvent(ANALYTICS_EVENT.CtaClicked, {
    destination,
    location,
  });
};

const trackPlannerStepCompleted = (
  stepId: PlanYourTourStepId,
  answers: PlanYourTourAnswers,
) => {
  trackEvent(
    ANALYTICS_EVENT.PlannerStepCompleted,
    getPlannerStepProperties(stepId, answers),
  );
};

const trackAttractionSelected = ({
  category,
  name,
}: {
  category: string;
  name: string;
}) => {
  trackEvent(ANALYTICS_EVENT.AttractionSelected, {
    category: clipAnalyticsValue(category),
    name: clipAnalyticsValue(name),
  });
};

const trackCheckoutStarted = (answers: PlanYourTourAnswers) => {
  trackEvent(
    ANALYTICS_EVENT.CheckoutStarted,
    getCheckoutProperties(answers),
  );
};

const trackCheckoutAbandoned = (answers: PlanYourTourAnswers) => {
  trackEvent(
    ANALYTICS_EVENT.CheckoutAbandoned,
    getCheckoutProperties(answers),
  );
};

const trackCheckoutFailed = ({
  reason,
  stage,
}: {
  reason: string;
  stage: CheckoutFailureStage;
}) => {
  trackEvent(ANALYTICS_EVENT.CheckoutFailed, {
    reason: clipAnalyticsValue(reason),
    stage,
  });
};

const trackGuideContacted = ({
  channel,
  location,
}: {
  channel: GuideContactChannel;
  location: GuideContactLocation;
}) => {
  trackEvent(ANALYTICS_EVENT.GuideContacted, {
    channel,
    location,
  });
};

export {
  trackAttractionSelected,
  trackCheckoutAbandoned,
  trackCheckoutFailed,
  trackCheckoutStarted,
  trackCtaClicked,
  trackGuideContacted,
  trackPlannerStepCompleted,
};
