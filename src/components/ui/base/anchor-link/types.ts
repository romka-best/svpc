import type { ComponentPropsWithoutRef } from 'react';

export interface AnchorLinkProps extends ComponentPropsWithoutRef<'a'> {
  href: string;
}
