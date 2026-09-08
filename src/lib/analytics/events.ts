export const ANALYTICS_EVENT = {
  AttractionSelected: 'Attraction Selected',
  CheckoutAbandoned: 'Checkout Abandoned',
  CheckoutFailed: 'Checkout Failed',
  CheckoutStarted: 'Checkout Started',
  CtaClicked: 'CTA Clicked',
  GuideContacted: 'Guide Contacted',
  PlannerStepCompleted: 'Planner Step Completed',
  TourBooked: 'Tour Booked',
} as const;

export const ANALYTICS_PROPERTY_MAX_LENGTH = 255;

export type CtaLocation =
  | 'header'
  | 'hero'
  | 'about-tour'
  | 'footer'
  | 'not-found';

export type CtaDestination =
  | 'planner'
  | 'home';

export type GuideContactLocation =
  | 'confirmation'
  | 'footer'
  | 'menu';

export type GuideContactChannel =
  | 'telegram'
  | 'email';

export type CheckoutFailureStage =
  | 'create'
  | 'confirm';

export const clipAnalyticsValue = (value: string) => {
  if (value.length <= ANALYTICS_PROPERTY_MAX_LENGTH) {
    return value;
  }

  return value.slice(0, ANALYTICS_PROPERTY_MAX_LENGTH);
};
