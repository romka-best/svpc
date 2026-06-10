import * as SheetPrimitive from '@radix-ui/react-dialog';

import { cn } from '@/lib/utils';

import type { SheetOverlayProps } from './types';

const SheetOverlay = ({
  className,
  ...props
}: SheetOverlayProps) => {
  return (
    <SheetPrimitive.Overlay
      className={cn(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50',
        className,
      )}
      data-slot="sheet-overlay"
      {...props}
    />
  );
};

export { SheetOverlay };
