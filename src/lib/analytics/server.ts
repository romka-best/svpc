import { track } from '@vercel/analytics/server';

import { ANALYTICS_EVENT } from './events';

const trackTourBooked = async ({
  amount,
  days,
}: {
  amount: number;
  days: number;
}) => {
  await track(ANALYTICS_EVENT.TourBooked, {
    amount,
    days,
  });
};

export { trackTourBooked };
