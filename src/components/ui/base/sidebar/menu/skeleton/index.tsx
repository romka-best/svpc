import { useMemo } from 'react';

import { Skeleton } from '@/components/ui/base/skeleton';
import { cn } from '@/lib/utils';

import type { SidebarMenuSkeletonProps } from './types';

const SidebarMenuSkeleton = ({
  className,
  showIcon = false,
  ...props
}: SidebarMenuSkeletonProps) => {
  // Random width between 50 to 90%.
  const width = useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, [
  ]);

  return (
    <div
      className={cn('flex h-8 items-center gap-2 rounded-md px-2', className)}
      data-sidebar="menu-skeleton"
      data-slot="sidebar-menu-skeleton"
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="size-4 rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="h-4 max-w-(--skeleton-width) flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          { '--skeleton-width': width } as React.CSSProperties
        }
      />
    </div>
  );
};

export { SidebarMenuSkeleton };
