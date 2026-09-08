import type { PlanYourTourAnswers } from '@/app/home/components/plan-your-tour/types';

export const createCheckoutSession = async (answers: PlanYourTourAnswers) => {
  const response = await fetch('/api/checkout', {
    body: JSON.stringify({ answers }),
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
  });
  const payload = await response.json() as {
    error?: string;
    url?: string;
  };

  if (!response.ok || !payload.url) {
    throw new Error(payload.error ?? 'Unable to start checkout.');
  }

  return payload.url;
};

export const getCheckoutSessionStatus = async (sessionId: string) => {
  const response = await fetch(`/api/checkout?session_id=${encodeURIComponent(sessionId)}`);
  const payload = await response.json() as {
    error?: string;
    paid?: boolean;
  };

  if (!response.ok) {
    throw new Error(payload.error ?? 'Unable to confirm payment.');
  }

  return Boolean(payload.paid);
};
