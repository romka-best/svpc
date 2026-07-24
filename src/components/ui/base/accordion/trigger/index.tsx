import * as AccordionPrimitive from '@radix-ui/react-accordion';
import {
  Minus,
  Plus,
} from 'lucide-react';

import { cn } from '@/lib/utils';

import type { AccordionTriggerProps } from './types';

const AccordionTrigger = ({
  className,
  children,
  ...props
}: AccordionTriggerProps) => {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          'group flex flex-1 cursor-pointer items-start justify-between gap-4 rounded-sm text-left outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50',
          className,
        )}
        data-slot="accordion-trigger"
        {...props}
      >
        {children}
        <span className="relative mt-0.5 size-6 shrink-0 text-primary">
          <Plus className="absolute inset-0 size-6 transition-opacity duration-200 group-data-[state=open]:opacity-0" />
          <Minus className="absolute inset-0 size-6 opacity-0 transition-opacity duration-200 group-data-[state=open]:opacity-100" />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
};

export { AccordionTrigger };
