import Stripe from 'stripe';

import { getStripeSecretKey } from './env';

let stripeClient: Stripe | null = null;

export const getStripeClient = () => {
  if (!stripeClient) {
    stripeClient = new Stripe(getStripeSecretKey(), { apiVersion: '2026-08-26.dahlia' });
  }

  return stripeClient;
};
