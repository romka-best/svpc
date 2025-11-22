import * as SheetPrimitive from '@radix-ui/react-dialog';

import { cn } from '@/lib/utils';

interface Props extends React.ComponentProps<typeof SheetPrimitive.Description> { className?: string; }

const SheetDescription = ({
  className,
  ...props
}: Props) => {
  return (
    <SheetPrimitive.Description
      className={cn('text-muted-foreground text-sm', className)}
      data-slot="sheet-description"
      {...props}
    />
  );
};

export { SheetDescription };
