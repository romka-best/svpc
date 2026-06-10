import * as React from 'react';

import * as SheetPrimitive from '@radix-ui/react-dialog';

export interface SheetContentProps extends React.ComponentProps<typeof SheetPrimitive.Content> {
  side?: 'top' | 'right' | 'bottom' | 'left';
}
