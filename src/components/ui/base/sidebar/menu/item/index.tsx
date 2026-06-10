import { cn } from '@/lib/utils';

import type { SidebarMenuItemProps } from './types';

const SidebarMenuItem = ({
  className,
  ...props
}: SidebarMenuItemProps) => {
  return (
    <li
      className={cn('w-max group/menu-item relative', className)}
      data-sidebar="menu-item"
      data-slot="sidebar-menu-item"
      {...props}
    />
  );
};

export { SidebarMenuItem };
