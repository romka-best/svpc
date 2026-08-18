import { cva } from 'class-variance-authority';

export const sliderVariants = cva(
  'relative flex w-full touch-none items-center select-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50',
  {
    variants: {
      size: {
        sm: '',
        md: '',
        lg: '',
      },
      variant: {
        primary: '',
        secondary: '',
        filled: '',
      },
      status: {
        default: '',
        loading: 'cursor-progress',
        warning: '',
        error: '',
        success: '',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'primary',
      status: 'default',
    },
  },
);

export const sliderTrackVariants = cva(
  'relative w-full grow overflow-hidden rounded-full',
  {
    variants: {
      size: {
        sm: 'h-px',
        md: 'h-px',
        lg: 'h-0.5',
      },
      variant: {
        primary: 'bg-light-gray/40',
        secondary: 'bg-dark-gray',
        filled: 'bg-primary/30',
      },
      status: {
        default: '',
        loading: '',
        warning: '',
        error: '',
        success: '',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'primary',
      status: 'default',
    },
  },
);

export const sliderRangeVariants = cva(
  'absolute h-full transition-all duration-250 ease-out',
  {
    variants: {
      variant: {
        primary: 'bg-primary',
        secondary: 'bg-white',
        filled: 'bg-primary',
      },
      status: {
        default: '',
        loading: 'animate-pulse',
        warning: 'bg-primary',
        error: 'bg-destructive',
        success: 'bg-primary',
      },
    },
    defaultVariants: {
      variant: 'primary',
      status: 'default',
    },
  },
);

export const sliderThumbVariants = cva(
  'block cursor-grab rounded-full border border-solid bg-background transition-transform duration-250 ease-out hover:scale-105 focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-primary/40 focus-visible:outline-none active:scale-95 active:cursor-grabbing data-[disabled]:pointer-events-none data-[disabled]:cursor-not-allowed data-[disabled]:hover:scale-100',
  {
    variants: {
      size: {
        sm: 'size-2',
        md: 'size-2.5',
        lg: 'size-3.5',
      },
      variant: {
        primary: 'border-primary bg-primary',
        secondary: 'border-white bg-white',
        filled: 'border-primary bg-primary',
      },
      status: {
        default: '',
        loading: 'animate-pulse cursor-progress',
        warning: '',
        error: 'border-destructive bg-destructive',
        success: '',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'primary',
      status: 'default',
    },
  },
);
