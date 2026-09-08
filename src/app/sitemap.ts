import type { MetadataRoute } from 'next';

import { LinkHref } from '@/constants/links';
import { getAppUrl } from '@/lib/stripe/env';

const sitemap = (): MetadataRoute.Sitemap => {
  const baseUrl = getAppUrl();

  return Object.values(LinkHref).map((path) => {
    return { url: `${baseUrl}${path}` };
  });
};

export default sitemap;
