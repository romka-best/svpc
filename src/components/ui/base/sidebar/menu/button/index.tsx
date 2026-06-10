import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/lib/utils';

import type { SidebarMenuButtonProps } from './types';
import { sidebarMenuButtonVariants } from './variants';

const SidebarMenuButton = ({
  asChild = false,
  isActive = false,
  variant = 'default',
  size = 'default',
  className,
  ...props
}: SidebarMenuButtonProps) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={cn(sidebarMenuButtonVariants({
        variant,
        size,
      }), className)}
      data-active={isActive}
      data-sidebar="menu-button"
      data-size={size}
      data-slot="sidebar-menu-button"
      {...props}
    />
  );
};

export { SidebarMenuButton };
