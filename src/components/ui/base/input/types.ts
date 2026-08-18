import type { ComponentProps } from 'react';

import type { VariantProps } from 'class-variance-authority';

import type { inputVariants } from './variants';

export interface InputProps
  extends Omit<ComponentProps<'input'>, 'size'>,
  VariantProps<typeof inputVariants> {}
