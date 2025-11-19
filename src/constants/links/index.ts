export interface Link {
  label?: string;
  href: string;
  icon?: string;
  alt?: string;
  target?: '_blank' | '_self';
}

export const homeLinks: Link[] = [
  {
    label: 'Start Hero',
    href: '/home#hero',
  },
  {
    label: 'Tour For You',
    href: '/home#tour-for-you',
  },
  {
    label: 'Silicon Valley Boy',
    href: '/home#silicon-valley-boy',
  },
  {
    label: 'Most popular places',
    href: '/home#most-popular-places',
  },
  {
    label: 'Experiences from Adventures',
    href: '/home#experiences-from-adventures',
  },
  {
    label: 'FAQ',
    href: '/home#faq',
  },
  {
    label: 'Site Map',
    href: '/home#site-map',
  },
];

export const legalLinks: Link[] = [
  {
    label: 'Privacy Policy',
    href: '/privacy-policy',
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
