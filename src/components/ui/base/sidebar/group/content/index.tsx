import { cn } from '@/lib/utils';

import type { SidebarGroupContentProps } from './types';

const SidebarGroupContent = ({
  className,
  ...props
}: SidebarGroupContentProps) => {
  return (
    <div
      className={cn('w-full text-base font-medium', className)}
      data-sidebar="group-content"
      data-slot="sidebar-group-content"
      {...props}
    />
  );
};

export { SidebarGroupContent };
