import * as React from 'react';

import type { VariantProps } from 'class-variance-authority';

import { badgeVariants } from './variants';

export interface BadgeProps
  extends React.ComponentProps<'span'>,
  VariantProps<typeof badgeVariants> {
  asChild?: boolean;
}
