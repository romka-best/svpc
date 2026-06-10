import * as React from 'react';

import * as SheetPrimitive from '@radix-ui/react-dialog';

export interface SheetTitleProps extends React.ComponentProps<typeof SheetPrimitive.Title> {
  className?: string;
}
