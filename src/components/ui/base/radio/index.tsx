'use client';

import type {
  ComponentRef,
  Ref,
} from 'react';

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import {
  AnimatePresence,
  motion,
} from 'motion/react';

import { Button } from '@/components/ui/base/button';
import { useRadioGroupContext } from '@/components/ui/base/radio-group';
import { cn } from '@/lib/utils';

import type { RadioProps } from './types';
import {
  radioIndicatorVariants,
  radioVariants,
} from './variants';

const Radio = ({
  className,
  size,
  type,
  variant,
  children,
  value,
  ref,
  ...props
}: RadioProps & {
  ref?: Ref<ComponentRef<typeof RadioGroupPrimitive.Item>>;
}) => {
  const context = useRadioGroupContext();
  const effectiveType = type ?? context?.type ?? 'default';
  const effectiveSize = size ?? context?.size ?? 'md';
  const effectiveVariant = variant ?? context?.variant ?? 'primary';
  const isChecked = context?.value === value;

  if (effectiveType === 'segmented') {
    return (
      <Button
        asChild
        className={cn(
          'focus-visible:ring-0',
          !isChecked && 'text-light-gray hover:text-white',
          className,
        )}
        size={effectiveSize === 'lg' ? 'l' : effectiveSize === 'sm' ? 's' : 'm'}
        variant={isChecked ? 'default' : 'ghost'}
      >
        <RadioGroupPrimitive.Item
          ref={ref}
          value={value}
          {...props}
        >
          {children}
        </RadioGroupPrimitive.Item>
      </Button>
    );
  }

  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(radioVariants({
        variant: effectiveVariant,
        size: effectiveSize,
        className,
      }))}
      data-slot="radio"
      value={value}
      {...props}
    >
      <AnimatePresence>
        {isChecked
          ? (
            <RadioGroupPrimitive.Indicator
              asChild
              forceMount
              className="relative flex items-center justify-center"
            >
              <motion.div
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                className={cn(radioIndicatorVariants({ size: effectiveSize }))}
                exit={{
                  opacity: 0,
                  scale: 0,
                }}
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                style={{ willChange: 'transform, opacity' }}
                transition={{
                  damping: 25,
                  stiffness: 400,
                  type: 'spring',
                }}
              />
            </RadioGroupPrimitive.Indicator>
          )
          : null}
      </AnimatePresence>
    </RadioGroupPrimitive.Item>
  );
};

export { Radio };
