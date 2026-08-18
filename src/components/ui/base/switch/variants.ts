import { cva } from 'class-variance-authority';

export const switchVariants = cva(
  'peer inline-flex shrink-0 cursor-pointer items-center justify-start rounded-full border border-solid px-1 transition-colors focus-visible:outline-none focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-primary/40 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      size: {
        sm: 'h-5 w-10',
        md: 'h-6 w-11',
        lg: 'h-7 w-14',
      },
      variant: {
        primary:
          'border-light-gray/60 data-[state=checked]:border-transparent data-[state=checked]:bg-primary data-[state=unchecked]:bg-dark-gray',
        secondary:
          'border-gray data-[state=checked]:border-transparent data-[state=checked]:bg-white data-[state=unchecked]:bg-dark-gray',
        filled:
          'border-primary/30 data-[state=checked]:border-transparent data-[state=checked]:bg-primary data-[state=unchecked]:bg-primary/10',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'primary',
    },
  },
);

export const switchThumbVariants = cva(
  'pointer-events-none relative flex items-center justify-center rounded-full bg-white ring-0',
  {
    variants: {
      size: {
        sm: 'size-3',
        md: 'size-4',
        lg: 'size-5',
      },
    },
    defaultVariants: { size: 'md' },
  },
);
