import { cn } from '@/lib/utils';

interface Props extends React.ComponentProps<'div'> {
  className?: string;
}

const Skeleton = ({
  className, 
  ...props 
}: Props) => {
  return (
    <div
      className={cn('bg-accent animate-pulse rounded-md', className)}
      data-slot="skeleton"
      {...props}
    />
  );
};

export { Skeleton };
