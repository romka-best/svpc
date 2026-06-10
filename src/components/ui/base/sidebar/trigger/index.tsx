'use client';

import { useMemo } from 'react';

import {
  Menu,
  X,
} from 'lucide-react';
import {
  AnimatePresence,
  motion,
} from 'motion/react';

import { Button } from '@/components/ui/base/button';
import { useIsMobile } from '@/hooks/use-is-mobile';

import { useSidebar } from '../hooks/use-sidebar';

import type { SidebarTriggerProps } from './types';
import {
  sidebarTriggerCloseIconAnimation,
  sidebarTriggerOpenIconAnimation,
} from './variants';

const SidebarTrigger = ({
  className,
  onClick,
  ...props
}: SidebarTriggerProps) => {
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
            {...sidebarTriggerCloseIconAnimation}
            style={{
              display: 'inline-flex',
              willChange: 'transform, opacity',
            }}
          >
            <X className="sm:size-6 size-4" />
          </motion.span>
        ) : (
          <motion.span
            key="open"
            {...sidebarTriggerOpenIconAnimation}
            style={{
              display: 'inline-flex',
              willChange: 'transform, opacity',
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
