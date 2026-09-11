import * as motion from 'motion/react-client';

import { QuoteIcon } from '@/components/icons/quote';

const AboutGuideProfile = () => {
  return (
    <motion.div
      className="relative flex flex-col gap-5"
      initial={{
        opacity: 0,
        x: 60,
      }}
      style={{ willChange: 'transform, opacity' }}
      transition={{
        duration: 1,
        ease: 'easeOut',
      }}
      viewport={{ once: true }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
    >
      <div className="flex flex-col">
        <p className="text-base font-semibold tracking-tight text-dark-gray">
          Roman Danilov
        </p>
        <p className="text-[13px] tracking-tight text-primary">
          Silicon Valley Guide
        </p>
      </div>
      <p className="text-base font-light italic leading-snug tracking-tight text-dark-gray">
        I build private Silicon Valley tours around what you care about&nbsp;&mdash; Apple, Google, Stanford, the stories behind the campuses. You leave with a local&rsquo;s view of the place, not a script.
      </p>
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-8 right-0 w-11.75 text-[#DFE0ED]"
      >
        <QuoteIcon className="h-auto w-full select-none" />
      </div>
    </motion.div>
  );
};

export { AboutGuideProfile };
