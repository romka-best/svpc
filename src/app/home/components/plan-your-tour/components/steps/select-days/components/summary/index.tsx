'use client';

import { ChevronRight } from 'lucide-react';
import * as motion from 'motion/react-client';

import { Button } from '@/components/ui/base/button';

import {
  formatLongDate,
  getTourDayCount,
} from '../../utils';

interface SelectDaysSummaryProps {
  endDate: string;
  onNext: () => void;
  startDate: string;
}

const SelectDaysSummary = ({
  endDate,
  onNext,
  startDate,
}: SelectDaysSummaryProps) => {
  const dayCount = getTourDayCount(startDate, endDate);

  return (
    <motion.div
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="flex w-full flex-col items-end gap-6"
      initial={{
        opacity: 0,
        y: 16,
      }}
      style={{ willChange: 'transform, opacity' }}
      transition={{
        duration: 0.4,
        ease: 'easeOut',
      }}
    >
      <div className="flex w-full flex-col items-start gap-2">
        <p className="font-medium tracking-tight text-white">
          <span className="text-5xl leading-tight md:text-6xl">
            {dayCount}
            {' '}
          </span>
          <span className="text-xl text-light-gray">
            {dayCount === 1 ? 'day' : 'days'}
          </span>
        </p>
        <p className="text-lg tracking-tight text-light-gray md:text-xl">
          {dayCount === 1
            ? (
              <span className="text-white">
                {formatLongDate(startDate)}
              </span>
            )
            : (
              <>
                From
                {' '}
                <span className="text-white">
                  {formatLongDate(startDate)}
                </span>
                {' '}
                to
                {' '}
                <span className="text-white">
                  {formatLongDate(endDate)}
                </span>
              </>
            )}
        </p>
      </div>

      <Button
        className="h-12.5 gap-2 px-5 py-2.5 text-base tracking-tight text-white-gray"
        size="l"
        type="button"
        onClick={onNext}
      >
        Next
        <ChevronRight className="size-6" />
      </Button>
    </motion.div>
  );
};

export { SelectDaysSummary };
