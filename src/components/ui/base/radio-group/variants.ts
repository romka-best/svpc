import { cva } from 'class-variance-authority';

export const radioGroupVariants = cva('', {
  variants: {
    type: {
      default: 'flex flex-col gap-2',
      segmented:
        'flex w-max items-center justify-center gap-2 rounded-lg p-2 text-muted-foreground',
    },
    variant: {
      primary: '',
      secondary: '',
      filled: '',
    },
    size: {
      sm: '',
      md: '',
      lg: '',
    },
  },
  compoundVariants: [
    {
      type: 'segmented',
      variant: 'primary',
      className: 'bg-dark-gray',
    },
    {
      type: 'segmented',
      variant: 'secondary',
      className: 'bg-muted',
    },
    {
      type: 'segmented',
      variant: 'filled',
      className: 'bg-primary/5',
    },
    {
      type: 'segmented',
      size: 'sm',
      className: 'h-8',
    },
    {
      type: 'segmented',
      size: 'md',
      className: 'h-9',
    },
    {
      type: 'segmented',
      size: 'lg',
      className: 'h-10',
    },
  ],
  defaultVariants: {
    type: 'default',
    size: 'md',
    variant: 'primary',
  },
});
