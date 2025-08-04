'use client';

import { ComponentProps, MouseEvent, useMemo } from 'react';

import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

import { useSidebar } from '../hooks/use-sidebar';

interface Props extends ComponentProps<typeof Button> {
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const SidebarTrigger = ({
  className,
  onClick,
  ...props
}: Props) =>{
  const isMobile = useIsMobile();
  const { toggleSidebar } = useSidebar();

  const size = useMemo(() => {
    return isMobile ? 's' : 'm';
  }, [
    isMobile,
  ]);

  return (
    <Button
      className={className}
      size={size} 			
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      <Menu className="md:size-6 size-4" />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
};

export { SidebarTrigger };
