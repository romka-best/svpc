import { cn } from '@/lib/utils';

import type { SidebarFooterProps } from './types';

const SidebarFooter = ({
  className,
  ...props
}: SidebarFooterProps) => {
  return (
    <div
      className={cn('flex flex-col gap-4 px-10 pb-20', className)}
      data-sidebar="footer"
      data-slot="sidebar-footer"
      {...props}
    />
  );
};

export { SidebarFooter };
