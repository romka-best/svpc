'use client';

import type { CSSProperties } from 'react';
import Image from 'next/image';

import { motion } from 'motion/react';

import { cn } from '@/lib/utils';

interface Props {
  label: string;
  imageUrl?: string;
  position: CSSProperties;
  isHighlighted: boolean;
  drift: number;
  index: number;
}

const TourForYouSpotsPlanet = ({
  label,
  imageUrl,
  position,
  isHighlighted,
  drift,
  index,
}: Props) => {
  /*
   * Every planet gets its own orbit: x and y oscillate with different,
   * non-matching durations, so the path traces a slowly evolving ellipse
   * instead of a synchronized up/down bounce. Durations and delays are
   * derived from the index, so the layout is deterministic.
   */
  const delay = (index % 7) * 0.7;
  const driftX = index % 2 === 0 ? drift : -drift;
  const enterDelay = index * 0.08;

  return (
    <motion.div
      animate={{
        opacity: 1,
        scale: 1,
        x: [
          0,
          driftX,
          0,
          -driftX,
          0,
        ],
        y: [
          0,
          -drift,
          0,
        ],
      }}
      className="absolute size-15 md:size-25 xl:size-37.5"
      initial={{
        opacity: 0,
        scale: 0.4,
      }}
      style={{
        ...position,
        willChange: 'transform, opacity',
        zIndex: isHighlighted ? 1 : 0,
      }}
      transition={{
        opacity: {
          delay: enterDelay,
          duration: 0.7,
          ease: 'easeOut',
        },
        scale: {
          delay: enterDelay,
          duration: 0.7,
          ease: 'easeOut',
        },
        x: {
          delay,
          duration: 9 + (index % 5) * 1.7,
          ease: 'easeInOut',
          repeat: Infinity,
        },
        y: {
          delay,
          duration: 5 + (index % 4) * 1.3,
          ease: 'easeInOut',
          repeat: Infinity,
        },
      }}
    >
      <div
        className={cn(
          'relative size-full overflow-hidden rounded-full transition-transform duration-300 ease-out',
          isHighlighted && 'scale-150 xl:scale-[1.6]',
        )}
        style={{ willChange: 'transform' }}
      >
        {/* Scaled up so the rotating square never exposes the circle's corners */}
        <motion.div
          animate={{ rotate: index % 2 === 0 ? 360 : -360 }}
          className="size-full scale-150"
          style={{ willChange: 'transform' }}
          transition={{
            duration: 50 + (index % 6) * 12,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          <Image
            alt={label}
            className="size-full object-cover"
            height={240}
            loading="eager"
            src={imageUrl || `https://api.dicebear.com/9.x/glass/png?seed=${encodeURIComponent(label)}`}
            width={240}
          />
        </motion.div>
        <div className="absolute inset-0 rounded-full bg-linear-220 from-background/5 from-15% to-background/80 to-80%" />
      </div>
    </motion.div>
  );
};

export { TourForYouSpotsPlanet };
