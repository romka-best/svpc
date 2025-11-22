import { cn } from '@/lib/utils';

interface Props extends React.ComponentProps<'ul'> { asChild?: boolean; }

const SidebarMenu = ({
  className,
  ...props 
}: Props) => {
  return (
    <ul
      className={cn('flex w-full min-w-0 flex-col gap-4', className)}
      data-sidebar="menu"
      data-slot="sidebar-menu"
      {...props}
    />
  );
};

export { SidebarMenu };
