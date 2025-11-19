import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

interface Props extends ComponentProps<'div'> { className?: string; }

const SidebarFooter = ({
  className, 
  ...props 
}: Props) => {
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
