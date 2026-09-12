'use client';

import {
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import { motion } from 'motion/react';

import { cn } from '@/lib/utils';

import {
  CONFETTI_EDGE_PADDING,
  CONFETTI_PARTICLES,
} from './constants';

const clamp = (value: number, min: number, max: number) => {
  return Math.min(max, Math.max(min, value));
};

const ConfirmationConfetti = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [
    size,
    setSize,
  ] = useState({
    height: 0,
    width: 0,
  });

  useLayoutEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const updateSize = () => {
      setSize({
        height: container.clientHeight,
        width: container.clientWidth,
      });
    };

    updateSize();

    const observer = new ResizeObserver(updateSize);
    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  const halfHeight = Math.max(size.height / 2 - CONFETTI_EDGE_PADDING, 0);
  const halfWidth = Math.max(size.width / 2 - CONFETTI_EDGE_PADDING, 0);
  const hasSize = halfHeight > 0 && halfWidth > 0;

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-10 overflow-hidden select-none"
    >
      {hasSize
        ? CONFETTI_PARTICLES.map((particle) => {
          const x = clamp(
            Math.cos(particle.angle) * halfWidth * particle.burst,
            -halfWidth,
            halfWidth,
          );
          const peakY = clamp(
            Math.sin(particle.angle) * halfHeight * particle.burst,
            -halfHeight,
            halfHeight,
          );
          const fallY = clamp(
            peakY + halfHeight * particle.fall,
            -halfHeight,
            halfHeight,
          );

          return (
            <motion.span
              key={particle.id}
              animate={{
                opacity: [
                  0,
                  1,
                  1,
                  0,
                ],
                rotate: particle.rotate,
                scale: [
                  0.35,
                  1.15,
                  1,
                  0.85,
                ],
                x,
                y: [
                  0,
                  peakY,
                  fallY,
                ],
              }}
              className="absolute top-1/2 left-1/2 size-0 origin-center will-change-transform"
              initial={{
                opacity: 0,
                rotate: 0,
                scale: 0.35,
                x: 0,
                y: 0,
              }}
              transition={{
                delay: particle.delay,
                duration: particle.duration,
                opacity: {
                  delay: particle.delay,
                  duration: particle.duration,
                  ease: 'easeOut',
                  times: [
                    0,
                    0.1,
                    0.62,
                    1,
                  ],
                },
                rotate: {
                  delay: particle.delay,
                  duration: particle.duration,
                  ease: [
                    0.16,
                    1,
                    0.3,
                    1,
                  ],
                },
                scale: {
                  delay: particle.delay,
                  duration: particle.duration,
                  ease: [
                    0.16,
                    1,
                    0.3,
                    1,
                  ],
                },
                x: {
                  delay: particle.delay,
                  duration: particle.duration,
                  ease: [
                    0.16,
                    1,
                    0.3,
                    1,
                  ],
                },
                y: {
                  delay: particle.delay,
                  duration: particle.duration,
                  ease: [
                    [
                      0.16,
                      1,
                      0.3,
                      1,
                    ],
                    [
                      0.55,
                      0.06,
                      0.88,
                      0.32,
                    ],
                  ],
                  times: [
                    0,
                    0.32,
                    1,
                  ],
                },
              }}
            >
              <span className={cn(
                'absolute top-0 left-0 block -translate-x-1/2 -translate-y-1/2 leading-none drop-shadow-sm',
                particle.sizeClassName,
              )}
              >
                {particle.icon}
              </span>
            </motion.span>
          );
        })
        : null}
    </div>
  );
};

export { ConfirmationConfetti };
