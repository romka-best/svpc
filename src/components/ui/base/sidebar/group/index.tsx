import { cn } from '@/lib/utils';

import type { SidebarGroupProps } from './types';

const SidebarGroup = ({
  className,
  ...props
}: SidebarGroupProps) => {
  return (
    <div
      className={cn('relative flex gap-6 w-full min-w-0 flex-col', className)}
      data-sidebar="group"
      data-slot="sidebar-group"
      {...props}
    />
  );
};

export { SidebarGroup };
