'use client';

import type { ReactNode } from 'react';

import { Button } from '@/components/ui/base/button';
import type { ButtonProps } from '@/components/ui/base/button/types';
import { cn } from '@/lib/utils';

interface StepNavButtonProps extends Omit<ButtonProps, 'size'> {
  children: ReactNode;
}

const StepNavButton = ({
  children,
  className,
  ...props
}: StepNavButtonProps) => {
  return (
    <>
      <Button
        {...props}
        className={cn('tracking-tight lg:hidden', className)}
        size="m"
      >
        {children}
      </Button>
      <Button
        {...props}
        className={cn(
          'hidden h-12.5 gap-2 px-5 py-2.5 text-base tracking-tight lg:flex',
          className,
        )}
        size="l"
      >
        {children}
      </Button>
    </>
  );
};

export { StepNavButton };
