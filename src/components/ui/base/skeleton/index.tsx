import { cn } from '@/lib/utils';

import type { SkeletonProps } from './types';

const Skeleton = ({
  className,
  ...props
}: SkeletonProps) => {
  return (
    <div
      className={cn('bg-accent animate-pulse rounded-md', className)}
      data-slot="skeleton"
      {...props}
    />
  );
};

export { Skeleton };
