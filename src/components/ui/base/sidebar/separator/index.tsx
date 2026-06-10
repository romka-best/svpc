import { Separator } from '@/components/ui/base/separator';
import { cn } from '@/lib/utils';

import type { SidebarSeparatorProps } from './types';

const SidebarSeparator = ({
  className,
  ...props
}: SidebarSeparatorProps) => {
  return (
    <Separator
      className={cn('bg-sidebar-border mx-2 w-auto', className)}
      data-sidebar="separator"
      data-slot="sidebar-separator"
      {...props}
    />
  );
};

export { SidebarSeparator };
