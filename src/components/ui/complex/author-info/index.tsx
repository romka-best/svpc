'use client';

import Image from 'next/image';

import { OutboundContactLink } from '@/components/analytics/outbound-contact-link';
import { Button } from '@/components/ui/base/button';
import type { GuideContactLocation } from '@/lib/analytics/events';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  location: GuideContactLocation;
}

const AuthorInfo = ({
  className,
  location,
}: Props) => {
  return (
    <div className={cn('flex items-center gap-4', className)}>
      <div className="flex items-center gap-1">
        <Image
          alt="Roman Danilov"
          className="rounded-full"
          height={35}
          src="/images/about-guide/roman.png"
          width={35}
        />
        <div className="flex flex-col">
          <h3 className="text-base font-bold">Roman Danilov</h3>
          <p className="text-primary text-xs">Silicon Valley Private Circle</p>
        </div>
      </div>

      <Button
        asChild
        className="p-0"
        variant="link"
      >
        <OutboundContactLink
          channel="telegram"
          href="https://t.me/roman_danilov"
          location={location}
          target="_blank"
        >
          <Image
            alt="telegram"
            height={35}
            src="/icons/telegram.svg"
            width={35}
          />
        </OutboundContactLink>
      </Button>
    </div>
  );
};

export { AuthorInfo };
