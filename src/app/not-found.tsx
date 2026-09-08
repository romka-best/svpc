import Image from 'next/image';

import { ChevronRight } from 'lucide-react';

import { CtaLink } from '@/components/analytics/cta-link';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/base/button';
import { LinkHref } from '@/constants/links';

const NotFound = () => {
  return (
    <div className="h-dvh flex flex-col">
      <Header />
      <main className="md:w-1/2 m-auto px-4 flex flex-col items-center justify-center gap-5">
        <Image
          priority
          alt="404 Not Found"
          className="w-full h-auto"
          height={0}
          src="/images/404.svg"
          width={0}
        />
        <div className="flex flex-col items-center justify-center gap-2.5">
          <h1 className="md:text-5xl text-3xl font-medium">Oops...</h1>
          <p className="md:text-2xl text-base text-muted-foreground">
            This page doesn&apos;t exist.
          </p>
        </div>
        <Button
          asChild
          size="l"
        >
          <CtaLink
            destination="home"
            href={LinkHref.Home}
            location="not-found"
          >
            Home Page
            <ChevronRight className="size-4" />
          </CtaLink>
        </Button>
      </main>
    </div>
  );
};

export default NotFound;
