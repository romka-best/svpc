import { cn } from '@/lib/utils';

import type { SheetHeaderProps } from './types';

const SheetHeader = ({
  className,
  ...props
}: SheetHeaderProps) => {
  return (
    <div
      className={cn('flex flex-col gap-1.5 p-4', className)}
      data-slot="sheet-header"
      {...props}
    />
  );
};

export { SheetHeader };
