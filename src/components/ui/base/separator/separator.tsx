import { ComponentProps } from 'react';

import * as SeparatorPrimitive from '@radix-ui/react-separator';

import { cn } from '@/lib/utils';

interface Props extends ComponentProps<typeof SeparatorPrimitive.Root> {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
  decorative?: boolean;
}

const Separator = ({
  className,
  orientation = 'horizontal',
  decorative = true,
  ...props
}: Props) => {
  return (
    <SeparatorPrimitive.Root
      className={cn(
        'bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px',
        className,
      )}
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      {...props}
    />
  );
};

export { Separator };
