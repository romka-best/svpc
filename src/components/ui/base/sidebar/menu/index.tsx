import { cn } from '@/lib/utils';

import type { SidebarMenuProps } from './types';

const SidebarMenu = ({
  className,
  ...props
}: SidebarMenuProps) => {
  return (
    <ul
      className={cn('flex w-full min-w-0 flex-col gap-4', className)}
      data-sidebar="menu"
      data-slot="sidebar-menu"
      {...props}
    />
  );
};

export { SidebarMenu };
