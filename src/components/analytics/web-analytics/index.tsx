'use client';

import { Analytics } from '@vercel/analytics/next';

import { redactAnalyticsEvent } from '@/lib/analytics/redact';

const WebAnalytics = () => {
  return (
    <Analytics beforeSend={redactAnalyticsEvent} />
  );
};

export { WebAnalytics };
