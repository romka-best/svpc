import type { MotionProps } from 'motion/react';

export const sidebarTriggerCloseIconAnimation: MotionProps = {
  animate: {
    opacity: 1,
    rotate: 0,
    scale: 1,
  },
  exit: {
    opacity: 0,
    rotate: 90,
    scale: 0.8,
  },
  initial: {
    opacity: 0,
    rotate: -90,
    scale: 0.8,
  },
  transition: {
    duration: 0.15,
    ease: 'easeOut',
  },
} as const;

export const sidebarTriggerOpenIconAnimation: MotionProps = {
  animate: {
    opacity: 1,
    rotate: 0,
    scale: 1,
  },
  exit: {
    opacity: 0,
    rotate: -90,
    scale: 0.8,
  },
  initial: {
    opacity: 0,
    rotate: 90,
    scale: 0.8,
  },
  transition: {
    duration: 0.15,
    ease: 'easeOut',
  },
} as const;
