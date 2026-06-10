import * as SheetPrimitive from '@radix-ui/react-dialog';

import type { SheetCloseProps } from './types';

const SheetClose = ({ ...props }: SheetCloseProps) => {
  return (
    <SheetPrimitive.Close
      data-slot="sheet-close"
      {...props}
    />
  );
};

export { SheetClose };
