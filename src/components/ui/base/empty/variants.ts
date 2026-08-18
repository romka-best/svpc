import { cva } from 'class-variance-authority';

export const emptyVariants = cva(
  'flex min-w-0 flex-1 flex-col items-center justify-center text-balance rounded-xl text-center text-white',
  {
    variants: {
      variant: {
        primary: 'border border-solid border-gray bg-dark-gray',
        secondary: 'border border-solid border-gray bg-background',
        filled: 'border border-solid border-primary/20 bg-primary/5',
        dashed: 'border border-dashed border-gray bg-transparent',
        ghost: 'bg-transparent',
      },
      size: {
        sm: 'gap-4 p-4',
        md: 'gap-6 p-6',
        lg: 'gap-8 p-8',
      },
    },
    defaultVariants: {
      variant: 'ghost',
      size: 'md',
    },
  },
);

export const emptyMediaVariants = cva(
  'flex shrink-0 items-center justify-center rounded-lg [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-transparent text-inherit',
        icon: 'bg-primary/10 text-primary',
      },
      size: {
        sm: 'size-8 [&_svg:not([class*=\'size-\'])]:size-4',
        md: 'size-10 [&_svg:not([class*=\'size-\'])]:size-6',
        lg: 'size-12 [&_svg:not([class*=\'size-\'])]:size-8',
      },
    },
    defaultVariants: {
      variant: 'icon',
      size: 'md',
    },
  },
);

export const emptyTitleVariants = cva('font-medium tracking-tight text-white', {
  variants: {
    size: {
      sm: 'text-base',
      md: 'text-lg',
      lg: 'text-xl',
    },
  },
  defaultVariants: { size: 'md' },
});

export const emptyDescriptionVariants = cva('text-light-gray', {
  variants: {
    size: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    },
  },
  defaultVariants: { size: 'md' },
});

export const emptyContentVariants = cva(
  'flex w-full min-w-0 max-w-sm flex-col items-center text-balance',
  {
    variants: {
      size: {
        sm: 'gap-3 text-xs',
        md: 'gap-4 text-sm',
        lg: 'gap-5 text-base',
      },
    },
    defaultVariants: { size: 'md' },
  },
);
