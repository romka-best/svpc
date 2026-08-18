import type { ComponentProps } from 'react';

import type { VariantProps } from 'class-variance-authority';

import type {
  emptyContentVariants,
  emptyDescriptionVariants,
  emptyMediaVariants,
  emptyTitleVariants,
  emptyVariants,
} from './variants';

export type EmptySize = 'sm' | 'md' | 'lg';

export interface EmptyContextValue {
  size: EmptySize;
}

export interface EmptyProps
  extends ComponentProps<'div'>,
  VariantProps<typeof emptyVariants> {}

export interface EmptyHeaderProps extends ComponentProps<'div'> {
  size?: EmptySize;
}

export interface EmptyMediaProps
  extends ComponentProps<'div'>,
  VariantProps<typeof emptyMediaVariants> {}

export interface EmptyTitleProps
  extends ComponentProps<'div'>,
  VariantProps<typeof emptyTitleVariants> {}

export interface EmptyDescriptionProps
  extends ComponentProps<'div'>,
  VariantProps<typeof emptyDescriptionVariants> {}

export interface EmptyContentProps
  extends ComponentProps<'div'>,
  VariantProps<typeof emptyContentVariants> {}
