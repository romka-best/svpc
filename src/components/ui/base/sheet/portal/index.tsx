import * as SheetPrimitive from '@radix-ui/react-dialog';

import type { SheetPortalProps } from './types';

const SheetPortal = ({ ...props }: SheetPortalProps) => {
  return (
    <SheetPrimitive.Portal
      data-slot="sheet-portal"
      {...props}
    />
  );
};

export { SheetPortal };
