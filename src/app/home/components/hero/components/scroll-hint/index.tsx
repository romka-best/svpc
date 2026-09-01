'use client';

import { ChevronDown } from 'lucide-react';
import {
  motion,
  useScroll,
  useTransform,
} from 'motion/react';

import { AnchorLink } from '@/components/ui/base/anchor-link';
import { LinkAnchor } from '@/constants/links';

const HeroScrollHint = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [
    0,
    200,
  ], [
    1,
    0,
  ]);

  return (
    <motion.div
      className="absolute inset-x-0 bottom-4 flex justify-center"
      style={{
        opacity,
        willChange: 'opacity',
      }}
    >
      <motion.div
        animate={{
          opacity: 1,
          y: 0,
        }}
        initial={{
          opacity: 0,
          y: 12,
        }}
        style={{ willChange: 'transform, opacity' }}
        transition={{
          delay: 0.9,
          duration: 0.6,
          ease: 'easeOut',
        }}
      >
        <AnchorLink
          aria-label="Scroll to the next section"
          className="group flex cursor-pointer flex-col items-center gap-2.5 rounded-2xl p-2 text-white-gray/80 outline-none transition-colors duration-250 hover:text-white focus-visible:ring-[3px] focus-visible:ring-ring/50"
          href={LinkAnchor.TourForYou}
        >
          <span className="flex size-9 items-center justify-center rounded-full border border-white-gray/30 bg-background/40 transition-colors duration-250 group-hover:border-white-gray/55 motion-safe:animate-scroll-nudge motion-safe:will-change-transform">
            <ChevronDown className="size-4" />
          </span>
        </AnchorLink>
      </motion.div>
    </motion.div>
  );
};

export { HeroScrollHint };
