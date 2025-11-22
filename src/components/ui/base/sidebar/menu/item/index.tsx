import { cn } from '@/lib/utils';

interface Props extends React.ComponentProps<'li'> { asChild?: boolean; }

const SidebarMenuItem = ({
  className, 
  ...props 
}: Props) => {
  return (
    <li
      className={cn('w-max group/menu-item relative', className)}
      data-sidebar="menu-item"
      data-slot="sidebar-menu-item"
      {...props}
    />
  );
};

export { SidebarMenuItem };
