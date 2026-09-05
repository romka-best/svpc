'use client';

import { Slot } from '@radix-ui/react-slot';
import { motion } from 'motion/react';

import { cn } from '@/lib/utils';

import type { ButtonProps } from './types';
import { stripEnabledPrefix } from './utils';
import {
  buttonVariants,
  motionButtonAnimation,
} from './variants';

const MotionSlot = motion.create(Slot);

const defaultLoadingIcon = (
  <svg
    aria-label="Loading"
    className="size-4 animate-spin"
    fill="none"
    role="status"
    viewBox="0 0 24 24"
  >
    <path
      d="M21 12a9 9 0 1 1-9-9"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
    />
  </svg>
);

const Button = ({
  className,
  variant,
  size,
  shape,
  priority,
  focusable,
  asChild = false,
  isLoading = false,
  loadingText,
  loadingIcon = defaultLoadingIcon,
  children,
  disabled,
  ...props
}: ButtonProps) => {
  const isButtonDisabled = disabled || isLoading;
  const animationProps = isButtonDisabled ? {} : motionButtonAnimation;

  const buttonClassName = cn(
    buttonVariants({
      variant,
      size,
      shape,
      priority,
      focusable,
      className,
    }),
    isLoading && '!cursor-progress',
  );

  if (asChild) {
    return (
      <MotionSlot
        className={stripEnabledPrefix(buttonClassName)}
        data-slot="button"
        {...animationProps}
        {...props}
        {...{ disabled: isButtonDisabled }}
      >
        {isLoading ? (
          <>
            {variant !== 'link' && loadingIcon}
            {loadingText || (variant === 'link' && children)}
          </>
        ) : (
          children
        )}
      </MotionSlot>
    );
  }

  return (
    <motion.button
      className={cn(buttonClassName, 'will-change-transform')}
      data-slot="button"
      {...animationProps}
      {...props}
      disabled={isButtonDisabled}
    >
      {isLoading ? (
        <>
          {variant !== 'link' && loadingIcon}
          {loadingText || (variant === 'link' && children)}
        </>
      ) : (
        children
      )}
    </motion.button>
  );
};

export { Button };
