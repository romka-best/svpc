import * as AccordionPrimitive from '@radix-ui/react-accordion';

import { cn } from '@/lib/utils';

import type { AccordionContentProps } from './types';

const AccordionContent = ({
  className,
  children,
  ...props
}: AccordionContentProps) => {
  return (
    <AccordionPrimitive.Content
      className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      data-slot="accordion-content"
      {...props}
    >
      <div className={cn('pr-10 pt-4', className)}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
};

export { AccordionContent };
