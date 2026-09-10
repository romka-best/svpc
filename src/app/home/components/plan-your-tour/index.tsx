'use client';

import { PlanYourTourSummary } from './components/summary';
import { PlanYourTourWizard } from './components/wizard';
import { PlanYourTourProvider } from './context';

const PlanYourTourSection = () => {
  return (
    <section
      className="flex h-[calc(100svh-var(--header-height)-60px-60px)] min-h-[calc(100svh-var(--header-height)-60px-60px)] scroll-mt-[calc(var(--header-height)+60px)] flex-col px-5 md:px-10 lg:h-(--section-screen-height) lg:min-h-(--section-screen-height) lg:scroll-mt-[calc(var(--header-height)+var(--section-gutter))]"
      id="plan-your-tour"
    >
      <PlanYourTourProvider>
        <div className="relative mx-auto flex h-full min-h-0 w-full flex-col gap-3 lg:flex-1 lg:flex-row lg:items-stretch lg:gap-5">
          <PlanYourTourSummary />
          <PlanYourTourWizard />
        </div>
      </PlanYourTourProvider>
    </section>
  );
};

export { PlanYourTourSection };
