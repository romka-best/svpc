'use client';

import {
  DayPicker,
  getDefaultClassNames,
} from 'react-day-picker';

import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

import { cn } from '@/lib/utils';

import { CalendarDayButton } from './day-button';
import type { CalendarProps } from './types';

const Calendar = ({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = 'label',
  buttonVariant = 'ghost',
  formatters,
  components,
  ...props
}: CalendarProps) => {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      captionLayout={captionLayout}
      className={cn(
        'group/calendar bg-background p-4 text-white [--cell-size:--spacing(9)]',
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className,
      )}
      classNames={{
        root: cn('w-fit', defaultClassNames.root),
        months: cn(
          'relative flex flex-col gap-4 md:flex-row',
          defaultClassNames.months,
        ),
        month: cn('flex w-full flex-col gap-4', defaultClassNames.month),
        nav: cn(
          'absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1',
          defaultClassNames.nav,
        ),
        button_previous: cn(
          'inline-flex size-(--cell-size) cursor-pointer items-center justify-center rounded-lg p-0 text-white select-none transition-colors',
          buttonVariant === 'ghost' && 'hover:bg-dark-gray hover:text-primary',
          buttonVariant === 'outline' && 'border border-gray hover:border-primary hover:text-primary',
          'aria-disabled:opacity-50',
          defaultClassNames.button_previous,
        ),
        button_next: cn(
          'inline-flex size-(--cell-size) cursor-pointer items-center justify-center rounded-lg p-0 text-white select-none transition-colors',
          buttonVariant === 'ghost' && 'hover:bg-dark-gray hover:text-primary',
          buttonVariant === 'outline' && 'border border-gray hover:border-primary hover:text-primary',
          'aria-disabled:opacity-50',
          defaultClassNames.button_next,
        ),
        month_caption: cn(
          'flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)',
          defaultClassNames.month_caption,
        ),
        dropdowns: cn(
          'flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium',
          defaultClassNames.dropdowns,
        ),
        dropdown_root: cn(
          'relative rounded-md border border-gray has-focus:border-primary has-focus:ring-[3px] has-focus:ring-primary/40',
          defaultClassNames.dropdown_root,
        ),
        dropdown: cn(
          'absolute inset-0 bg-background opacity-0',
          defaultClassNames.dropdown,
        ),
        caption_label: cn(
          'font-medium tracking-tight text-white select-none',
          captionLayout === 'label'
            ? 'text-base'
            : 'flex h-8 items-center gap-1 rounded-md pr-1 pl-2 text-sm [&>svg]:size-3.5 [&>svg]:text-light-gray',
          defaultClassNames.caption_label,
        ),
        month_grid: cn('w-full border-collapse', defaultClassNames.month_grid),
        weekdays: cn('flex', defaultClassNames.weekdays),
        weekday: cn(
          'flex-1 rounded-md text-xs font-normal tracking-tight text-light-gray select-none',
          defaultClassNames.weekday,
        ),
        week: cn('mt-2 flex w-full', defaultClassNames.week),
        week_number_header: cn(
          'w-(--cell-size) select-none',
          defaultClassNames.week_number_header,
        ),
        week_number: cn(
          'text-[0.8rem] text-light-gray select-none',
          defaultClassNames.week_number,
        ),
        day: cn(
          'group/day relative aspect-square h-full w-full p-0 text-center select-none',
          '[&:last-child[data-selected=true]_button]:rounded-r-lg',
          props.showWeekNumber
            ? '[&:nth-child(2)[data-selected=true]_button]:rounded-l-lg'
            : '[&:first-child[data-selected=true]_button]:rounded-l-lg',
          defaultClassNames.day,
        ),
        range_start: cn(
          'rounded-l-lg bg-primary/20',
          defaultClassNames.range_start,
        ),
        range_middle: cn('rounded-none', defaultClassNames.range_middle),
        range_end: cn(
          'rounded-r-lg bg-primary/20',
          defaultClassNames.range_end,
        ),
        today: cn(
          'rounded-lg text-white data-[selected=true]:rounded-none [&_button]:ring-1 [&_button]:ring-primary/60',
          defaultClassNames.today,
        ),
        outside: cn(
          'text-gray aria-selected:text-light-gray [&_button]:text-gray',
          defaultClassNames.outside,
        ),
        disabled: cn(
          'text-gray/50 opacity-50',
          defaultClassNames.disabled,
        ),
        hidden: cn('invisible', defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({
          className: rootClassName,
          rootRef,
          ...rootProps
        }) => {
          return (
            <div
              ref={rootRef}
              className={cn(rootClassName)}
              data-slot="calendar"
              {...rootProps}
            />
          );
        },
        Chevron: ({
          className: chevronClassName,
          orientation,
          ...chevronProps
        }) => {
          if (orientation === 'left') {
            return (
              <ChevronLeft
                className={cn('size-5', chevronClassName)}
                {...chevronProps}
              />
            );
          }

          if (orientation === 'right') {
            return (
              <ChevronRight
                className={cn('size-5', chevronClassName)}
                {...chevronProps}
              />
            );
          }

          return (
            <ChevronDown
              className={cn('size-4', chevronClassName)}
              {...chevronProps}
            />
          );
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({
          children,
          ...weekNumberProps
        }) => {
          return (
            <td {...weekNumberProps}>
              <div className="flex size-(--cell-size) items-center justify-center text-center">
                {children}
              </div>
            </td>
          );
        },
        ...components,
      }}
      formatters={{
        formatMonthDropdown: (date) => {
          return date.toLocaleString('default', { month: 'short' });
        },
        ...formatters,
      }}
      showOutsideDays={showOutsideDays}
      {...props}
    />
  );
};

export { Calendar };
export { CalendarDayButton } from './day-button';
export type { CalendarProps } from './types';
