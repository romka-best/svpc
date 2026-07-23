import * as motion from 'motion/react-client';

import { AboutHistoryEntry } from './components/entry';
import { ABOUT_HISTORY } from './constants';

const AboutHistory = () => {
  return (
    <div className="flex flex-col gap-10">
      <motion.h3
        className="text-2xl font-semibold tracking-tight text-dark-gray"
        initial={{
          opacity: 0,
          y: 24,
        }}
        style={{ willChange: 'transform, opacity' }}
        transition={{
          duration: 0.5,
          ease: 'easeOut',
        }}
        viewport={{ once: true }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
      >
        History
      </motion.h3>
      <ol className="flex flex-col">
        {ABOUT_HISTORY.map((entry, index) => (
          <AboutHistoryEntry
            key={`${entry.title}-${index}`}
            entry={entry}
            index={index}
            isLast={index === ABOUT_HISTORY.length - 1}
          />
        ))}
      </ol>
    </div>
  );
};

export { AboutHistory };
