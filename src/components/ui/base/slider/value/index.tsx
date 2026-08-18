'use client';

import type { Ref } from 'react';

import { cn } from '@/lib/utils';

import { useSliderContext } from '../hooks/use-slider-context';
import type { SliderValueProps } from '../types';

const SliderValue = ({
  className,
  children,
  position = 'top',
  ref,
  ...props
}: SliderValueProps & {
  ref?: Ref<HTMLSpanElement>;
}) => {
  const { currentValue } = useSliderContext();
  const displayValue = children ?? (
    currentValue.length === 0
      ? ''
      : currentValue.length === 1
        ? `${currentValue[0]}`
        : `${currentValue[0]} - ${currentValue[currentValue.length - 1]}`
  );

  // Bottom position is rendered by Slider on the thumb.
  if (position === 'bottom') {
    return null;
  }

  return (
    <span
      ref={ref}
      className={cn('text-light-gray', className)}
      data-slot="slider-value"
      {...props}
    >
      {displayValue}
    </span>
  );
};

export { SliderValue };
