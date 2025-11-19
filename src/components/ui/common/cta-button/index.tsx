import { Button } from '@/components/ui/button';

import { CTAButtonContent } from './components/content';

const CTAButton = () => {
  return (
    <>
      {/* Mobile */}
      <Button
        className="flex md:hidden"
        size="xs"
        variant="outline"
      >
        <CTAButtonContent />
      </Button>

      {/* Desktop */}
      <Button
        className="hidden md:flex"
        size="s"
        variant="outline"
      >
        <CTAButtonContent />
      </Button>
    </>
  );
};

export { CTAButton };

