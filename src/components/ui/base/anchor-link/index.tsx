'use client';

import type { MouseEvent } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import type { AnchorLinkProps } from './types';

/**
 * Link to a section, either on this page or another one.
 *
 * On the current page `next/link` skips the scroll once the URL already carries
 * the hash, and the router restores the scroll position of the new history
 * entry mid-animation, which cancels the browser's smooth fragment scroll.
 * Scrolling by hand keeps every click working and the animation intact.
 */
const AnchorLink = ({
  href,
  onClick,
  ...props
}: AnchorLinkProps) => {
  const pathname = usePathname();

  const hashIndex = href.indexOf('#');
  const hash = hashIndex === -1 ? '' : href.slice(hashIndex + 1);
  const targetPathname = hashIndex === -1 ? href : href.slice(0, hashIndex);
  const isCurrentPage = Boolean(hash) && (targetPathname === '' || targetPathname === pathname);

  if (!isCurrentPage) {
    return (
      <Link
        href={href}
        {...props}
        onClick={onClick}
      />
    );
  }

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    const isModifiedClick = event.metaKey
      || event.ctrlKey
      || event.shiftKey
      || event.altKey
      || event.button !== 0;

    if (event.defaultPrevented || isModifiedClick) {
      return;
    }

    const target = document.getElementById(hash);

    if (!target) {
      return;
    }

    event.preventDefault();

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    target.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start',
    });

    window.history.replaceState(window.history.state, '', `#${hash}`);
  };

  return (
    <a
      href={href}
      {...props}
      onClick={handleClick}
    />
  );
};

export { AnchorLink };
