import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { AuthorInfo } from '@/components/ui/common/author-info';
import { CTAButton } from '@/components/ui/common/cta-button';
import { Logo } from '@/components/ui/common/logo';
import {
  homeLinks,
  legalLinks,
  socialLinks, 
} from '@/constants/links';

import { FooterLinks } from './components/links';

const Footer = () => {
  return (
    <footer className="flex flex-col gap-10 bg-muted p-5 sm:p-10 xl:flex-row xl:justify-between">
      <div className="order-2 flex flex-col gap-2 xl:order-1 xl:mt-0 xl:justify-between">
        <Logo />
        <div className="flex flex-col gap-2">
          <Button
            asChild
            className="text-muted-foreground"
            size="s"
            variant="link"
          >
            <Link
              href="mailto:me@romandanilov.com"
              target="_blank"
            >
              me@romandanilov.com
            </Link>
          </Button>
          <Button
            asChild
            className="text-muted-foreground"
            size="s"
            variant="link"
          >
            <Link
              href="https://t.me/roman_danilov"
              target="_blank"
            >
              @roman_danilov
            </Link>
          </Button>
          <p className="text-sm font-medium text-muted-foreground">All rights reserved | {new Date().getFullYear()}</p>
        </div>
      </div>

      <div className="order-1 flex flex-col gap-7.5 sm:gap-12.5 xl:order-2 md:flex-row md:justify-between">
        <div className="flex flex-col gap-4 items-start">
          <FooterLinks
            links={homeLinks}
            title="Home Page"
          />
          <CTAButton />
        </div>

        <div className="flex flex-col gap-4 items-start">
          <FooterLinks
            links={legalLinks}
            title="Legal information"
          />
        </div>

        <div className="flex flex-col gap-4">
          <FooterLinks
            direction="horizontal"
            links={socialLinks}
            title="Social media"
          />
          <AuthorInfo />
        </div>
      </div>
    </footer>
  );
};

export { Footer };
