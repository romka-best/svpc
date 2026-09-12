import type { ComponentPropsWithoutRef } from 'react';

import type * as SwitchPrimitives from '@radix-ui/react-switch';
import type { VariantProps } from 'class-variance-authority';

import type { switchVariants } from './variants';

export type SwitchSize = 'sm' | 'md' | 'lg';
export type SwitchVariant = 'primary' | 'secondary' | 'filled';

export type SwitchProps = ComponentPropsWithoutRef<
  typeof SwitchPrimitives.Root
> & VariantProps<typeof switchVariants> & {
  isLoading?: boolean;
};
