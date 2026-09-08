import Link from 'next/link';

import { LinkHref } from '@/constants/links';
import { cn } from '@/lib/utils';

import type { LogoProps } from './types';

const Logo = ({ className }: LogoProps) => {
  return (
    <Link
      className={cn(
        'flex flex-nowrap items-center gap-1 whitespace-nowrap pointer-events-auto',
        className,
      )}
      href={LinkHref.Home}
    >
      <span className="text-xs font-bold">
        Silicon Valley
      </span>
      <span className="rounded-full bg-primary px-2 py-1 text-xs font-bold">
        <span className="sm:hidden">
          PC
        </span>
        <span className="hidden sm:inline">
          Private Circle
        </span>
      </span>
    </Link>
  );
};

export { Logo };
