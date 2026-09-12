'use client';

import { AnimatePresence } from 'motion/react';

import { usePlanYourTour } from '../../context';

import { ConfirmationError } from './components/error';
import { ConfirmationLoading } from './components/loading';
import { ConfirmationSuccess } from './components/success';

const Confirmation = () => {
  const { submissionStatus } = usePlanYourTour();
  const isConfirming = submissionStatus === 'confirming';
  const isLoading = submissionStatus === 'loading' || isConfirming;
  const isError = submissionStatus === 'error';

  return (
    <div
      aria-busy={isLoading}
      aria-live="polite"
      className="flex h-full min-h-80 w-full flex-1 flex-col"
      role="status"
    >
      <AnimatePresence mode="wait">
        {isLoading
          ? (
            <ConfirmationLoading
              key="loading"
              description={isConfirming
                ? 'This only takes a moment'
                : 'This only takes a few seconds'}
              title={isConfirming
                ? 'Confirming your payment'
                : 'Redirecting to checkout'}
            />
          )
          : isError
            ? <ConfirmationError key="error" />
            : <ConfirmationSuccess key="success" />}
      </AnimatePresence>
    </div>
  );
};

export { Confirmation };
