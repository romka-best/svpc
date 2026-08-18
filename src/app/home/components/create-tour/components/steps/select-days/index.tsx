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

import { useCreateTour } from '../../../context';

import { SelectDaysSummary } from './components/summary';
import {
  formatRangeLabel,
  parseDateKey,
  startOfDay,
  toDateKey,
} from './utils';

const SelectDaysStep = () => {
  const {
    answers,
    goNext,
    patchSelectDays,
  } = useCreateTour();

  const {
    endDate,
    startDate,
  } = answers['select-days'];

  const hasRange = Boolean(startDate && endDate);
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
    patchSelectDays({
      endDate: range?.to ? toDateKey(range.to) : null,
      startDate: range?.from ? toDateKey(range.from) : null,
    });
  };

  return (
    <div className="flex min-h-0 w-full flex-1 flex-col justify-between gap-10">
      <div className="flex min-h-0 w-full flex-1 flex-col items-start overflow-y-auto p-2 -m-2">
        <div
          ref={containerRef}
          className="relative w-fit"
        >
          <Button
            aria-expanded={isOpen}
            className="h-12.5 shrink-0 gap-2 px-5 py-2.5 text-base tracking-tight"
            size="l"
            type="button"
            variant="outline"
            onClick={() => {
              setIsOpen((open) => {
                return !open;
              });
            }}
          >
            {hasRange && startDate && endDate
              ? formatRangeLabel(startDate, endDate)
              : 'Select dates'}
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
                    className="rounded-2xl border border-gray bg-background shadow-[0_16px_40px_rgba(0,0,0,0.55)]"
                    defaultMonth={startDate ? parseDateKey(startDate) : undefined}
                    disabled={{ before: startOfDay(new Date()) }}
                    mode="range"
                    selected={selected}
                    onSelect={handleSelect}
                  />
                </motion.div>
              )
              : null}
          </AnimatePresence>
        </div>
      </div>

      {hasRange && startDate && endDate
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
