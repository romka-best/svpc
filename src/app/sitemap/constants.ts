import {
  homeLinks,
  legalLinks,
  LinkHref,
} from '@/constants/links';

export const SITEMAP_LINKS = [
  ...homeLinks,
  ...legalLinks.filter((link) => {
    return link.href !== LinkHref.Sitemap;
  }),
];
