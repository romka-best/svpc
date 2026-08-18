import type {
  ComponentPropsWithoutRef,
  HTMLAttributes,
  ReactNode,
} from 'react';

import type * as SliderPrimitive from '@radix-ui/react-slider';
import type { VariantProps } from 'class-variance-authority';

import type { sliderVariants } from './variants';

export type SliderSize = 'sm' | 'md' | 'lg';
export type SliderVariant = 'primary' | 'secondary' | 'filled';
export type SliderStatus =
  | 'default'
  | 'loading'
  | 'warning'
  | 'error'
  | 'success';

export type SliderValuePosition = 'top' | 'bottom';

export interface SliderProps
  extends ComponentPropsWithoutRef<typeof SliderPrimitive.Root>,
  VariantProps<typeof sliderVariants> {
  children?: ReactNode;
  size?: SliderSize;
  status?: SliderStatus;
  variant?: SliderVariant;
}

export interface SliderLabelProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

export interface SliderValueProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
  position?: SliderValuePosition;
}

export interface SliderContextValue {
  currentValue: number[];
  max: number;
  min: number;
  size: SliderSize;
}
