'use client';

import { Check } from 'lucide-react';
import {
  motion,
  useReducedMotion,
} from 'motion/react';

import { STATUS_TRANSITION } from '../../constants';
import { ConfirmationConfetti } from '../confetti';
import { GuideContactCard } from '../guide-contact-card';

const ConfirmationSuccess = () => {
  const shouldReduceMotion = useReducedMotion();
  const transition = shouldReduceMotion ? { duration: 0 } : STATUS_TRANSITION;

  return (
    <motion.div
      animate={{ opacity: 1 }}
      className="relative flex min-h-0 w-full flex-1 flex-col items-center justify-center gap-4 overflow-hidden"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      style={{ willChange: 'opacity' }}
      transition={transition}
    >
      {shouldReduceMotion
        ? null
        : <ConfirmationConfetti />}
      <motion.span
        animate={{
          opacity: 1,
          scale: 1,
        }}
        className="relative z-20 flex size-20 items-center justify-center rounded-full bg-primary"
        initial={shouldReduceMotion
          ? false
          : {
            opacity: 0,
            scale: 0.85,
          }}
        transition={shouldReduceMotion ? { duration: 0 } : {
          bounce: 0.28,
          duration: 0.5,
          type: 'spring',
        }}
      >
        <Check
          className="size-10 text-white"
          strokeWidth={3}
        />
      </motion.span>
      <div className="relative z-1 flex w-max max-w-full flex-col gap-4">
        <div className="flex flex-col gap-2 text-center">
          <p className="whitespace-nowrap text-xl font-semibold tracking-tight text-white">
            You’re booked
          </p>
          <p className="text-sm tracking-tight text-light-gray">
            We’ll be in touch soon
          </p>
        </div>
        <div className="w-0 min-w-full">
          <GuideContactCard />
        </div>
      </div>
    </motion.div>
  );
};

export { ConfirmationSuccess };
