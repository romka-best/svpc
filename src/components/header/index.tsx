import Link from 'next/link';

import { HeaderCTAButton } from './components/cta-button';
import { HeaderMenu } from './components/menu';

export function Header() {
  return (
    <header className="sticky top-0 left-0 z-50 flex items-center justify-between px-5 pt-5 pb-2.5">
      <Link
        className="flex items-center gap-1"
        href="/"
      >
        <h1 className="text-xs font-bold">Silicon Valley</h1>
        <span className="bg-primary font-bold px-2 py-1 rounded-full text-xs">
          Private Circle
        </span>
      </Link>
      <div className="flex items-center gap-4">
        <HeaderCTAButton />
        <HeaderMenu />
      </div>
    </header>
  );
}
