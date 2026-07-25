import Link from 'next/link';

import { cn } from '@/lib/utils';

import type { LogoProps } from './types';

const Logo = ({ className }: LogoProps) => {
  return (
    <Link
      className={cn(
        'flex flex-nowrap items-center gap-1 whitespace-nowrap pointer-events-auto',
        className,
      )}
      href="/"
    >
      <h1 className="text-xs font-bold">
        Silicon Valley
      </h1>
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
