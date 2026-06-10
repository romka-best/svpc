import { cn } from '@/lib/utils';

import type { SidebarMenuSubItemProps } from './types';

const SidebarMenuSubItem = ({
  className,
  ...props
}: SidebarMenuSubItemProps) => {
  return (
    <li
      className={cn('group/menu-sub-item relative', className)}
      data-sidebar="menu-sub-item"
      data-slot="sidebar-menu-sub-item"
      {...props}
    />
  );
};

export { SidebarMenuSubItem };
