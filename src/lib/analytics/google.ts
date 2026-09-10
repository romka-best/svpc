export const GOOGLE_ADS_ID = 'AW-18439105590';
export const GOOGLE_ANALYTICS_ID = 'G-CW5KHHQ9NV';
export const GOOGLE_ADS_LEAD_CONVERSION_SEND_TO = `${GOOGLE_ADS_ID}/vMkUCNvp1_EcELbYudhE`;

const CONVERSION_CALLBACK_TIMEOUT_MS = 2000;

declare global {
  interface Window {
    gtag?: (
      command: 'event',
      eventName: string,
      params?: {
        currency?: string;
        event_callback?: () => void;
        event_timeout?: number;
        send_to?: string;
        value?: number;
      },
    ) => void;
  }
}

const reportGoogleAdsLeadConversion = () => {
  return new Promise<void>((resolve) => {
    let settled = false;

    const settle = () => {
      if (settled) {
        return;
      }

      settled = true;
      resolve();
    };

    window.setTimeout(settle, CONVERSION_CALLBACK_TIMEOUT_MS);

    if (typeof window.gtag !== 'function') {
      settle();
      return;
    }

    window.gtag('event', 'conversion', {
      currency: 'USD',
      event_callback: settle,
      event_timeout: CONVERSION_CALLBACK_TIMEOUT_MS,
      send_to: GOOGLE_ADS_LEAD_CONVERSION_SEND_TO,
      value: 1,
    });
  });
};

export { reportGoogleAdsLeadConversion };
