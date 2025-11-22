import { cn } from '@/lib/utils';

interface Props extends React.ComponentProps<'div'> { className?: string; }

const SidebarGroupContent = ({
  className,
  ...props
}: Props) => {
  return (
    <div
      className={cn('w-full text-base font-medium', className)}
      data-sidebar="group-content"
      data-slot="sidebar-group-content"
      {...props}
    />
  );
};

export { SidebarGroupContent };
