import { Button } from '@/components/ui/base/button';

import { CTAButtonContent } from './components/content';

const CTAButton = () => {
  return (
    <>
      {/* Mobile */}
      <Button
        className="flex sm:hidden"
        size="xs"
        variant="outline"
      >
        <CTAButtonContent />
      </Button>

      {/* Desktop */}
      <Button
        className="hidden sm:flex"
        size="s"
        variant="outline"
      >
        <CTAButtonContent />
      </Button>
    </>
  );
};

export { CTAButton };

