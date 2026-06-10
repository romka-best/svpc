import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/lib/utils';

import type { SidebarGroupLabelProps } from './types';

const SidebarGroupLabel = ({
  className,
  asChild = false,
  ...props
}: SidebarGroupLabelProps) => {
  const Comp = asChild ? Slot : 'div';

  return (
    <Comp
      className={cn(
        'text-sidebar-foreground flex shrink-0 items-center text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
        'group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0',
        className,
      )}
      data-sidebar="group-label"
      data-slot="sidebar-group-label"
      {...props}
    />
  );
};

export { SidebarGroupLabel };
