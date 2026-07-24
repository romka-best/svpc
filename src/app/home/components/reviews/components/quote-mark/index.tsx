'use client';

import * as motion from 'motion/react-client';

import { QuoteIcon } from '@/components/icons/quote';
import { cn } from '@/lib/utils';

import type { QuoteMarkProps } from './types';

const QuoteMark = ({
  side,
  className,
}: QuoteMarkProps) => {
  const isOpen = side === 'open';

  return (
    <motion.div
      aria-hidden
      className={cn(
        'hidden shrink-0 text-[#2D2D3E] sm:block',
        isOpen
          ? 'mt-1 self-start rotate-180'
          : 'self-end',
        className,
      )}
      initial={{
        opacity: 0,
        scale: 0.72,
        x: isOpen
          ? -18
          : 18,
        y: isOpen
          ? -14
          : 14,
      }}
      style={{ willChange: 'transform, opacity' }}
      transition={{
        delay: isOpen
          ? 0.2
          : 0.45,
        duration: 0.7,
        ease: [
          0.22,
          1,
          0.36,
          1,
        ],
      }}
      viewport={{
        amount: 0.4,
        once: true,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
      }}
    >
      <QuoteIcon className="h-10.75 w-11.75 select-none" />
    </motion.div>
  );
};

export { QuoteMark };
