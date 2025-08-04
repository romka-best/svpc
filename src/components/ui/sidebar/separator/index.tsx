import { Separator } from '@/components/ui/separator/separator';
import { cn } from '@/lib/utils';

const SidebarSeparator = ({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) => {
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
