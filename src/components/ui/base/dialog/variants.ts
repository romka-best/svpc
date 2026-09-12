import { cva } from 'class-variance-authority';

export const dialogOverlayVariants = cva('fixed inset-0 z-[80] bg-background/50 backdrop-blur-[1.3px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 duration-250');

export const dialogContentVariants = cva(
  'bg-dark-gray relative z-[80] grid w-full border border-gray outline-none duration-250 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
  {
    variants: {
      size: {
        sm: 'max-w-md gap-3 rounded-2xl p-4',
        md: 'max-w-lg gap-4 rounded-2xl p-6',
        lg: 'max-w-3xl gap-5 rounded-3xl p-6 md:p-8',
        xl: 'max-w-[1130px] gap-6 rounded-3xl p-5 md:p-8 lg:p-10',
      },
    },
    defaultVariants: { size: 'md' },
  },
);

export const dialogHeaderVariants = cva('flex flex-col text-left', {
  variants: {
    size: {
      sm: 'gap-1',
      md: 'gap-1.5',
      lg: 'gap-2',
      xl: 'gap-2',
    },
  },
  defaultVariants: { size: 'md' },
});

export const dialogTitleVariants = cva(
  'm-0 font-semibold leading-none tracking-tight text-white',
  {
    variants: {
      size: {
        sm: 'text-base',
        md: 'text-lg',
        lg: 'text-xl',
        xl: 'text-2xl md:text-4xl',
      },
    },
    defaultVariants: { size: 'md' },
  },
);

export const dialogDescriptionVariants = cva('text-light-gray', {
  variants: {
    size: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
      xl: 'text-base',
    },
  },
  defaultVariants: { size: 'md' },
});

export const dialogFooterVariants = cva('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', {
  variants: {
    size: {
      sm: 'gap-1.5',
      md: 'gap-2',
      lg: 'gap-3',
      xl: 'gap-3',
    },
  },
  defaultVariants: { size: 'md' },
});
