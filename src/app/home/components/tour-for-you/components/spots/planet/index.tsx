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
   *
   * Abstract Dicebear placeholders keep the slow spin (and extra scale so
   * the rotating square never shows the circle's corners). Real photos stay
   * upright and unzoomed so the landmark stays readable in the crop.
   */
  const hasPhoto = Boolean(imageUrl);
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
        <motion.div
          animate={hasPhoto ? undefined : { rotate: index % 2 === 0 ? 360 : -360 }}
          className={cn(
            'relative size-full',
            !hasPhoto && 'scale-150',
          )}
          style={{ willChange: hasPhoto ? undefined : 'transform' }}
          transition={hasPhoto ? undefined : {
            duration: 50 + (index % 6) * 12,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          <Image
            alt={label}
            className="size-full object-cover"
            height={941}
            loading="eager"
            sizes="(min-width: 1280px) 240px, (min-width: 768px) 160px, 96px"
            src={imageUrl || `https://api.dicebear.com/9.x/glass/png?seed=${encodeURIComponent(label)}`}
            unoptimized={hasPhoto}
            width={941}
          />
        </motion.div>
        <div
          className={cn(
            'absolute inset-0 rounded-full',
            hasPhoto
              ? 'bg-linear-to-b from-transparent to-black/20'
              : 'bg-linear-220 from-background/5 from-15% to-background/80 to-80%',
          )}
        />
      </div>
    </motion.div>
  );
};

export { TourForYouSpotsPlanet };
