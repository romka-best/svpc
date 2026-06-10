import * as SheetPrimitive from '@radix-ui/react-dialog';

import { cn } from '@/lib/utils';

import type { SheetDescriptionProps } from './types';

const SheetDescription = ({
  className,
  ...props
}: SheetDescriptionProps) => {
  return (
    <SheetPrimitive.Description
      className={cn('text-muted-foreground text-sm', className)}
      data-slot="sheet-description"
      {...props}
    />
  );
};

export { SheetDescription };
