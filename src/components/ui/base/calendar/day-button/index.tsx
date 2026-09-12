'use client';

import {
  type ComponentProps,
  useEffect,
  useRef,
} from 'react';
import {
  type DayButton,
  getDefaultClassNames,
} from 'react-day-picker';

import { cn } from '@/lib/utils';

const CalendarDayButton = ({
  className,
  day,
  modifiers,
  ...props
}: ComponentProps<typeof DayButton>) => {
  const defaultClassNames = getDefaultClassNames();
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (modifiers.focused) {
      ref.current?.focus();
    }
  }, [
    modifiers.focused,
  ]);

  return (
    <button
      ref={ref}
      className={cn(
        defaultClassNames.day,
        'flex aspect-square size-auto w-full min-w-(--cell-size) cursor-pointer items-center justify-center rounded-lg text-sm leading-none font-normal text-white outline-none transition-colors select-none',
        'enabled:hover:bg-dark-gray',
        'group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-primary/40',
        'data-[selected-single=true]:bg-primary data-[selected-single=true]:text-white data-[selected-single=true]:hover:bg-primary',
        'data-[range-start=true]:rounded-l-lg data-[range-start=true]:bg-primary data-[range-start=true]:text-white data-[range-start=true]:hover:bg-primary',
        'data-[range-end=true]:rounded-r-lg data-[range-end=true]:bg-primary data-[range-end=true]:text-white data-[range-end=true]:hover:bg-primary',
        'data-[range-middle=true]:rounded-none data-[range-middle=true]:bg-primary/20 data-[range-middle=true]:text-white data-[range-middle=true]:hover:bg-primary/30',
        'disabled:cursor-not-allowed disabled:text-gray/50',
        className,
      )}
      data-day={day.date.toLocaleDateString()}
      data-range-end={modifiers.range_end || undefined}
      data-range-middle={modifiers.range_middle || undefined}
      data-range-start={modifiers.range_start || undefined}
      data-selected-single={modifiers.selected
        && !modifiers.range_start
        && !modifiers.range_end
        && !modifiers.range_middle
        ? true
        : undefined}
      type="button"
      {...props}
    />
  );
};

export { CalendarDayButton };
