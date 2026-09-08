'use client';

import {
  motion,
  useReducedMotion,
} from 'motion/react';

import { STATUS_TRANSITION } from '../../constants';
import { ConfirmationSpinner } from '../spinner';

interface ConfirmationLoadingProps {
  description: string;
  title: string;
}

const ConfirmationLoading = ({
  description,
  title,
}: ConfirmationLoadingProps) => {
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
          {title}
        </p>
        <p className="text-sm tracking-tight text-light-gray">
          {description}
        </p>
      </div>
      <ConfirmationSpinner />
    </motion.div>
  );
};

export { ConfirmationLoading };
