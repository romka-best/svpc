'use client';

import {
  AnimatePresence,
  motion,
} from 'motion/react';

import { Badge } from '@/components/ui/base/badge';

import { usePlanYourTour } from '../../context';
import { Confirmation } from '../confirmation';
import { PlanYourTourPanel } from '../panel';
import { PLAN_YOUR_TOUR_STEP_COMPONENTS } from '../steps';

const PlanYourTourWizard = () => {
  const {
    currentStep,
    stepId,
    submissionStatus,
  } = usePlanYourTour();

  const StepComponent = PLAN_YOUR_TOUR_STEP_COMPONENTS[stepId];
  const isSubmitted = submissionStatus !== 'idle';

  if (isSubmitted) {
    return (
      <PlanYourTourPanel className="max-lg:order-2 max-lg:h-auto max-lg:min-h-0 max-lg:flex-1 max-lg:p-5">
        <Confirmation />
      </PlanYourTourPanel>
    );
  }

  return (
    <PlanYourTourPanel className="max-lg:order-2 max-lg:h-auto max-lg:min-h-0 max-lg:flex-1 max-lg:p-5">
      <div className="flex h-full min-h-0 w-full flex-1 flex-col gap-6">
        <motion.div
          className="flex shrink-0 flex-col items-start gap-2 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4"
          initial={{
            opacity: 0,
            y: 16,
          }}
          style={{ willChange: 'transform, opacity' }}
          transition={{
            duration: 0.55,
            ease: 'easeOut',
          }}
          viewport={{ once: true }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
        >
          <Badge
            className="h-8 border-light-gray px-3.25 py-1 text-sm font-normal tracking-tight text-light-gray"
            size="sm"
            variant="outline"
          >
            {currentStep.label}
          </Badge>
          <h3 className="text-2xl font-semibold leading-[1.2] tracking-tight text-white">
            {currentStep.title}
          </h3>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={stepId}
            animate={{
              opacity: 1,
              x: 0,
            }}
            className="flex min-h-0 min-w-0 w-full flex-1 flex-col"
            exit={{
              opacity: 0,
              x: -12,
            }}
            initial={{
              opacity: 0,
              x: 16,
            }}
            style={{ willChange: 'transform, opacity' }}
            transition={{
              duration: 0.35,
              ease: 'easeOut',
            }}
          >
            <StepComponent />
          </motion.div>
        </AnimatePresence>
      </div>
    </PlanYourTourPanel>
  );
};

export { PlanYourTourWizard };
