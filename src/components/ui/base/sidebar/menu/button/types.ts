import * as React from 'react';

import type { VariantProps } from 'class-variance-authority';

import { sidebarMenuButtonVariants } from './variants';

export interface SidebarMenuButtonProps
  extends React.ComponentProps<'button'>,
  VariantProps<typeof sidebarMenuButtonVariants> {
  asChild?: boolean;
  isActive?: boolean;
}
