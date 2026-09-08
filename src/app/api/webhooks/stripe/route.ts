import { NextResponse } from 'next/server';

import type Stripe from 'stripe';

import { getStripeClient } from '@/lib/stripe/client';
import {
  StripeConfigError, getStripeWebhookSecret, 
} from '@/lib/stripe/env';

export const dynamic = 'force-dynamic';

const fulfillPaidTour = (session: Stripe.Checkout.Session) => {
  if (session.payment_status !== 'paid') {
    return;
  }

  console.info('Tour booking paid', {
    amountTotal: session.amount_total,
    endDate: session.metadata?.endDate,
    paymentStatus: session.payment_status,
    sessionId: session.id,
    startDate: session.metadata?.startDate,
  });
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
        fulfillPaidTour(event.data.object);
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
