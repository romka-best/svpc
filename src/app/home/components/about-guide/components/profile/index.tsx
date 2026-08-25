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
        I create private Silicon Valley tours around your interests&nbsp;&mdash; taking you inside iconic tech companies, prestigious universities, and the stories behind the breakthroughs. You leave with local insight, lasting inspiration, and a&nbsp;true sense of&nbsp;the world&rsquo;s leading technology hub.
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
