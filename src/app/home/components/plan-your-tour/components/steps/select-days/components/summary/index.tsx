'use client';

import { ChevronRight } from 'lucide-react';
import * as motion from 'motion/react-client';

import { StepNavButton } from '../../../../step-nav';
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
      className="flex w-full shrink-0 flex-col items-end gap-4 lg:gap-6"
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
          <span className="text-[64px] leading-[1.2] md:text-6xl">
            {dayCount}
            {' '}
          </span>
          <span className="text-xl text-light-gray">
            {dayCount === 1 ? 'day' : 'days'}
          </span>
        </p>
        <p className="hidden text-xl tracking-tight text-light-gray lg:block">
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

      <StepNavButton
        className="text-white-gray"
        type="button"
        onClick={onNext}
      >
        Next
        <ChevronRight className="size-6" />
      </StepNavButton>
    </motion.div>
  );
};

export { SelectDaysSummary };
