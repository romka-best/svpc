import { cn } from '@/lib/utils';

interface Props extends React.ComponentProps<'div'> { className?: string; }

const SheetHeader = ({
  className, 
  ...props 
}: Props) => {
  return (
    <div
      className={cn('flex flex-col gap-1.5 p-4', className)}
      data-slot="sheet-header"
      {...props}
    />
  );
};

export { SheetHeader };
