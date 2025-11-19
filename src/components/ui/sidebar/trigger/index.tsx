'use client';

import {
  ComponentProps,
  MouseEvent,
  useMemo,
} from 'react';

import {
  Menu,
  X,
} from 'lucide-react';
import {
  AnimatePresence,
  motion,
} from 'motion/react';

import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-is-mobile';

import { useSidebar } from '../hooks/use-sidebar';

interface Props extends ComponentProps<typeof Button> {
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const SidebarTrigger = ({
  className,
  onClick,
  ...props
}: Props) => {
  const { isMobile } = useIsMobile();
  const {
    toggleSidebar,
    open,
  } = useSidebar();

  const size = useMemo(() => {
    return isMobile ? 's' : 'm';
  }, [
    isMobile,
  ]);

  return (
    <Button
      className={className}
      size={size}
      onClick={(event) => {
        toggleSidebar();
        onClick?.(event);
      }}
      {...props}
    >
      <AnimatePresence
        initial={false}
        mode="wait"
      >
        {open ? (
          <motion.span
            key="close"
            animate={{
              opacity: 1,
              rotate: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              rotate: 90,
              scale: 0.8,
            }}
            initial={{
              opacity: 0,
              rotate: -90,
              scale: 0.8,
            }}
            style={{
              display: 'inline-flex',
              willChange: 'transform, opacity',
            }}
            transition={{
              duration: 0.15,
              ease: 'easeOut',
            }}
          >
            <X className="sm:size-6 size-4" />
          </motion.span>
        ) : (
          <motion.span
            key="open"
            animate={{
              opacity: 1,
              rotate: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              rotate: -90,
              scale: 0.8,
            }}
            initial={{
              opacity: 0,
              rotate: 90,
              scale: 0.8,
            }}
            style={{
              display: 'inline-flex',
              willChange: 'transform, opacity',
            }}
            transition={{
              duration: 0.15,
              ease: 'easeOut',
            }}
          >
            <Menu className="sm:size-6 size-4" />
          </motion.span>
        )}
      </AnimatePresence>
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
};

export { SidebarTrigger };
