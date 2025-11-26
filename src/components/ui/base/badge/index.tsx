import * as React from 'react';

import { Slot } from '@radix-ui/react-slot';
import {
  cva,
  type VariantProps,
} from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-full text-sm font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-all duration-250 ease-out overflow-hidden select-none',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
        secondary:
          'border border-primary bg-primary/20 text-primary [a&]:hover:bg-primary/90',
        outline:
          'border text-muted-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground',
      },
      size: {
        sm: 'px-2 py-1',
        md: 'px-3 py-1.5',
      },
      clickable: {
        true: 'cursor-pointer',
        false: 'pointer-events-none',
      },
    },
    compoundVariants: [
      {
        variant: 'default',
        clickable: true,
        class: 'hover:opacity-80 hover:scale-102 active:scale-100',
      },
      {
        variant: 'secondary',
        clickable: true,
        class: 'hover:opacity-80 hover:scale-102 active:scale-100',
      },
      {
        variant: 'outline',
        clickable: true,
        class: 'hover:border-primary hover:text-primary hover:scale-102 active:scale-100',
      },
    ],
    defaultVariants: {
      variant: 'default',
      size: 'md',
      clickable: false,
    },
  },
);

function Badge({
  className,
  variant,
  size,
  clickable,
  asChild = false,
  onClick,
  ...props
}: React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp
      className={cn(badgeVariants({
        variant,
        size,
        clickable,
      }), className)}
      data-slot="badge"
      onClick={clickable ? onClick : undefined}
      {...props}
    />
  );
}

export {
  Badge,
  badgeVariants,
};

