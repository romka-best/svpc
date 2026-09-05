import { AnchorLink } from '@/components/ui/base/anchor-link';
import { Button } from '@/components/ui/base/button';
import {
  LinkAnchor,
  LinkHref,
} from '@/constants/links';

import { CTAButtonContent } from './components/content';

const CTA_HREF = `${LinkHref.Home}${LinkAnchor.PlanYourTour}`;

const CTAButton = () => {
  return (
    <>
      {/* Mobile */}
      <Button
        asChild
        className="flex sm:hidden"
        size="xs"
        variant="outline"
      >
        <AnchorLink href={CTA_HREF}>
          <CTAButtonContent />
        </AnchorLink>
      </Button>

      {/* Desktop */}
      <Button
        asChild
        className="hidden sm:flex"
        size="s"
        variant="outline"
      >
        <AnchorLink href={CTA_HREF}>
          <CTAButtonContent />
        </AnchorLink>
      </Button>
    </>
  );
};

export { CTAButton };
