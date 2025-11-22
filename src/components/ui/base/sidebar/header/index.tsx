import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

interface Props extends ComponentProps<'div'> { className?: string; }

const SidebarHeader = ({
  className, 
  ...props 
}: Props) => {
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
