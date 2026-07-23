import { Star } from 'lucide-react';
import * as motion from 'motion/react-client';

import { cn } from '@/lib/utils';

import type { HistoryEntry } from '../../constants';

interface Props {
  entry: HistoryEntry;
  index: number;
  isLast: boolean;
}

const AboutHistoryEntry = ({
  entry,
  index,
  isLast,
}: Props) => {
  return (
    <li className="flex gap-6">
      <div className="flex flex-col items-center self-stretch">
        <motion.span
          className="size-2.75 shrink-0 rounded-full border border-primary bg-white-gray"
          initial={{ scale: 0 }}
          style={{ willChange: 'transform' }}
          transition={{
            delay: index * 0.1,
            duration: 0.3,
            ease: 'backOut',
          }}
          viewport={{ once: true }}
          whileInView={{ scale: 1 }}
        />
        {!isLast && (
          <motion.span
            className="w-px flex-1 origin-top bg-primary"
            initial={{ scaleY: 0 }}
            style={{ willChange: 'transform' }}
            transition={{
              delay: index * 0.1 + 0.15,
              duration: 0.5,
              ease: 'easeOut',
            }}
            viewport={{ once: true }}
            whileInView={{ scaleY: 1 }}
          />
        )}
      </div>
      <motion.div
        className={cn('flex flex-1 flex-col gap-4', !isLast && 'pb-10')}
        initial={{
          opacity: 0,
          y: 24,
        }}
        style={{ willChange: 'transform, opacity' }}
        transition={{
          delay: index * 0.1,
          duration: 0.5,
          ease: 'easeOut',
        }}
        viewport={{ once: true }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
      >
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-2">
            {entry.highlighted && (
              <Star className="size-4 shrink-0 fill-primary text-primary" />
            )}
            <h4 className="text-base font-semibold text-dark-gray">
              {entry.title}
            </h4>
          </div>
          <p className="text-[13px] text-primary">
            {entry.date}
          </p>
        </div>
        <p className="text-sm text-gray">
          {entry.description}
        </p>
      </motion.div>
    </li>
  );
};

export { AboutHistoryEntry };
