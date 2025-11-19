import * as React from 'react';

import { Slot } from '@radix-ui/react-slot';
import {
  cva,
  type VariantProps,
} from 'class-variance-authority';
import type { MotionProps } from 'motion/react';
import * as motion from 'motion/react-client';

import { cn } from '@/lib/utils';

const motionButtonAnimation: MotionProps = {
  animate: {
    opacity: 1,
    scale: 1,
    filter: 'brightness(1)',
  },
  initial: {
    opacity: 0.9,
    scale: 0.98,
    filter: 'brightness(0.95)',
  },
  transition: {
    type: 'spring',
    stiffness: 300,
    damping: 20,
  },
  whileHover: {
    scale: 1.02,
    filter: 'brightness(1.1)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 25,
    },
  },
  whileTap: {
    scale: 0.98,
    filter: 'brightness(0.9)',
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 30,
    },
  },
} as const;

const buttonVariants = cva(
  'flex items-center justify-center whitespace-nowrap rounded-lg disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*=\'size-\'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:border-destructive hover:cursor-pointer',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white hover:bg-[#7A0505] active:bg-[#5F0404]',
        secondary: 'bg-black text-white hover:bg-white hover:text-black active:bg-[#D9D9D9] active:text-black',
        outline:
					'border-1 border-primary bg-transparent text-primary hover:border-[#7A0505] hover:text-[#7A0505] active:border-[#5F0404] active:text-[#5F0404]',
        destructive:
					'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        l: 'px-5 py-3 gap-2 text-base',
        m: 'p-2 gap-2 text-base',
        s: 'p-2 gap-1 text-sm',
        xs: 'px-2 py-0.5 gap-1 text-xs',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'm',
    },
  },
);

interface Props extends Omit<React.ComponentProps<'button'>, 'onAnimationStart' | 'onDrag' | 'onDragStart' | 'onDragEnd'>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = ({
  className, 
  variant, 
  size, 
  asChild = false, 
  ...props 
}: Props) => {
  const buttonClassName = cn(
    buttonVariants({
      variant,
      size,
      className,
    }),
  );

  if (asChild) {
    return (
      <motion.span
        {...motionButtonAnimation}
        className="will-change-transform will-change-filter"
      >
        <Slot
          className={buttonClassName}
          data-slot="button"
          {...props}
        />
      </motion.span>
    );
  }

  return (
    <motion.button
      {...motionButtonAnimation}
      className={cn(buttonClassName, 'will-change-transform will-change-filter')}
      data-slot="button"
      {...props}
    />
  );
};

export {
  Button,
  buttonVariants,
};
