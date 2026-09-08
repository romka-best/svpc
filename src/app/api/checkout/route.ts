import { NextResponse } from 'next/server';

import {
  isBookingReadyForCheckout,
  isPlanYourTourAnswers,
} from '@/app/home/components/plan-your-tour/validation';
import {
  CHECKOUT_SESSION_ID_PATTERN,
  createTourCheckoutSession,
  isPaidCheckoutSession,
  retrieveTourCheckoutSession,
} from '@/lib/stripe/checkout';
import { StripeConfigError } from '@/lib/stripe/env';

export const dynamic = 'force-dynamic';

const jsonError = (message: string, status: number) => {
  return NextResponse.json({ error: message }, { status });
};

export async function POST(request: Request) {
  try {
    const payload = await request.json() as unknown;

    if (
      typeof payload !== 'object'
      || payload === null
      || !('answers' in payload)
      || !isPlanYourTourAnswers(payload.answers)
    ) {
      return jsonError('Tour details are incomplete.', 400);
    }

    if (!isBookingReadyForCheckout(payload.answers)) {
      return jsonError('Tour details are incomplete.', 400);
    }

    const session = await createTourCheckoutSession(payload.answers);

    if (!session.url) {
      return jsonError('Unable to start checkout.', 500);
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    if (error instanceof StripeConfigError) {
      return jsonError(error.message, 503);
    }

    if (error instanceof SyntaxError) {
      return jsonError('Tour details are incomplete.', 400);
    }

    return jsonError('Unable to start checkout.', 500);
  }
}

export async function GET(request: Request) {
  const sessionId = new URL(request.url).searchParams.get('session_id')?.trim();

  if (!sessionId || !CHECKOUT_SESSION_ID_PATTERN.test(sessionId)) {
    return jsonError('Missing checkout session.', 400);
  }

  try {
    const session = await retrieveTourCheckoutSession(sessionId);

    return NextResponse.json({
      paymentStatus: session.payment_status,
      paid: isPaidCheckoutSession(session),
      status: session.status,
    });
  } catch (error) {
    if (error instanceof StripeConfigError) {
      return jsonError(error.message, 503);
    }

    return jsonError('Unable to confirm payment.', 500);
  }
}
