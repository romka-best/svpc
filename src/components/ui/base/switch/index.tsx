'use client';

import {
  useState,
  type ComponentRef,
  type Ref,
} from 'react';

import * as SwitchPrimitives from '@radix-ui/react-switch';
import { motion } from 'motion/react';

import { cn } from '@/lib/utils';

import type { SwitchProps } from './types';
import {
  switchThumbVariants,
  switchVariants,
} from './variants';

const thumbTravelDistance = {
  sm: 16,
  md: 20,
  lg: 28,
} as const;

const Switch = ({
  className,
  size = 'md',
  variant = 'primary',
  isLoading = false,
  disabled,
  checked,
  defaultChecked,
  onCheckedChange,
  ref,
  ...props
}: SwitchProps & {
  ref?: Ref<ComponentRef<typeof SwitchPrimitives.Root>>;
}) => {
  const travel = thumbTravelDistance[size ?? 'md'];
  const [
    internalChecked,
    setInternalChecked,
  ] = useState(defaultChecked ?? false);
  const isControlled = checked !== undefined;
  const isChecked = isControlled ? checked : internalChecked;

  return (
    <SwitchPrimitives.Root
      ref={ref}
      asChild
      checked={isControlled ? checked : undefined}
      className={cn(
        switchVariants({
          size,
          variant,
          className,
        }),
        isLoading && '!cursor-progress',
      )}
      defaultChecked={isControlled ? undefined : defaultChecked}
      disabled={disabled || isLoading}
      onCheckedChange={(value) => {
        if (!isControlled) {
          setInternalChecked(value);
        }

        onCheckedChange?.(value);
      }}
      {...props}
    >
      <motion.button
        data-slot="switch"
        initial={false}
        type="button"
      >
        <SwitchPrimitives.Thumb asChild>
          <motion.span
            animate={{ x: isChecked ? travel : 0 }}
            className={cn(switchThumbVariants({ size }))}
            initial={false}
            style={{ willChange: 'transform' }}
            transition={{
              damping: 25,
              stiffness: 500,
              type: 'spring',
            }}
          >
            {isLoading
              ? (
                <span
                  aria-label="Loading"
                  className={cn(
                    'absolute inset-0 m-auto animate-spin rounded-full border-[1.5px] border-current border-t-transparent',
                    size === 'sm' && 'size-2',
                    size === 'md' && 'size-2.5',
                    size === 'lg' && 'size-3.5',
                  )}
                  role="status"
                />
              )
              : null}
          </motion.span>
        </SwitchPrimitives.Thumb>
      </motion.button>
    </SwitchPrimitives.Root>
  );
};

export { Switch };
