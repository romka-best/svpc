'use client';

import * as motion from 'motion/react-client';

import { useCreateTour } from '../../../context';

const CreateTourProgress = () => {
  const { progress } = useCreateTour();

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex w-full items-start justify-between gap-4 text-base font-medium tracking-tight">
        <p className="text-white">
          Progress of creating your tour
        </p>
        <p className="shrink-0 text-primary">
          {`${progress}%`}
        </p>
      </div>
      <div className="h-1.25 w-full overflow-hidden rounded-[14px] bg-dark-gray">
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

export { CreateTourProgress };
