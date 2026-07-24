import * as AccordionPrimitive from '@radix-ui/react-accordion';

import { cn } from '@/lib/utils';

import type { AccordionItemProps } from './types';

const AccordionItem = ({
  className,
  ...props
}: AccordionItemProps) => {
  return (
    <AccordionPrimitive.Item
      className={cn('flex flex-col', className)}
      data-slot="accordion-item"
      {...props}
    />
  );
};

export { AccordionItem };
