import { cn } from '@/lib/utils';

import type { SheetFooterProps } from './types';

const SheetFooter = ({
  className,
  ...props
}: SheetFooterProps) => {
  return (
    <div
      className={cn('mt-auto flex flex-col gap-2 p-4', className)}
      data-slot="sheet-footer"
      {...props}
    />
  );
};

export { SheetFooter };
