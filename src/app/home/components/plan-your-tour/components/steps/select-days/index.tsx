'use client';

import {
  useEffect,
  useRef,
  useState,
} from 'react';
import type { DateRange } from 'react-day-picker';

import { Calendar as CalendarIcon } from 'lucide-react';
import {
  AnimatePresence,
  motion,
} from 'motion/react';

import { Button } from '@/components/ui/base/button';
import { Calendar } from '@/components/ui/base/calendar';
import { cn } from '@/lib/utils';

import { usePlanYourTour } from '../../../context';

import { SelectDaysSummary } from './components/summary';
import {
  formatRangeLabel,
  getFirstAvailableTourDate,
  getLastSelectableTourEndDate,
  getTourDayCount,
  isTourDateRangeAllowed,
  MAX_TOUR_DAYS,
  parseDateKey,
  toDateKey,
} from './utils';

const SelectDaysStep = () => {
  const {
    answers,
    goNext,
    patchSelectDays,
  } = usePlanYourTour();

  const {
    endDate,
    startDate,
  } = answers['select-days'];

  const hasAllowedRange = isTourDateRangeAllowed(startDate, endDate);
  const firstAvailableDate = getFirstAvailableTourDate();
  const isPickingEnd = Boolean(startDate && (!endDate || startDate === endDate));
  const disabled = isPickingEnd && startDate
    ? [
      { before: firstAvailableDate },
      { after: getLastSelectableTourEndDate(parseDateKey(startDate)) },
    ]
    : { before: firstAvailableDate };
  const containerRef = useRef<HTMLDivElement>(null);
  const [
    isOpen,
    setIsOpen,
  ] = useState(false);

  const selected: DateRange | undefined = startDate
    ? {
      from: parseDateKey(startDate),
      to: endDate ? parseDateKey(endDate) : undefined,
    }
    : undefined;

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target;

      if (!(target instanceof Node)) {
        return;
      }

      if (!containerRef.current?.contains(target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown, true);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown, true);
    };
  }, [
    isOpen,
  ]);

  const handleSelect = (range: DateRange | undefined) => {
    const from = range?.from;

    if (!from) {
      patchSelectDays({
        endDate: null,
        startDate: null,
      });
      return;
    }

    const nextStartDate = toDateKey(from);
    const nextEndDate = range?.to ? toDateKey(range.to) : null;

    if (nextEndDate && getTourDayCount(nextStartDate, nextEndDate) > MAX_TOUR_DAYS) {
      patchSelectDays({
        endDate: toDateKey(getLastSelectableTourEndDate(from)),
        startDate: nextStartDate,
      });
      return;
    }

    patchSelectDays({
      endDate: nextEndDate,
      startDate: nextStartDate,
    });
  };

  return (
    <div className="flex min-h-0 w-full flex-1 flex-col justify-between gap-10">
      <div className="flex min-h-0 w-full flex-1 flex-col overflow-y-auto p-2 -m-2">
        <div
          ref={containerRef}
          className={cn(
            'relative',
            hasAllowedRange ? 'w-full lg:w-fit' : 'w-fit',
          )}
        >
          <Button
            aria-expanded={isOpen}
            className={cn(
              'h-12.5 shrink-0 gap-2 px-5 py-2.5 text-base tracking-tight',
              hasAllowedRange
                && 'w-full justify-between max-lg:whitespace-normal lg:w-auto lg:justify-center',
            )}
            size="l"
            type="button"
            variant="outline"
            onClick={() => {
              setIsOpen((open) => {
                return !open;
              });
            }}
          >
            <span className={cn(hasAllowedRange && 'min-w-0 flex-1 text-left lg:flex-none')}>
              {hasAllowedRange && startDate && endDate
                ? formatRangeLabel(startDate, endDate)
                : 'Choose Dates'}
            </span>
            <CalendarIcon className="size-6" />
          </Button>

          <AnimatePresence initial={false}>
            {isOpen
              ? (
                <motion.div
                  key="date-range-calendar"
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="relative z-50 mt-3"
                  exit={{
                    opacity: 0,
                    y: -8,
                  }}
                  initial={{
                    opacity: 0,
                    y: -8,
                  }}
                  style={{ willChange: 'transform, opacity' }}
                  transition={{
                    duration: 0.25,
                    ease: 'easeOut',
                  }}
                >
                  <Calendar
                    required
                    resetOnSelect
                    className="rounded-2xl border border-gray bg-background shadow-[0_16px_40px_rgba(0,0,0,0.55)]"
                    defaultMonth={startDate ? parseDateKey(startDate) : firstAvailableDate}
                    disabled={disabled}
                    mode="range"
                    selected={selected}
                    startMonth={firstAvailableDate}
                    onSelect={handleSelect}
                  />
                </motion.div>
              )
              : null}
          </AnimatePresence>
        </div>
      </div>

      {hasAllowedRange && startDate && endDate
        ? (
          <div className="shrink-0">
            <SelectDaysSummary
              endDate={endDate}
              startDate={startDate}
              onNext={() => {
                goNext();
              }}
            />
          </div>
        )
        : null}
    </div>
  );
};

export { SelectDaysStep };
