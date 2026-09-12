import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface PlanYourTourPanelProps {
  children: ReactNode;
  className?: string;
}

const PlanYourTourPanel = ({
  children,
  className,
}: PlanYourTourPanelProps) => {
  return (
    <div className={cn(
      'flex h-full min-h-0 min-w-0 w-full flex-1 flex-col overflow-hidden rounded-[30px] border border-gray bg-background p-6 md:p-8',
      className,
    )}
    >
      {children}
    </div>
  );
};

export { PlanYourTourPanel };
