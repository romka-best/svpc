import * as React from 'react';

export enum SidebarState {
  Expanded = 'EXPANDED',
  Collapsed = 'COLLAPSED',
}

export enum SidebarSide {
  Left = 'LEFT',
  Right = 'RIGHT',
}

export enum SidebarVariant {
  Sidebar = 'SIDEBAR',
  Floating = 'FLOATING',
  Inset = 'INSET',
}

export enum SidebarCollapsible {
  Offcanvas = 'OFFCANVAS',
  Icon = 'ICON',
  None = 'NONE',
}

export interface SidebarProps extends React.ComponentProps<'div'> {
  side?: SidebarSide;
  variant?: SidebarVariant;
  collapsible?: SidebarCollapsible;
}
