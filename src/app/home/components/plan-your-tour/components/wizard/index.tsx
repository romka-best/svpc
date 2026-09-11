'use client';

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'motion/react';

import { Badge } from '@/components/ui/base/badge';

import { usePlanYourTour } from '../../context';
import { Confirmation } from '../confirmation';
import { PlanYourTourPanel } from '../panel';
import { PLAN_YOUR_TOUR_STEP_COMPONENTS } from '../steps';

const STEP_META_TRANSITION = {
  duration: 0.22,
  ease: [
    0.215,
    0.61,
    0.355,
    1,
  ],
} as const;

const STEP_CONTENT_TRANSITION = {
  duration: 0.35,
  ease: 'easeOut',
} as const;

const PlanYourTourWizard = () => {
  const {
    currentStep,
    stepId,
    submissionStatus,
  } = usePlanYourTour();
  const shouldReduceMotion = useReducedMotion();

  const StepComponent = PLAN_YOUR_TOUR_STEP_COMPONENTS[stepId];
  const isSubmitted = submissionStatus !== 'idle';
  const metaTransition = shouldReduceMotion
    ? { duration: 0 }
    : STEP_META_TRANSITION;
  const contentTransition = shouldReduceMotion
    ? { duration: 0 }
    : STEP_CONTENT_TRANSITION;

  if (isSubmitted) {
    return (
      <PlanYourTourPanel className="max-lg:col-start-1 max-lg:row-start-2 max-lg:h-full max-lg:min-h-0 max-lg:p-5">
        <Confirmation />
      </PlanYourTourPanel>
    );
  }

  return (
    <PlanYourTourPanel className="max-lg:col-start-1 max-lg:row-start-2 max-lg:h-full max-lg:min-h-0 max-lg:p-5">
      <div className="flex h-full min-h-0 w-full flex-1 flex-col gap-6">
        <motion.div
          className="flex min-h-8 shrink-0 items-center"
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
          <AnimatePresence
            initial={false}
            mode="wait"
          >
            <motion.div
              key={stepId}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="flex min-w-0 flex-row flex-wrap items-center gap-x-3 gap-y-2 lg:gap-4"
              exit={shouldReduceMotion
                ? { opacity: 0 }
                : {
                  opacity: 0,
                  y: -8,
                }}
              initial={shouldReduceMotion
                ? false
                : {
                  opacity: 0,
                  y: 8,
                }}
              style={{ willChange: 'transform, opacity' }}
              transition={metaTransition}
            >
              <Badge
                className="h-8 shrink-0 border-light-gray px-3.25 py-1 text-sm font-normal tracking-tight text-light-gray"
                size="sm"
                variant="outline"
              >
                {currentStep.label}
              </Badge>
              <h3 className="min-w-0 text-2xl font-semibold leading-[1.2] tracking-tight text-white">
                {currentStep.title}
              </h3>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={stepId}
            animate={{
              opacity: 1,
              x: 0,
            }}
            className="flex min-h-0 min-w-0 w-full flex-1 flex-col"
            exit={shouldReduceMotion
              ? { opacity: 0 }
              : {
                opacity: 0,
                x: -12,
              }}
            initial={shouldReduceMotion
              ? false
              : {
                opacity: 0,
                x: 16,
              }}
            style={{ willChange: 'transform, opacity' }}
            transition={contentTransition}
          >
            <StepComponent />
          </motion.div>
        </AnimatePresence>
      </div>
    </PlanYourTourPanel>
  );
};

export { PlanYourTourWizard };
