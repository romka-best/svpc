import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/lib/utils';

import type { SidebarGroupActionProps } from './types';

const SidebarGroupAction = ({
  className,
  asChild = false,
  ...props
}: SidebarGroupActionProps) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={cn(
        'text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
        // Increases the hit area of the button on mobile.
        'after:absolute after:-inset-2 md:after:hidden',
        'group-data-[collapsible=icon]:hidden',
        className,
      )}
      data-sidebar="group-action"
      data-slot="sidebar-group-action"
      {...props}
    />
  );
};

export { SidebarGroupAction };
