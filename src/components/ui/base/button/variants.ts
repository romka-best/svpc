import { cva } from 'class-variance-authority';
import type { MotionProps } from 'motion/react';

export const motionButtonAnimation: MotionProps = {
  animate: {
    opacity: 1,
    scale: 1,
  },
  initial: {
    opacity: 0.9,
    scale: 0.98,
  },
  transition: {
    type: 'spring',
    stiffness: 300,
    damping: 20,
  },
  whileHover: {
    scale: 1.02,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 25,
    },
  },
  whileTap: {
    scale: 0.98,
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 30,
    },
  },
} as const;

export const buttonVariants = cva(
  'flex items-center justify-center whitespace-nowrap select-none cursor-pointer disabled:cursor-not-allowed disabled:!opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*=\'size-\'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:border-destructive',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white enabled:hover:bg-[#7A0505] enabled:active:bg-[#5F0404]',
        secondary: 'bg-black text-white enabled:hover:bg-white enabled:hover:text-black enabled:active:bg-[#D9D9D9] enabled:active:text-black',
        outline:
          'border-1 border-primary bg-transparent text-primary enabled:hover:border-[#7A0505] enabled:hover:text-[#7A0505] enabled:active:border-[#5F0404] enabled:active:text-[#5F0404]',
        destructive:
          'bg-destructive text-white shadow-xs enabled:hover:bg-destructive/90 focus-visible:ring-destructive/20',
        ghost:
          'border-none bg-transparent text-white transition-colors duration-250 ease-out enabled:hover:bg-white/5 enabled:hover:text-white',
        link: 'text-white-gray !p-0 enabled:hover:text-primary',
      },
      size: {
        l: 'px-5 py-3 gap-2 text-base',
        m: 'p-2 gap-2 text-base',
        s: 'p-2 gap-1 text-sm',
        xs: 'px-2 py-0.5 gap-1 text-xs',
      },
      shape: {
        default: 'rounded-lg',
        rounded: 'rounded-full',
      },
      priority: {
        default: '',
        destructive: '',
        neutral: '',
      },
      focusable: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      {
        variant: 'ghost',
        priority: 'destructive',
        className:
          'enabled:hover:bg-destructive/5 enabled:hover:text-destructive',
      },
      {
        variant: 'ghost',
        priority: 'neutral',
        className:
          'text-light-gray enabled:hover:bg-white/10 enabled:hover:text-white',
      },
      {
        variant: 'link',
        priority: 'destructive',
        className: 'enabled:hover:text-destructive',
      },
      {
        variant: 'link',
        priority: 'neutral',
        className: 'enabled:hover:text-light-gray',
      },
    ],
    defaultVariants: {
      variant: 'default',
      size: 'm',
      shape: 'default',
      priority: 'default',
    },
  },
);
