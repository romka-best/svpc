'use client';

import { Sidebar } from '@/components/ui/sidebar';
import { SidebarContent } from '@/components/ui/sidebar/content';
import { SidebarProvider } from '@/components/ui/sidebar/provider';
import { SidebarTrigger } from '@/components/ui/sidebar/trigger';

const HeaderMenu = () => {
  return (
    <SidebarProvider>
      <SidebarTrigger />
      <Sidebar>
        <SidebarContent />
      </Sidebar>
    </SidebarProvider>
  );
};

export { HeaderMenu };
