export class StripeConfigError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'StripeConfigError';
  }
}

const STRIPE_SECRET_KEY_PATTERN = /^(rk|sk)_(test|live)_/;

export const getStripeSecretKey = () => {
  const secretKey = process.env.STRIPE_SECRET_KEY?.trim();

  if (!secretKey) {
    throw new StripeConfigError(
      'Missing STRIPE_SECRET_KEY. Add a restricted test key (rk_test_...) to .env.local.',
    );
  }

  if (!STRIPE_SECRET_KEY_PATTERN.test(secretKey)) {
    throw new StripeConfigError(
      'STRIPE_SECRET_KEY must be a Stripe restricted or secret key.',
    );
  }

  return secretKey;
};

export const getStripeWebhookSecret = () => {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET?.trim();

  if (!webhookSecret) {
    throw new StripeConfigError(
      'Missing STRIPE_WEBHOOK_SECRET. Use the Dashboard webhook secret or `stripe listen`.',
    );
  }

  if (!webhookSecret.startsWith('whsec_')) {
    throw new StripeConfigError(
      'STRIPE_WEBHOOK_SECRET must be a Stripe webhook signing secret.',
    );
  }

  return webhookSecret;
};

export const getAppUrl = () => {
  const configured = process.env.NEXT_PUBLIC_APP_URL?.trim().replace(/\/$/, '');

  if (configured) {
    return configured;
  }

  const vercelHost = process.env.VERCEL_URL?.trim().replace(/\/$/, '');

  if (vercelHost) {
    return `https://${vercelHost}`;
  }

  return 'http://localhost:3000';
};
