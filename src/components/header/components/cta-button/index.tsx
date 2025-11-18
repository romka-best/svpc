import { Button } from '@/components/ui/button';

import { HeaderCTAButtonContent } from './components/content';

const HeaderCTAButton = () => {
  return (
    <>
      {/* Mobile */}
      <Button
        className="flex md:hidden"
        size="xs"
        variant="outline"
      >
        <HeaderCTAButtonContent />
      </Button>

      {/* Desktop */}
      <Button
        className="hidden md:flex"
        size="s"
        variant="outline"
      >
        <HeaderCTAButtonContent />
      </Button>
    </>
  );
};

export { HeaderCTAButton };
