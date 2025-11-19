'use client';

import { ComponentProps } from 'react';

import {
  AnimatePresence,
  motion,
} from 'motion/react';

import { cn } from '@/lib/utils';

import { Sheet } from '../sheet';
import { SheetContent } from '../sheet/content';
import { SheetDescription } from '../sheet/description';
import { SheetHeader } from '../sheet/header';
import { SheetTitle } from '../sheet/title';

import { useSidebar } from './hooks/use-sidebar';
import {
  SidebarCollapsible,
  SidebarSide,
  SidebarState,
  SidebarVariant,
} from './types';

interface Props extends ComponentProps<'div'> {
  side?: SidebarSide;
  variant?: SidebarVariant;
  collapsible?: SidebarCollapsible;
}

const Sidebar = ({
  side = SidebarSide.Right,
  variant = SidebarVariant.Sidebar,
  collapsible = SidebarCollapsible.Offcanvas,
  className,
  children,
  ...props
}: Props) => {
  const {
    isMobile,
    state,
    open,
    setOpen,
  } = useSidebar();

  if (collapsible === SidebarCollapsible.None) {
    return (
      <div
        className={cn(
          'bg-sidebar flex h-full w-(--sidebar-width) flex-col',
          className,
        )}
        data-slot="sidebar"
        {...props}
      >
        {children}
      </div>
    );
  }

  if (isMobile) {
    return (
      <Sheet
        open={open}
        onOpenChange={setOpen}
        {...props}
      >
        <SheetContent
          className="bg-sidebar w-(--sidebar-width) p-0 [&>button]:hidden"
          data-mobile="true"
          data-sidebar="sidebar"
          data-slot="sidebar"
          side={side.toLowerCase() as 'left' | 'right'}
          style={
            { '--sidebar-width': '100%' } as React.CSSProperties
          }
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Displays the mobile sidebar.</SheetDescription>
          </SheetHeader>
          <div className="flex h-full w-full flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div
      className="group peer hidden sm:block"
      data-collapsible={state === SidebarState.Collapsed ? collapsible : ''}
      data-side={side}
      data-slot="sidebar"
      data-state={state}
      data-variant={variant}
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div
        className={cn(
          'relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear',
          'group-data-[collapsible=offcanvas]:w-0',
          'group-data-[side=right]:rotate-180',
          variant === SidebarVariant.Floating || variant === SidebarVariant.Inset
            ? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]'
            : 'group-data-[collapsible=icon]:w-(--sidebar-width-icon)',
        )}
        data-slot="sidebar-gap"
      />
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            key="sidebar"
            animate={{
              opacity: 1,
              x: 0,
            }}
            className={cn(
              'fixed inset-y-0 z-10 h-[100svh-5.625rem] w-(--sidebar-width) flex mt-22.5',
              side === SidebarSide.Left
                ? 'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]'
                : 'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]',
              // Adjust the padding for floating and inset variants.
              variant === SidebarVariant.Floating || variant === SidebarVariant.Inset
                ? 'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]'
                : 'group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l',
              className,
            )}
            data-slot="sidebar-container"
            exit={{
              opacity: 0,
              x: side === SidebarSide.Left ? -100 : 100,
            }}
            initial={{
              opacity: 0,
              x: side === SidebarSide.Left ? -100 : 100,
            }}
            style={{ willChange: 'transform, opacity' }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
            }}
          >
            <div
              className="bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
              data-sidebar="sidebar"
              data-slot="sidebar-inner"
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { Sidebar };
