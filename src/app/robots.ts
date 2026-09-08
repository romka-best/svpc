import type { MetadataRoute } from 'next';

import { getAppUrl } from '@/lib/stripe/env';

const robots = (): MetadataRoute.Robots => {
  const baseUrl = getAppUrl();

  return {
    rules: {
      allow: '/',
      userAgent: '*',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
};

export default robots;
