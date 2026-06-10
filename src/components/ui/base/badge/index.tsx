import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/lib/utils';

import type { BadgeProps } from './types';
import { badgeVariants } from './variants';

const Badge = ({
  className,
  variant,
  size,
  clickable,
  asChild = false,
  onClick,
  ...props
}: BadgeProps) => {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp
      className={cn(badgeVariants({
        variant,
        size,
        clickable,
      }), className)}
      data-slot="badge"
      onClick={clickable ? onClick : undefined}
      {...props}
    />
  );
};

export { Badge };
