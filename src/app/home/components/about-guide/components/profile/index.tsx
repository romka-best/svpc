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
        My mission is to provide an unparalleled experience of Silicon Valley, where every tour offers a deep dive into the heart of innovation. I aim to connect you with the pioneers of technology and the stories behind the breakthroughs, ensuring you leave with unforgettable memories and insights that inspire.
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
