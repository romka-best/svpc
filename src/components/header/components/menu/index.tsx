'use client';

import { AuthorInfo } from '@/components/ui/common/author-info';
import { CommonLink } from '@/components/ui/common/link';
import { Sidebar } from '@/components/ui/sidebar';
import { SidebarContent } from '@/components/ui/sidebar/content';
import { SidebarFooter } from '@/components/ui/sidebar/footer';
import { SidebarGroup } from '@/components/ui/sidebar/group';
import { SidebarGroupContent } from '@/components/ui/sidebar/group/content';
import { SidebarGroupLabel } from '@/components/ui/sidebar/group/label';
import { SidebarMenu } from '@/components/ui/sidebar/menu';
import { SidebarMenuItem } from '@/components/ui/sidebar/menu/item';
import { SidebarProvider } from '@/components/ui/sidebar/provider';
import { SidebarTrigger } from '@/components/ui/sidebar/trigger';
import {
  homeLinks,
  legalLinks,
  socialLinks,
} from '@/constants/links';

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
                {homeLinks.map((link) => (
                  <SidebarMenuItem key={link.href}>
                    <CommonLink
                      link={link}
                    />
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Legal</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {legalLinks.map((link) => (
                  <SidebarMenuItem key={link.href}>
                    <CommonLink
                      link={link}
                    />
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu className="flex-row">
            {socialLinks.map((link) => (
              <SidebarMenuItem key={link.href}>
                <CommonLink
                  link={link}
                />
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
          <AuthorInfo className="sm:justify-center" />
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  );
};

export { HeaderMenu };
