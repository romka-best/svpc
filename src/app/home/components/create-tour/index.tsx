'use client';

import { CreateTourSummary } from './components/summary';
import { CreateTourWizard } from './components/wizard';
import { CreateTourProvider } from './context';

const CreateTourSection = () => {
  return (
    <section
      className="flex section-screen flex-col px-5 md:px-10 lg:h-[calc(100dvh-var(--header-height))]"
      id="create-tour"
    >
      <CreateTourProvider>
        <div className="mx-auto flex w-full flex-col gap-5 lg:min-h-0 lg:flex-1 lg:flex-row lg:items-stretch">
          <CreateTourSummary />
          <CreateTourWizard />
        </div>
      </CreateTourProvider>
    </section>
  );
};

export { CreateTourSection };
