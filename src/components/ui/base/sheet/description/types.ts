import * as React from 'react';

import * as SheetPrimitive from '@radix-ui/react-dialog';

export interface SheetDescriptionProps extends React.ComponentProps<typeof SheetPrimitive.Description> {
  className?: string;
}
