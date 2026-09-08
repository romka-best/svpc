import type Stripe from 'stripe';

import { computeTourPriceLines } from '@/app/home/components/plan-your-tour/constants';
import type { PlanYourTourAnswers } from '@/app/home/components/plan-your-tour/types';
import {
  LinkAnchor,
  LinkHref, 
} from '@/constants/links';

import { getStripeClient } from './client';
import { getAppUrl } from './env';

export const CHECKOUT_INTEGRATION_IDENTIFIER = 'svpc_tour_wqhnrlep';
export const CHECKOUT_SESSION_ID_PATTERN = /^cs_(test|live)_/;

const METADATA_VALUE_MAX_LENGTH = 500;
const DOLLARS_TO_CENTS = 100;

const toMetadataValue = (value: string) => {
  return value.slice(0, METADATA_VALUE_MAX_LENGTH);
};

const dollarsToCents = (amount: number) => {
  return Math.round(amount * DOLLARS_TO_CENTS);
};

const getCheckoutReturnUrl = (query: string) => {
  return `${getAppUrl()}${LinkHref.Home}?${query}${LinkAnchor.PlanYourTour}`;
};

const buildCheckoutMetadata = (answers: PlanYourTourAnswers) => {
  const contact = answers['contact-information'];
  const participants = answers['select-participants'];
  const attractions = answers['select-attractions'];

  return {
    adults: String(participants.adults),
    attractionIds: toMetadataValue(attractions.selectedIds.join(',')),
    autoChoice: attractions.autoChoice ? 'true' : 'false',
    carId: answers['car-choice'].carId ?? '',
    contactMethod: contact.method,
    contactValue: toMetadataValue(contact.contactValue.trim()),
    endDate: answers['select-days'].endDate ?? '',
    groupType: participants.groupType ?? '',
    participants: String(participants.participants),
    source: 'plan-your-tour',
    startDate: answers['select-days'].startDate ?? '',
  };
};

const buildCheckoutLineItems = (answers: PlanYourTourAnswers) => {
  return computeTourPriceLines(answers).map((line) => {
    const productData: Stripe.Checkout.SessionCreateParams.LineItem.PriceData.ProductData = { name: line.name };

    if (line.description) {
      productData.description = line.description;
    }

    return {
      price_data: {
        currency: 'usd',
        product_data: productData,
        unit_amount: dollarsToCents(line.unitAmount),
      },
      quantity: line.quantity,
    };
  });
};

export const createTourCheckoutSession = async (answers: PlanYourTourAnswers) => {
  const stripe = getStripeClient();
  const metadata = buildCheckoutMetadata(answers);
  const startDate = metadata.startDate;
  const endDate = metadata.endDate;
  const contact = answers['contact-information'];
  const customerEmail = contact.method === 'email'
    ? contact.contactValue.trim()
    : undefined;

  return stripe.checkout.sessions.create({
    cancel_url: getCheckoutReturnUrl('checkout=cancelled'),
    customer_email: customerEmail,
    integration_identifier: CHECKOUT_INTEGRATION_IDENTIFIER,
    line_items: buildCheckoutLineItems(answers),
    metadata,
    mode: 'payment',
    origin_context: 'web',
    payment_intent_data: {
      description: startDate && endDate
        ? `Private tour ${startDate} to ${endDate}`
        : 'Private Silicon Valley tour',
      metadata,
    },
    success_url: getCheckoutReturnUrl('session_id={CHECKOUT_SESSION_ID}'),
  }, { idempotencyKey: crypto.randomUUID() });
};

export const retrieveTourCheckoutSession = async (sessionId: string) => {
  const stripe = getStripeClient();

  return stripe.checkout.sessions.retrieve(sessionId);
};

export const isPaidCheckoutSession = (
  session: Pick<Stripe.Checkout.Session, 'payment_status'>,
) => {
  return session.payment_status === 'paid';
};
