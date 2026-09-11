'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/base/button';
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
            <SidebarGroupLabel>Home</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {homeLinks.map((link) => (
                  <SidebarMenuItem key={link.href}>
                    <Button
                      asChild
                      className="font-medium"
                      size="s"
                      variant="link"
                    >
                      <Link
                        href={link.href}
                        target={link.target}
                      >
                        {link.label}
                      </Link>
                    </Button>
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
                    <Button
                      asChild
                      className="font-medium"
                      size="s"
                      variant="link"
                    >
                      <Link
                        href={link.href}
                        target={link.target}
                      >
                        {link.label}
                      </Link>
                    </Button>
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
                <Button
                  asChild
                  className="font-medium"
                  size="s"
                  variant="link"
                >
                  <Link
                    aria-label={link.label ? undefined : link.alt}
                    href={link.href}
                    target={link.target}
                  >
                    {link.icon && (
                      <Image
                        alt={link.alt || link.label || ''}
                        height={32}
                        src={link.icon}
                        width={32}
                      />
                    )}
                    {link.label}
                  </Link>
                </Button>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
          <AuthorInfo
            className="sm:justify-center"
            location="menu"
          />
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  );
};

export { HeaderMenu };
