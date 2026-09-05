import type { Metadata } from 'next';
import Link from 'next/link';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/base/button';

import { SITEMAP_LINKS } from './constants';

export const metadata: Metadata = {
  title: 'Sitemap',
  description:
    'Find every section of Silicon Valley Private Circle — the tour, destinations, the guide, reviews, FAQ, and more.',
};

const SitemapPage = () => {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex flex-1 flex-col gap-8 px-5 pt-10 pb-20 sm:px-10 xl:px-[calc(8.33%+35px)]">
        <h1 className="text-3xl font-medium leading-[1.2] tracking-[-0.03em] text-white md:text-5xl">
          Sitemap
        </h1>
        <nav aria-label="Sitemap">
          <ul className="grid w-full grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-2 xl:w-253.75 xl:grid-cols-3">
            {SITEMAP_LINKS.map((link) => (
              <li key={link.href}>
                <Button
                  asChild
                  className="justify-start font-medium leading-[1.2] tracking-[-0.03em] underline"
                  size="l"
                  variant="link"
                >
                  <Link href={link.href}>
                    {link.label}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </main>
      <Footer />
    </div>
  );
};

export default SitemapPage;
