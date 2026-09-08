'use client';

import { ChevronRight } from 'lucide-react';

import { CtaLink } from '@/components/analytics/cta-link';
import { Button } from '@/components/ui/base/button';
import { LinkAnchor } from '@/constants/links';

const HeroCta = () => {
  return (
    <Button
      asChild
      size="l"
    >
      <CtaLink
        href={LinkAnchor.PlanYourTour}
        location="hero"
      >
        Start Journey
        <ChevronRight className="size-4" />
      </CtaLink>
    </Button>
  );
};

export { HeroCta };
