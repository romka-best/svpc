import type {
  ComponentPropsWithoutRef,
  HTMLAttributes,
} from 'react';

import type * as DialogPrimitive from '@radix-ui/react-dialog';
import type { VariantProps } from 'class-variance-authority';

import type {
  dialogContentVariants,
  dialogDescriptionVariants,
  dialogFooterVariants,
  dialogHeaderVariants,
  dialogTitleVariants,
} from './variants';

export type DialogSize = 'sm' | 'md' | 'lg' | 'xl';

export interface DialogContextValue {
  size: DialogSize;
}

export interface DialogHeaderProps
  extends HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof dialogHeaderVariants> {}

export interface DialogTitleProps
  extends ComponentPropsWithoutRef<typeof DialogPrimitive.Title>,
  VariantProps<typeof dialogTitleVariants> {}

export interface DialogDescriptionProps
  extends ComponentPropsWithoutRef<typeof DialogPrimitive.Description>,
  VariantProps<typeof dialogDescriptionVariants> {}

export interface DialogContentProps
  extends ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
  VariantProps<typeof dialogContentVariants> {
  showCloseButton?: boolean;
}

export interface DialogFooterProps
  extends HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof dialogFooterVariants> {}
