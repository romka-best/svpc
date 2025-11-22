'use client';

import { Link as LinkComponent } from '@/components/ui/base/link';
import { Sidebar } from '@/components/ui/base/sidebar';
import { SidebarContent } from '@/components/ui/base/sidebar/content';
import { SidebarFooter } from '@/components/ui/base/sidebar/footer';
import { SidebarGroup } from '@/components/ui/base/sidebar/group';
import { SidebarGroupContent } from '@/components/ui/base/sidebar/group/content';
import { SidebarGroupLabel } from '@/components/ui/base/sidebar/group/label';
import { SidebarMenu } from '@/components/ui/base/sidebar/menu';
import { SidebarMenuItem } from '@/components/ui/base/sidebar/menu/item';
import { SidebarProvider } from '@/components/ui/base/sidebar/provider';
import { SidebarTrigger } from '@/components/ui/base/sidebar/trigger';
import { AuthorInfo } from '@/components/ui/complex/author-info';
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
                    <LinkComponent
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
                    <LinkComponent
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
                <LinkComponent
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
