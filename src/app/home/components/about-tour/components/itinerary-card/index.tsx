import Image from 'next/image';

import {
  Building2, MapPin, 
} from 'lucide-react';

import type { ItineraryCardProps } from './types';

const ItineraryCard = ({
  imageSrc,
  location,
  time,
  title,
}: ItineraryCardProps) => {
  return (
    <article className="relative flex h-37.5 w-full shrink-0 flex-col items-start justify-end gap-2.5 overflow-hidden rounded-2xl p-4">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl"
      >
        <Image
          fill
          unoptimized
          alt=""
          className="object-cover"
          sizes="265px"
          src={imageSrc}
        />
        <div className="absolute inset-0 rounded-2xl bg-linear-to-b from-transparent to-[#0c0c12]" />
      </div>

      <div className="absolute top-2 right-2 z-10 flex h-6 items-center gap-1 rounded-full bg-[#0254b5] px-2 py-1">
        <Building2
          aria-hidden
          className="size-4 text-white"
          strokeWidth={1.75}
        />
        <span className="text-sm tracking-tight text-white">
          Offices
        </span>
      </div>

      <div className="relative z-10 flex w-full flex-col gap-1">
        <div className="flex w-full items-center gap-2">
          <p className="text-[13px] font-medium leading-snug tracking-tight text-white">
            {title}
          </p>
          <span className="rounded-full bg-background px-2 py-0.5 text-xs tracking-tight text-white">
            {time}
          </span>
        </div>
        <div className="flex items-center gap-0.5">
          <MapPin
            aria-hidden
            className="size-4 shrink-0 text-light-gray opacity-70"
            strokeWidth={1.75}
          />
          <p className="text-xs leading-snug tracking-tight text-light-gray">
            {location}
          </p>
        </div>
      </div>
    </article>
  );
};

export { ItineraryCard };
