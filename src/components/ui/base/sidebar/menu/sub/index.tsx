import { cn } from '@/lib/utils';

import type { SidebarMenuSubProps } from './types';

const SidebarMenuSub = ({
  className,
  ...props
}: SidebarMenuSubProps) => {
  return (
    <ul
      className={cn(
        'border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5',
        'group-data-[collapsible=icon]:hidden',
        className,
      )}
      data-sidebar="menu-sub"
      data-slot="sidebar-menu-sub"
      {...props}
    />
  );
};

export { SidebarMenuSub };
