import * as React from 'react';

import type { VariantProps } from 'class-variance-authority';

import { buttonVariants } from './variants';

export interface ButtonProps
  extends Omit<
    React.ComponentProps<'button'>,
    'onAnimationStart' | 'onDrag' | 'onDragStart' | 'onDragEnd'
  >,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;

  // Loading Props
  isLoading?: boolean;
  loadingText?: string;
  loadingIcon?: React.ReactNode;
}
