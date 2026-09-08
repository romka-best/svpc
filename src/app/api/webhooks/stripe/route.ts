import { NextResponse } from 'next/server';

import type Stripe from 'stripe';

import { getTourDayCount } from '@/app/home/components/plan-your-tour/components/steps/select-days/utils';
import { trackTourBooked } from '@/lib/analytics/server';
import { getStripeClient } from '@/lib/stripe/client';
import {
  getStripeWebhookSecret,
  StripeConfigError,
} from '@/lib/stripe/env';

export const dynamic = 'force-dynamic';

const CENTS_IN_DOLLAR = 100;

const fulfillPaidTour = async (session: Stripe.Checkout.Session) => {
  if (session.payment_status !== 'paid') {
    return;
  }

  const startDate = session.metadata?.startDate;
  const endDate = session.metadata?.endDate;
  const days = startDate && endDate
    ? getTourDayCount(startDate, endDate)
    : 0;

  console.info('Tour booking paid', {
    amountTotal: session.amount_total,
    endDate: session.metadata?.endDate,
    paymentStatus: session.payment_status,
    sessionId: session.id,
    startDate: session.metadata?.startDate,
  });

  try {
    await trackTourBooked({
      amount: (session.amount_total ?? 0) / CENTS_IN_DOLLAR,
      days,
    });
  } catch (error) {
    console.error(
      'Tour booked analytics failed',
      error instanceof Error ? error.message : error,
    );
  }
};

export async function POST(request: Request) {
  const signature = request.headers.get('stripe-signature');

  if (!signature) {
    return NextResponse.json({ error: 'Missing Stripe signature.' }, { status: 400 });
  }

  try {
    const stripe = getStripeClient();
    const event = await stripe.webhooks.constructEventAsync(
      await request.text(),
      signature,
      getStripeWebhookSecret(),
    );

    switch (event.type) {
      case 'checkout.session.completed':
      case 'checkout.session.async_payment_succeeded': {
        await fulfillPaidTour(event.data.object);
        break;
      }
      default: {
        break;
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    if (error instanceof StripeConfigError) {
      return NextResponse.json({ error: error.message }, { status: 503 });
    }

    return NextResponse.json({ error: 'Invalid Stripe signature.' }, { status: 400 });
  }
}
