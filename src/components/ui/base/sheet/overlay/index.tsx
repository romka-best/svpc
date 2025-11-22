import * as SheetPrimitive from '@radix-ui/react-dialog';

import { cn } from '@/lib/utils';

interface Props extends React.ComponentProps<typeof SheetPrimitive.Overlay> { className?: string; }

const SheetOverlay = ({
  className,
  ...props
}: Props) => {
  return (
    <SheetPrimitive.Overlay
      className={cn(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50',
        className,
      )}
      data-slot="sheet-overlay"
      {...props}
    />
  );
};

export { SheetOverlay };
