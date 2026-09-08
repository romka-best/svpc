'use client';

import { AnchorLink } from '@/components/ui/base/anchor-link';
import type { AnchorLinkProps } from '@/components/ui/base/anchor-link/types';
import { trackCtaClicked } from '@/lib/analytics/client';
import type {
  CtaDestination,
  CtaLocation,
} from '@/lib/analytics/events';

interface CtaLinkProps extends AnchorLinkProps {
  destination?: CtaDestination;
  location: CtaLocation;
}

const CtaLink = ({
  destination = 'planner',
  location,
  onClick,
  ...props
}: CtaLinkProps) => {
  return (
    <AnchorLink
      {...props}
      onClick={(event) => {
        trackCtaClicked({
          destination,
          location,
        });
        onClick?.(event);
      }}
    />
  );
};

export { CtaLink };
