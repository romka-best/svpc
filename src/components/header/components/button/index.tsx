'use client';

import { Briefcase } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const HeaderButton = () => {
  const isMobile = useIsMobile();

  return (
    <Button
      size={isMobile ? 'xs' : 's'}
      variant="outline"
    >
      Get Started
      <Briefcase className="size-4" />
    </Button>
  );
};

export { HeaderButton };
