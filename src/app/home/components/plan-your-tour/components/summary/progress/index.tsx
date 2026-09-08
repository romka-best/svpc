'use client';

import * as motion from 'motion/react-client';

import { usePlanYourTour } from '../../../context';

const PlanYourTourProgress = () => {
  const { progress } = usePlanYourTour();

  return (
    <div className="flex w-full flex-col gap-2 lg:gap-4">
      <div className="flex w-full items-start justify-between gap-4 px-2 text-sm font-medium tracking-tight lg:px-0 lg:text-base">
        <p className="text-background lg:text-white">
          Progress of planning your tour
        </p>
        <p className="shrink-0 text-primary tabular-nums">
          {`${progress}%`}
        </p>
      </div>
      <div className="h-1.25 w-full overflow-hidden rounded-[14px] bg-white-gray lg:bg-dark-gray">
        <motion.div
          aria-hidden
          animate={{ width: `${progress}%` }}
          className="h-full rounded-[14px] bg-primary"
          initial={false}
          transition={{
            duration: 0.45,
            ease: 'easeOut',
          }}
        />
      </div>
    </div>
  );
};

export { PlanYourTourProgress };
