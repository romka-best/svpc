import * as React from 'react';

export interface SidebarMenuActionProps extends React.ComponentProps<'button'> {
  className?: string;
  asChild?: boolean;
  showOnHover?: boolean;
}
