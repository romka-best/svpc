import {
  ComponentProps,
  MouseEvent,
} from 'react';

import { Button } from '@/components/ui/base/button';

export interface SidebarTriggerProps extends ComponentProps<typeof Button> {
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
