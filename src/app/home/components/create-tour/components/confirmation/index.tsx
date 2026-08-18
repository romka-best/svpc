'use client';

import { useEffect } from 'react';

import { AnimatePresence } from 'motion/react';

import { useCreateTour } from '../../context';

import { ConfirmationLoading } from './components/loading';
import { ConfirmationSuccess } from './components/success';
import { SUBMISSION_DELAY_MS } from './constants';

const Confirmation = () => {
  const {
    completeSubmission,
    submissionStatus,
  } = useCreateTour();

  useEffect(() => {
    if (submissionStatus !== 'loading') {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      completeSubmission();
    }, SUBMISSION_DELAY_MS);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [
    completeSubmission,
    submissionStatus,
  ]);

  const isLoading = submissionStatus === 'loading';

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
            <ConfirmationLoading key="loading" />
          )
          : (
            <ConfirmationSuccess key="success" />
          )}
      </AnimatePresence>
    </div>
  );
};

export { Confirmation };
