import type { ComponentPropsWithoutRef } from 'react';

import type * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import type { VariantProps } from 'class-variance-authority';

import type { radioGroupVariants } from './variants';

export type RadioGroupType = 'default' | 'segmented';
export type RadioGroupSize = 'sm' | 'md' | 'lg';
export type RadioGroupVariant = 'primary' | 'secondary' | 'filled';

export interface RadioGroupContextValue {
  size: RadioGroupSize;
  type: RadioGroupType;
  value?: string;
  variant: RadioGroupVariant;
}

export type RadioGroupProps = ComponentPropsWithoutRef<
  typeof RadioGroupPrimitive.Root
> &
VariantProps<typeof radioGroupVariants> & {
  variant?: RadioGroupVariant;
};
