import * as AccordionPrimitive from '@radix-ui/react-accordion';

import type { AccordionProps } from './types';

const Accordion = ({ ...props }: AccordionProps) => {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      {...props}
    />
  );
};

export { Accordion };
