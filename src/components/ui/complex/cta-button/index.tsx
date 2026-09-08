'use client';

import { CtaLink } from '@/components/analytics/cta-link';
import { Button } from '@/components/ui/base/button';
import {
  LinkAnchor,
  LinkHref,
} from '@/constants/links';
import type { CtaLocation } from '@/lib/analytics/events';

import { CTAButtonContent } from './components/content';

const CTA_HREF = `${LinkHref.Home}${LinkAnchor.PlanYourTour}`;

interface CTAButtonProps {
  location: CtaLocation;
}

const CTAButton = ({ location }: CTAButtonProps) => {
  return (
    <>
      {/* Mobile */}
      <Button
        asChild
        className="flex sm:hidden"
        size="xs"
        variant="outline"
      >
        <CtaLink
          href={CTA_HREF}
          location={location}
        >
          <CTAButtonContent />
        </CtaLink>
      </Button>

      {/* Desktop */}
      <Button
        asChild
        className="hidden sm:flex"
        size="s"
        variant="outline"
      >
        <CtaLink
          href={CTA_HREF}
          location={location}
        >
          <CTAButtonContent />
        </CtaLink>
      </Button>
    </>
  );
};

export { CTAButton };
