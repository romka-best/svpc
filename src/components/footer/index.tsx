
import Link from 'next/link';

import { AuthorInfo } from '@/components/ui/common/author-info';
import { CTAButton } from '@/components/ui/common/cta-button';
import { GroupLinks } from '@/components/ui/common/group-links';
import { Logo } from '@/components/ui/common/logo';

const homeLinks = [
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

const legalLinks = [
  {
    label: 'Privacy Policy',
    href: '/privacy-policy',
  },
];

const socialLinks = [
  {
    icon: '/icons/linkedin.svg',
    href: '/linkedin',
    label: 'LinkedIn',
  },
  {
    icon: '/icons/instagram.svg',
    href: '/instagram',
    label: 'Instagram',
  },
  {
    icon: '/icons/youtube.svg',
    href: '/youtube',
    label: 'YouTube',
  },
];

const Footer = () => {
  return (
    <footer className="flex flex-col bg-muted p-5 sm:p-10 xl:flex-row xl:justify-between">
      <div className="order-2 flex flex-col gap-2 mt-10 xl:order-1 xl:mt-0 xl:justify-between">
        <Logo />
        <div className="flex flex-col gap-2">
          <Link
            className="text-sm font-medium text-muted-foreground"
            href="/"
          >
            me@romandanilov.com
          </Link>
          <Link
            className="text-sm font-medium text-muted-foreground"
            href="/"
          >
            @roman_danilov
          </Link>
          <p className="text-sm font-medium text-muted-foreground">All rights reserved | {new Date().getFullYear()}</p>
        </div>
      </div>

      <div className="order-1 flex flex-col gap-10 xl:order-2 md:flex-row md:justify-between">
        <div className="flex flex-col gap-4 items-start">
          <GroupLinks
            links={homeLinks}
            title="Home Page"
          />
          <CTAButton />
        </div>

        <div className="flex flex-col gap-4 items-start">
          <GroupLinks
            links={legalLinks}
            title="Legal information"
          />
        </div>

        <div className="flex flex-col gap-7 items-start">
          <div className="flex flex-col gap-4">
            <GroupLinks
              direction="horizontal"
              links={socialLinks}
              title="Social media"
            />
            <AuthorInfo />
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
