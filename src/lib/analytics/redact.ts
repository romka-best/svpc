import type { BeforeSend } from '@vercel/analytics';

const SENSITIVE_SEARCH_PARAMS = [
  'checkout',
  'session_id',
] as const;

const redactAnalyticsEvent: BeforeSend = (event) => {
  try {
    const url = new URL(event.url, 'http://localhost');

    SENSITIVE_SEARCH_PARAMS.forEach((param) => {
      url.searchParams.delete(param);
    });

    const isAbsolute = event.url.startsWith('http://')
      || event.url.startsWith('https://');

    return {
      ...event,
      url: isAbsolute
        ? url.toString()
        : `${url.pathname}${url.search}${url.hash}`,
    };
  } catch {
    return event;
  }
};

export { redactAnalyticsEvent };
