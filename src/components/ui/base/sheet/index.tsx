import * as SheetPrimitive from '@radix-ui/react-dialog';

import type { SheetProps } from './types';

const Sheet = ({ ...props }: SheetProps) => {
  return (
    <SheetPrimitive.Root
      data-slot="sheet"
      {...props}
    />
  );
};

export { Sheet };
