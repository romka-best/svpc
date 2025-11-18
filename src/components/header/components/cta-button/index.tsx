import { Briefcase } from 'lucide-react';

import { Button } from '@/components/ui/button';

const HeaderCTAButton = () => {
  return (
    <>
      {/* Mobile */}
      <Button
        className="flex md:hidden"
        size="xs"
        variant="outline"
      >
        Get Started
        <Briefcase className="size-4" />
      </Button>

      {/* Desktop */}
      <Button
        className="hidden md:flex"
        size="s"
        variant="outline"
      >
        Get Started
        <Briefcase className="size-4" />
      </Button>
    </>
  );
};

export { HeaderCTAButton };
