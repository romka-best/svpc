import Image from 'next/image';

import {
  Building2,
  CalendarDays,
  GraduationCap,
  Landmark,
  Library,
  type LucideIcon,
  MapPin,
  UtensilsCrossed,
} from 'lucide-react';

import { cn } from '@/lib/utils';

import type { ItineraryStopCategory } from '../../constants';

import type { ItineraryCardProps } from './types';

/** Icons and colors mirror the categories in the Plan Your Tour step. */
const CATEGORY_META: Record<ItineraryStopCategory, {
  Icon: LucideIcon;
  iconClassName: string;
  label: string;
}> = {
  dining: {
    Icon: UtensilsCrossed,
    iconClassName: 'text-[#fbbf24]',
    label: 'Lunch',
  },
  event: {
    Icon: CalendarDays,
    iconClassName: 'text-[#7c3aed]',
    label: 'Event',
  },
  landmark: {
    Icon: Landmark,
    iconClassName: 'text-[#b50202]',
    label: 'Landmark',
  },
  museum: {
    Icon: Library,
    iconClassName: 'text-[#0d9488]',
    label: 'Museum',
  },
  office: {
    Icon: Building2,
    iconClassName: 'text-[#0254b5]',
    label: 'Office',
  },
  university: {
    Icon: GraduationCap,
    iconClassName: 'text-[#e67e22]',
    label: 'University',
  },
};

const ItineraryCard = ({
  category,
  duration,
  imageSrc,
  location,
  time,
  title,
}: ItineraryCardProps) => {
  const {
    Icon,
    iconClassName,
    label,
  } = CATEGORY_META[category];

  return (
    <article className="relative flex h-37.5 w-full shrink-0 flex-col items-start justify-end gap-2.5 overflow-hidden rounded-2xl p-3.5 ring-1 ring-white/10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <Image
          fill
          alt={title}
          className="object-cover"
          sizes="265px"
          src={imageSrc}
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#05070c] via-[#05070c]/65 via-45% to-transparent" />
      </div>

      <div className="absolute top-2.5 right-2.5 z-10 flex h-6 items-center gap-1 rounded-full bg-black/45 px-2 ring-1 ring-white/15 backdrop-blur-md">
        <Icon
          aria-hidden
          className={cn('size-3.5', iconClassName)}
          strokeWidth={2}
        />
        <span className="text-[11px] font-medium tracking-tight text-white">
          {label}
        </span>
      </div>

      <div className="relative z-10 flex w-full flex-col gap-1">
        <div className="flex w-full items-start justify-between gap-2">
          <p className="line-clamp-2 text-[13px] leading-snug font-medium tracking-tight text-white">
            {title}
          </p>
          <span className="shrink-0 rounded-full bg-white/12 px-2 py-0.5 text-[11px] tracking-tight text-white tabular-nums ring-1 ring-white/10 backdrop-blur-md">
            {time}
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] tracking-tight text-white/65">
          <MapPin
            aria-hidden
            className="size-3.5 shrink-0"
            strokeWidth={1.75}
          />
          <span className="truncate">
            {location}
          </span>
          <span
            aria-hidden
            className="size-0.75 shrink-0 rounded-full bg-white/40"
          />
          <span className="shrink-0">
            {duration}
          </span>
        </div>
      </div>
    </article>
  );
};

export { ItineraryCard };
