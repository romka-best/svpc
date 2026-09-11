'use client';

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'motion/react';

import { Badge } from '@/components/ui/base/badge';

import { usePlanYourTour } from '../../../context';

import { CasinoPrice } from './casino-price';

const PRICE_TRANSITION = {
  duration: 0.22,
  ease: [
    0.215,
    0.61,
    0.355,
    1,
  ],
} as const;

const PlanYourTourPrice = () => {
  const { price } = usePlanYourTour();
  const shouldReduceMotion = useReducedMotion();
  const hasPrice = price > 0;
  const transition = shouldReduceMotion
    ? { duration: 0 }
    : PRICE_TRANSITION;

  return (
    <AnimatePresence
      initial={false}
      mode="wait"
    >
      {hasPrice
        ? (
          <motion.div
            key="price"
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="flex w-full items-center gap-4 lg:flex-col lg:items-start"
            exit={shouldReduceMotion
              ? { opacity: 0 }
              : {
                opacity: 0,
                y: -8,
              }}
            initial={shouldReduceMotion
              ? false
              : {
                opacity: 0,
                y: 8,
              }}
            style={{ willChange: 'transform, opacity' }}
            transition={transition}
          >
            <Badge
              className="h-8 border-gray px-3.25 py-1 text-sm font-normal tracking-tight text-gray lg:order-1 lg:border-light-gray lg:text-light-gray"
              size="sm"
              variant="outline"
            >
              Tour Price
            </Badge>
            <CasinoPrice
              className="ml-auto text-[32px] text-background lg:ml-0 lg:text-5xl lg:text-white xl:text-[96px] xl:tracking-[-0.03em]"
              price={price}
            />
          </motion.div>
        )
        : (
          <motion.p
            key="empty"
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="ml-auto whitespace-nowrap text-right text-xl font-medium leading-none tracking-tight text-background lg:ml-0 lg:text-left lg:text-white xl:text-5xl xl:tracking-[-0.03em] 2xl:text-[64px]"
            exit={shouldReduceMotion
              ? { opacity: 0 }
              : {
                opacity: 0,
                y: -8,
              }}
            initial={shouldReduceMotion
              ? false
              : {
                opacity: 0,
                y: 8,
              }}
            style={{ willChange: 'transform, opacity' }}
            transition={transition}
          >
            Takes a few minutes
          </motion.p>
        )}
    </AnimatePresence>
  );
};

export { PlanYourTourPrice };
