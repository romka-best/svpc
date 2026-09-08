export interface Link {
  label?: string;
  href: string;
  icon?: string;
  alt?: string;
  target?: '_blank' | '_self';
}

export enum LinkHref {
  Home = '/',
  PrivacyPolicy = '/privacy-policy',
  Terms = '/terms',
  Sitemap = '/sitemap',
}

export enum LinkAnchor {
  Hero = '#hero',
  TourForYou = '#tour-for-you',
  AboutGuide = '#about-guide',
  MostPopularPlaces = '#most-popular-places',
  Reviews = '#reviews',
  PlanYourTour = '#plan-your-tour',
  FAQ = '#faq',
}

export const homeLinks: Link[] = [
  {
    label: 'Introduction',
    href: `${LinkHref.Home}${LinkAnchor.Hero}`,
  },
  {
    label: 'Tour For You',
    href: `${LinkHref.Home}${LinkAnchor.TourForYou}`,
  },
  {
    label: 'Silicon Valley Guide',
    href: `${LinkHref.Home}${LinkAnchor.AboutGuide}`,
  },
  {
    label: 'Popular Destinations',
    href: `${LinkHref.Home}${LinkAnchor.MostPopularPlaces}`,
  },
  {
    label: 'Reviews',
    href: `${LinkHref.Home}${LinkAnchor.Reviews}`,
  },
  {
    label: 'Plan Your Tour',
    href: `${LinkHref.Home}${LinkAnchor.PlanYourTour}`,
  },
  {
    label: 'FAQ',
    href: `${LinkHref.Home}${LinkAnchor.FAQ}`,
  },
];

export const legalLinks: Link[] = [
  {
    label: 'Privacy Policy',
    href: LinkHref.PrivacyPolicy,
  },
  {
    label: 'Terms',
    href: LinkHref.Terms,
  },
  {
    label: 'Site Map',
    href: LinkHref.Sitemap,
  },
];

export const socialLinks: Link[] = [
  {
    icon: '/icons/linkedin.svg',
    href: 'https://linkedin.com/in/danilov-roman/',
    alt: 'LinkedIn',
    target: '_blank',
  },
  {
    icon: '/icons/instagram.svg',
    href: 'https://instagram.com/romka__best',
    alt: 'Instagram',
    target: '_blank',
  },
  {
    icon: '/icons/mail.svg',
    href: 'mailto:me@romandanilov.com',
    alt: 'Email',
    target: '_blank',
  },
];
