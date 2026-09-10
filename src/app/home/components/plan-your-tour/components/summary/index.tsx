'use client';

import * as motion from 'motion/react-client';

import { PlanYourTourPanel } from '../panel';

import { PlanYourTourHeading } from './heading';
import { PlanYourTourPrice } from './price';
import { PlanYourTourProgress } from './progress';

const PlanYourTourSummary = () => {
  return (
    <>
      <PlanYourTourHeading className="max-lg:col-start-1 max-lg:row-start-1 shrink-0 lg:hidden" />

      <PlanYourTourPanel className="max-lg:col-start-1 max-lg:row-start-3 max-lg:h-auto max-lg:flex-none max-lg:gap-2 max-lg:bg-white max-lg:p-4 lg:justify-between lg:gap-10">
        <motion.div
          className="flex w-full flex-col gap-2 lg:gap-6"
          initial={{
            opacity: 0,
            y: 20,
          }}
          style={{ willChange: 'transform, opacity' }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
          }}
          viewport={{ once: true }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
        >
          <PlanYourTourHeading className="hidden lg:block" />
          <PlanYourTourProgress />
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          style={{ willChange: 'transform, opacity' }}
          transition={{
            delay: 0.1,
            duration: 0.6,
            ease: 'easeOut',
          }}
          viewport={{ once: true }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
        >
          <PlanYourTourPrice />
        </motion.div>
      </PlanYourTourPanel>
    </>
  );
};

export { PlanYourTourSummary };
