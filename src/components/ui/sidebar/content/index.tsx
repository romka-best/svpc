import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

interface Props extends ComponentProps<'div'> { className?: string; }

const SidebarContent = ({
  className, 
  ...props 
}: Props) => {
  return (
    <div
      className={cn(
        'flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden',
        className,
      )}
      data-sidebar="content"
      data-slot="sidebar-content"
      {...props}
    />
  );
};

export { SidebarContent };
