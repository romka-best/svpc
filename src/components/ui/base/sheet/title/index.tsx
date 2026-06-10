import * as SheetPrimitive from '@radix-ui/react-dialog';

import { cn } from '@/lib/utils';

import type { SheetTitleProps } from './types';

const SheetTitle = ({
  className,
  ...props
}: SheetTitleProps) => {
  return (
    <SheetPrimitive.Title
      className={cn('text-foreground font-semibold', className)}
      data-slot="sheet-title"
      {...props}
    />
  );
};

export { SheetTitle };
