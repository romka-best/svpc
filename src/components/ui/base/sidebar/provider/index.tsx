'use client';

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { useIsMobile } from '@/hooks/use-is-mobile';

import {
  SIDEBAR_COOKIE_MAX_AGE,
  SIDEBAR_COOKIE_NAME,
  SIDEBAR_KEYBOARD_SHORTCUT,
} from '../constants';
import {
  SidebarContext,
  SidebarContextProps,
} from '../context';
import { SidebarState } from '../types';

import type { SidebarProviderProps } from './types';

const SidebarProvider = ({
  defaultOpen = false,
  open: openProp,
  onOpenChange: setOpenProp,
  children,
}: SidebarProviderProps) => {
  const { isMobile } = useIsMobile();

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [
    _open,
    _setOpen,
  ] = useState(defaultOpen);
  const [
    isTransitioning,
    setIsTransitioning,
  ] = useState(false);
  const open = openProp ?? _open;
  const setOpen = useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      if (isTransitioning) return;

      const openState = typeof value === 'function' ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }

      // This sets the cookie to keep the sidebar state.
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;

      // Prevent rapid toggling
      setIsTransitioning(true);
      setTimeout(() => setIsTransitioning(false), 300);
    },
    [
      setOpenProp,
      open,
      isTransitioning,
    ],
  );

  // Helper to toggle the sidebar.
  const toggleSidebar = useCallback(() => {
    return setOpen((open) => !open);
  }, [
    setOpen,
  ]);

  // Adds a keyboard shortcut to toggle the sidebar.
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    toggleSidebar,
  ]);

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? SidebarState.Expanded : SidebarState.Collapsed;

  const contextValue = useMemo<SidebarContextProps>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      toggleSidebar,
    }),
    [
      state,
      open,
      setOpen,
      isMobile,
      toggleSidebar,
    ],
  );

  return (
    <SidebarContext.Provider value={contextValue}>
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarProvider };
