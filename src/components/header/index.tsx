'use client';

import {
  useLayoutEffect,
  useRef,
} from 'react';

import { Logo } from '@/components/ui/base/logo';
import { CTAButton } from '@/components/ui/complex/cta-button';

import { HeaderMenu } from './components/menu';

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const header = headerRef.current;

    if (!header) {
      return;
    }

    const syncHeight = () => {
      document.documentElement.style.setProperty(
        '--header-height',
        `${header.getBoundingClientRect().height}px`,
      );
    };

    syncHeight();

    const observer = new ResizeObserver(syncHeight);

    observer.observe(header);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 left-0 z-60 flex items-center justify-between px-5 pt-5 sm:pt-10 pb-2.5 bg-background"
    >
      <Logo />
      <div className="flex items-center gap-4 pointer-events-auto">
        <CTAButton location="header" />
        <HeaderMenu />
      </div>
    </header>
  );
};

export { Header };
