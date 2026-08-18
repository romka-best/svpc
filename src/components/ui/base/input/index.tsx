'use client';

import type { Ref } from 'react';

import { cn } from '@/lib/utils';

import type { InputProps } from './types';
import { inputVariants } from './variants';

const Input = ({
  className,
  type,
  variant,
  size,
  status,
  ref,
  ...props
}: InputProps & {
  ref?: Ref<HTMLInputElement>;
}) => {
  return (
    <input
      ref={ref}
      className={cn(inputVariants({
        variant,
        size,
        status,
      }), className)}
      data-slot="input"
      type={type}
      {...props}
    />
  );
};

export { Input };
