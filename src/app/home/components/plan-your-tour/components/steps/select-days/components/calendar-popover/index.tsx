'use client';

import {
  type ReactNode,
  type RefObject,
  useLayoutEffect,
  useSyncExternalStore,
} from 'react';
import { createPortal } from 'react-dom';

import {
  AnimatePresence,
  motion,
} from 'motion/react';

interface CalendarPopoverProps {
  anchorRef: RefObject<HTMLElement | null>;
  children: ReactNode;
  open: boolean;
  popoverRef: RefObject<HTMLDivElement | null>;
}

const subscribeToIsClient = () => {
  return () => {
    return undefined;
  };
};

const getIsClientSnapshot = () => {
  return true;
};

const getIsClientServerSnapshot = () => {
  return false;
};

const CalendarPopover = ({
  anchorRef,
  children,
  open,
  popoverRef,
}: CalendarPopoverProps) => {
  const isClient = useSyncExternalStore(
    subscribeToIsClient,
    getIsClientSnapshot,
    getIsClientServerSnapshot,
  );

  useLayoutEffect(() => {
    if (!open) {
      return;
    }

    const updatePosition = () => {
      const anchor = anchorRef.current;
      const popover = popoverRef.current;

      if (!anchor || !popover) {
        return;
      }

      const rect = anchor.getBoundingClientRect();

      popover.style.left = `${Math.max(16, rect.left)}px`;
      popover.style.top = `${rect.bottom + 12}px`;
    };

    updatePosition();

    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, {
      capture: true,
      passive: true,
    });
    window.visualViewport?.addEventListener('resize', updatePosition);
    window.visualViewport?.addEventListener('scroll', updatePosition);

    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, { capture: true });
      window.visualViewport?.removeEventListener('resize', updatePosition);
      window.visualViewport?.removeEventListener('scroll', updatePosition);
    };
  }, [
    anchorRef,
    open,
    popoverRef,
  ]);

  if (!isClient) {
    return null;
  }

  return createPortal(
    <AnimatePresence initial={false}>
      {open
        ? (
          <motion.div
            key="date-range-calendar-popover"
            ref={popoverRef}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="fixed z-70 max-h-[min(32rem,calc(100svh-8rem))] overflow-y-auto"
            exit={{
              opacity: 0,
              y: -8,
            }}
            initial={{
              opacity: 0,
              y: -8,
            }}
            style={{
              left: 0,
              top: 0,
              willChange: 'transform, opacity',
            }}
            transition={{
              duration: 0.25,
              ease: 'easeOut',
            }}
          >
            {children}
          </motion.div>
        )
        : null}
    </AnimatePresence>,
    document.body,
  );
};

export { CalendarPopover };
