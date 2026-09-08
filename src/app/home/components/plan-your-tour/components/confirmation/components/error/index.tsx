'use client';

import {
  motion,
  useReducedMotion,
} from 'motion/react';

import { Button } from '@/components/ui/base/button';

import { usePlanYourTour } from '../../../../context';
import { STATUS_TRANSITION } from '../../constants';

const ConfirmationError = () => {
  const {
    resetSubmission,
    submissionError,
    submitTour,
  } = usePlanYourTour();
  const shouldReduceMotion = useReducedMotion();
  const transition = shouldReduceMotion ? { duration: 0 } : STATUS_TRANSITION;

  return (
    <motion.div
      animate={{ opacity: 1 }}
      className="flex min-h-0 flex-1 flex-col items-center justify-center gap-6"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      style={{ willChange: 'opacity' }}
      transition={transition}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <p className="text-xl font-semibold tracking-tight text-white">
          Payment did not complete
        </p>
        <p className="text-sm tracking-tight text-light-gray">
          {submissionError ?? 'We could not start payment. Please try again.'}
        </p>
      </div>
      <div className="flex w-full max-w-80 flex-col gap-3 sm:flex-row sm:justify-center">
        <Button
          className="h-12.5 px-5 py-2.5 text-base tracking-tight"
          size="l"
          type="button"
          variant="outline"
          onClick={resetSubmission}
        >
          Back
        </Button>
        <Button
          className="h-12.5 px-5 py-2.5 text-base tracking-tight text-white-gray"
          size="l"
          type="button"
          onClick={submitTour}
        >
          Try again
        </Button>
      </div>
    </motion.div>
  );
};

export { ConfirmationError };
