import { CTAButton } from '@/components/ui/common/cta-button';
import { Logo } from '@/components/ui/common/logo';

import { HeaderMenu } from './components/menu';

const Header = () => {
  return (
    <header className="sticky top-0 left-0 z-60 flex items-center justify-between px-5 pt-5 sm:pt-10 pb-2.5">
      <Logo />
      <div className="flex items-center gap-4 pointer-events-auto">
        <CTAButton />
        <HeaderMenu />
      </div>
    </header>
  );
};

export { Header };
