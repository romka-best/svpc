import { OutboundContactLink } from '@/components/analytics/outbound-contact-link';
import { Button } from '@/components/ui/base/button';
import { Logo } from '@/components/ui/base/logo';
import { AuthorInfo } from '@/components/ui/complex/author-info';
import { CTAButton } from '@/components/ui/complex/cta-button';
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
            <OutboundContactLink
              channel="email"
              href="mailto:me@romandanilov.com"
              location="footer"
              target="_blank"
            >
              me@romandanilov.com
            </OutboundContactLink>
          </Button>
          <Button
            asChild
            className="text-muted-foreground"
            size="s"
            variant="link"
          >
            <OutboundContactLink
              channel="telegram"
              href="https://t.me/roman_danilov"
              location="footer"
              target="_blank"
            >
              @roman_danilov
            </OutboundContactLink>
          </Button>
          <p className="text-sm font-medium text-muted-foreground">All rights reserved | {new Date().getFullYear()}</p>
        </div>
      </div>

      <div className="order-1 flex flex-col gap-7.5 sm:gap-12.5 xl:order-2 md:flex-row md:justify-between">
        <div className="flex flex-col gap-4 items-start">
          <FooterLinks
            links={homeLinks}
            title="Home"
          />
          <CTAButton location="footer" />
        </div>

        <div className="flex flex-col gap-4 items-start">
          <FooterLinks
            links={legalLinks}
            title="Legal"
          />
        </div>

        <div className="flex flex-col gap-4">
          <FooterLinks
            direction="horizontal"
            links={socialLinks}
            title="Social media"
          />
          <AuthorInfo location="footer" />
        </div>
      </div>
    </footer>
  );
};

export { Footer };
