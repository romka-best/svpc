export interface Link {
  label?: string;
  href: string;
  icon?: string;
  alt?: string;
  target?: '_blank' | '_self';
}

export enum LinkHref {
  Home = '/home',
  PrivacyPolicy = '/privacy-policy',
}

export enum LinkAnchor {
  Hero = '#hero',
  TourForYou = '#tour-for-you',
  AboutGuide = '#about-guide',
  MostPopularPlaces = '#most-popular-places',
  Reviews = '#reviews',
  CreateTour = '#create-tour',
  FAQ = '#faq',
  SiteMap = '#site-map',
}

export const homeLinks: Link[] = [
  {
    label: 'Start Hero',
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
    label: 'Experiences from Adventures',
    href: `${LinkHref.Home}${LinkAnchor.Reviews}`,
  },
  {
    label: 'FAQ',
    href: `${LinkHref.Home}${LinkAnchor.FAQ}`,
  },
  {
    label: 'Site Map',
    href: `${LinkHref.Home}${LinkAnchor.SiteMap}`,
  },
];

export const legalLinks: Link[] = [
  {
    label: 'Privacy Policy',
    href: LinkHref.PrivacyPolicy,
  },
];

export const socialLinks: Link[] = [
  {
    icon: '/icons/linkedin.svg',
    href: '/linkedin',
    alt: 'LinkedIn',
    target: '_blank',
  },
  {
    icon: '/icons/instagram.svg',
    href: '/instagram',
    alt: 'Instagram',
    target: '_blank',
  },
  {
    icon: '/icons/youtube.svg',
    href: '/youtube',
    alt: 'YouTube',
    target: '_blank',
  },
];
