import { createContext } from 'react';

import { SidebarState } from '../types';

export interface SidebarContextProps {
  state: SidebarState
  open: boolean
  setOpen: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = createContext<SidebarContextProps | null>(null);

export { SidebarContext };
