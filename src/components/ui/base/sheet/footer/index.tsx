import { cn } from '@/lib/utils';

interface Props extends React.ComponentProps<'div'> { className?: string; }

const SheetFooter = ({
  className,
  ...props 
}: Props) => {
  return (
    <div
      className={cn('mt-auto flex flex-col gap-2 p-4', className)}
      data-slot="sheet-footer"
      {...props}
    />
  );
};

export { SheetFooter };
