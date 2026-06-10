import { cn } from '@/lib/utils';

import type { SidebarContentProps } from './types';

const SidebarContent = ({
  className,
  ...props
}: SidebarContentProps) => {
  return (
    <div
      className={cn(
        'flex min-h-0 flex-1 flex-col gap-8 pt-32 sm:pt-8 px-10 overflow-auto group-data-[collapsible=icon]:overflow-hidden',
        className,
      )}
      data-sidebar="content"
      data-slot="sidebar-content"
      {...props}
    />
  );
};

export { SidebarContent };
