'use client';

import * as motion from 'motion/react-client';

import { CreateTourPanel } from '../panel';

import { CreateTourPrice } from './price';
import { CreateTourProgress } from './progress';

const CreateTourSummary = () => {
  return (
    <CreateTourPanel className="justify-between gap-10 max-lg:min-h-150">
      <motion.div
        className="flex w-full flex-col gap-6"
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
        <h2 className="text-3xl font-medium leading-snug tracking-tight text-white md:text-4xl xl:text-5xl">
          Create Your
          {' '}
          <span className="text-primary">
            Tour
          </span>
        </h2>
        <CreateTourProgress />
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
        <CreateTourPrice />
      </motion.div>
    </CreateTourPanel>
  );
};

export { CreateTourSummary };
