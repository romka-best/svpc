import { cva } from 'class-variance-authority';

export const radioVariants = cva(
  'flex aspect-square cursor-pointer items-center justify-center rounded-full border border-solid outline-none shadow-none focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-primary/40 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'border-primary bg-transparent text-primary enabled:hover:border-primary/70 data-[state=checked]:border-primary',
        secondary:
          'border-light-gray bg-transparent text-light-gray enabled:hover:border-white data-[state=checked]:border-white data-[state=checked]:text-white',
        filled:
          'border-primary/40 bg-primary/5 text-primary enabled:hover:border-primary/70 data-[state=checked]:border-primary',
      },
      size: {
        sm: 'size-3',
        md: 'size-4',
        lg: 'size-5',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export const radioIndicatorVariants = cva(
  'rounded-full border-none bg-current',
  {
    variants: {
      size: {
        sm: 'size-1.5',
        md: 'size-2',
        lg: 'size-2.5',
      },
    },
    defaultVariants: { size: 'md' },
  },
);
