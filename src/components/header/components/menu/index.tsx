'use client';

import { SidebarProvider } from '@/components/ui/sidebar/provider';
import { SidebarTrigger } from '@/components/ui/sidebar/trigger';

const HeaderMenu = () => {
  return (
    <SidebarProvider>
      <SidebarTrigger />
    </SidebarProvider>
  );
};

export { HeaderMenu };
