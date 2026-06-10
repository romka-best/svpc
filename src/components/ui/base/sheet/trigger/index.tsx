import * as SheetPrimitive from '@radix-ui/react-dialog';

import type { SheetTriggerProps } from './types';

const SheetTrigger = ({ ...props }: SheetTriggerProps) => {
  return (
    <SheetPrimitive.Trigger
      data-slot="sheet-trigger"
      {...props}
    />
  );
};

export { SheetTrigger };
