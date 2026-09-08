import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

import { LegalDocumentSectionBlock } from '../section';
import type { LegalDocumentSection } from '../types';

interface LegalPageProps {
  sections: LegalDocumentSection[];
  title: string;
  updatedOn: string;
}

const LegalPage = ({
  sections,
  title,
  updatedOn,
}: LegalPageProps) => {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex flex-1 flex-col gap-10 px-5 pt-10 pb-20 sm:px-10 xl:px-[calc(8.33%+35px)]">
        <div className="flex w-full max-w-167.5 flex-col gap-10">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-medium leading-[1.2] tracking-[-0.03em] text-white md:text-5xl">
              {title}
            </h1>
            <p className="text-sm font-normal leading-normal tracking-[-0.03em] text-light-gray">
              Last updated
              {' '}
              {updatedOn}
            </p>
          </div>
          {sections.map((section) => {
            return (
              <LegalDocumentSectionBlock
                key={section.title}
                section={section}
              />
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export { LegalPage };
