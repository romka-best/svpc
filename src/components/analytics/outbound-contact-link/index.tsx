'use client';

import type {
  ComponentPropsWithoutRef,
  MouseEvent,
} from 'react';
import Link from 'next/link';

import { trackGuideContacted } from '@/lib/analytics/client';
import type {
  GuideContactChannel,
  GuideContactLocation,
} from '@/lib/analytics/events';

interface OutboundContactLinkProps extends ComponentPropsWithoutRef<'a'> {
  channel: GuideContactChannel;
  href: string;
  location: GuideContactLocation;
}

const OutboundContactLink = ({
  channel,
  location,
  onClick,
  ...props
}: OutboundContactLinkProps) => {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    trackGuideContacted({
      channel,
      location,
    });
    onClick?.(event);
  };

  return (
    <Link
      {...props}
      onClick={handleClick}
    />
  );
};

export { OutboundContactLink };
