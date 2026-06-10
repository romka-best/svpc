import { cn } from '@/lib/utils';

import type { SidebarHeaderProps } from './types';

const SidebarHeader = ({
  className,
  ...props
}: SidebarHeaderProps) => {
  return (
    <div
      className={cn('flex flex-col gap-2 p-2', className)}
      data-sidebar="header"
      data-slot="sidebar-header"
      {...props}
    />
  );
};

export { SidebarHeader };
