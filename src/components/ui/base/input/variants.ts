import { cva } from 'class-variance-authority';

export const inputVariants = cva(
  'flex w-full bg-dark-gray text-white shadow-none outline-none transition-colors duration-250 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-light-gray focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        filled:
          'rounded-lg border border-transparent enabled:hover:border-primary/40 focus-visible:border-primary',
        outlined:
          'rounded-lg border border-gray enabled:hover:border-primary/50 focus-visible:border-primary',
        underlined:
          'rounded-none border-0 border-b border-gray bg-transparent enabled:hover:border-primary/50 focus-visible:border-primary',
        ghost:
          'rounded-lg border-none bg-transparent enabled:hover:bg-white/5 focus-visible:bg-white/5',
      },
      size: {
        sm: 'h-8 px-2 text-xs',
        md: 'h-10 px-3 text-sm',
        lg: 'h-12.5 px-4 text-base',
      },
      status: {
        default: '',
        error:
          'border-destructive enabled:hover:border-destructive focus-visible:border-destructive',
        success:
          'border-primary/60 enabled:hover:border-primary focus-visible:border-primary',
      },
    },
    defaultVariants: {
      variant: 'filled',
      size: 'lg',
      status: 'default',
    },
  },
);
