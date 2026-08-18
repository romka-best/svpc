'use client';

import type { Ref } from 'react';

import { cn } from '@/lib/utils';

import { useSliderContext } from '../hooks/use-slider-context';
import type { SliderLabelProps } from '../types';

const SliderLabel = ({
  className,
  children,
  ref,
  ...props
}: SliderLabelProps & {
  ref?: Ref<HTMLSpanElement>;
}) => {
  const { size } = useSliderContext();

  return (
    <span
      ref={ref}
      className={cn(
        'text-light-gray',
        size === 'sm' && 'text-xs',
        size === 'md' && 'text-sm',
        size === 'lg' && 'text-base',
        className,
      )}
      data-slot="slider-label"
      {...props}
    >
      {children}
    </span>
  );
};

export { SliderLabel };
