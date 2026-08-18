import type { ComponentPropsWithoutRef } from 'react';

import type * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import type { VariantProps } from 'class-variance-authority';

import type { radioVariants } from './variants';

export type RadioType = 'default' | 'segmented';
export type RadioSize = 'sm' | 'md' | 'lg';
export type RadioVariant = 'primary' | 'secondary' | 'filled';

export interface RadioProps
  extends Omit<
    ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>,
    'type'
  >,
  Omit<VariantProps<typeof radioVariants>, 'type'> {
  type?: RadioType;
  variant?: RadioVariant;
}
