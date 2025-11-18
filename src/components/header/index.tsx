import { HeaderCTAButton } from './components/cta-button';
import { HeaderLogo } from './components/logo';
import { HeaderMenu } from './components/menu';

export function Header() {
  return (
    <header className="sticky top-0 left-0 z-60 flex items-center justify-between px-5 pt-5 pb-2.5">
      <HeaderLogo />
      <div className="flex items-center gap-4">
        <HeaderCTAButton />
        <HeaderMenu />
      </div>
    </header>
  );
}
