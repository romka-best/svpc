'use client';

import { Sidebar } from '@/components/ui/sidebar';
import { SidebarContent } from '@/components/ui/sidebar/content';
import { SidebarFooter } from '@/components/ui/sidebar/footer';
import { SidebarGroup } from '@/components/ui/sidebar/group';
import { SidebarGroupContent } from '@/components/ui/sidebar/group/content';
import { SidebarGroupLabel } from '@/components/ui/sidebar/group/label';
import { SidebarMenu } from '@/components/ui/sidebar/menu';
import { SidebarProvider } from '@/components/ui/sidebar/provider';
import { SidebarTrigger } from '@/components/ui/sidebar/trigger';

const HeaderMenu = () => {
  return (
    <SidebarProvider>
      <SidebarTrigger />
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Home Page</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Legal</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  );
};

export { HeaderMenu };
