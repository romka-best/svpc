import { cn } from '@/lib/utils';

interface Props extends React.ComponentProps<'div'> { className?: string; }

const SidebarGroup = ({
  className, 
  ...props 
}: Props) => {
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
