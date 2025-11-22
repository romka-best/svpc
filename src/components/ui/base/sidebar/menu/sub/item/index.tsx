import { cn } from '@/lib/utils';

interface Props extends React.ComponentProps<'li'> { className?: string; }

const SidebarMenuSubItem = ({
  className,
  ...props
}: Props) => {
  return (
    <li
      className={cn('group/menu-sub-item relative', className)}
      data-sidebar="menu-sub-item"
      data-slot="sidebar-menu-sub-item"
      {...props}
    />
  );
};

export { SidebarMenuSubItem };
