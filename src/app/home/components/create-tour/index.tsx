'use client';

import { CreateTourSummary } from './components/summary';
import { CreateTourWizard } from './components/wizard';
import { CreateTourProvider } from './context';

const CreateTourSection = () => {
  return (
    <section
      className="px-5 md:px-10"
      id="create-tour"
    >
      <CreateTourProvider>
        <div className="mx-auto flex w-full flex-col gap-5 lg:h-[80vh] lg:flex-row lg:items-stretch">
          <CreateTourSummary />
          <CreateTourWizard />
        </div>
      </CreateTourProvider>
    </section>
  );
};

export { CreateTourSection };
