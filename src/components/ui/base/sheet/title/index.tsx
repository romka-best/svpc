import * as SheetPrimitive from '@radix-ui/react-dialog';

import { cn } from '@/lib/utils';

interface Props extends React.ComponentProps<typeof SheetPrimitive.Title> { className?: string; }

const SheetTitle = ({
  className,
  ...props
}: Props) => {
  return (
    <SheetPrimitive.Title
      className={cn('text-foreground font-semibold', className)}
      data-slot="sheet-title"
      {...props}
    />
  );
};

export { SheetTitle };
