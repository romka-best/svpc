import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

interface Props extends ComponentProps<'div'> { className?: string; }

const SidebarFooter = ({
  className, 
  ...props 
}: Props) => {
  return (
    <div
      className={cn('flex flex-col gap-2 p-2', className)}
      data-sidebar="footer"
      data-slot="sidebar-footer"
      {...props}
    />
  );
};

export { SidebarFooter };
