'use client';

import { PlanYourTourSummary } from './components/summary';
import { PlanYourTourWizard } from './components/wizard';
import { PlanYourTourProvider } from './context';

const PlanYourTourSection = () => {
  return (
    <section
      className="flex section-screen flex-col px-5 md:px-10 lg:h-(--section-screen-height)"
      id="plan-your-tour"
    >
      <PlanYourTourProvider>
        <div className="mx-auto flex w-full flex-col gap-5 lg:min-h-0 lg:flex-1 lg:flex-row lg:items-stretch">
          <PlanYourTourSummary />
          <PlanYourTourWizard />
        </div>
      </PlanYourTourProvider>
    </section>
  );
};

export { PlanYourTourSection };
