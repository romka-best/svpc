import * as React from 'react';

import * as SheetPrimitive from '@radix-ui/react-dialog';

export interface SheetOverlayProps extends React.ComponentProps<typeof SheetPrimitive.Overlay> {
  className?: string;
}
