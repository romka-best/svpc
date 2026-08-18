'use client';

import Image from 'next/image';
import Link from 'next/link';

import { ChevronRight } from 'lucide-react';

import { cn } from '@/lib/utils';

import { GUIDE_TELEGRAM_HREF } from '../../constants';

const GuideContactCard = () => {
  return (
    <Link
      aria-label="Open Telegram chat with Roman Danilov"
      className={cn(
        'flex min-h-14 w-full cursor-pointer touch-manipulation items-center gap-3 rounded-[30px] bg-dark-gray p-2 pr-4',
        'transition-colors duration-250',
        'hover:bg-[#2e2e33]',
      )}
      href={GUIDE_TELEGRAM_HREF}
      rel="noreferrer"
      target="_blank"
    >
      <Image
        alt=""
        className="size-10 shrink-0 rounded-full object-cover"
        height={40}
        src="/images/about-guide/roman.png"
        width={40}
      />
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="text-sm font-medium tracking-tight text-white">
          Roman Danilov
        </span>
        <span className="text-xs tracking-tight text-primary">
          Silicon Valley Boy
        </span>
      </span>
      <Image
        alt=""
        className="size-8 shrink-0"
        height={32}
        src="/icons/telegram.svg"
        width={32}
      />
      <ChevronRight className="size-5 shrink-0 text-white" />
    </Link>
  );
};

export { GuideContactCard };
