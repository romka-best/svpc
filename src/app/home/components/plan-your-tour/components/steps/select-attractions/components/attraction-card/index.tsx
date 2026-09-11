'use client';

import Image from 'next/image';

import { Check } from 'lucide-react';

import { Button } from '@/components/ui/base/button';
import { cn } from '@/lib/utils';

import type { Attraction } from '../../constants';
import { AttractionPlaceholder } from '../attraction-placeholder';

interface AttractionCardProps {
  attraction: Attraction;
  disabled?: boolean;
  isSelected: boolean;
  onOpen: (id: string) => void;
  onToggle: (id: string) => void;
  selectDisabled?: boolean;
}

const AttractionCard = ({
  attraction,
  disabled = false,
  isSelected,
  onOpen,
  onToggle,
  selectDisabled = false,
}: AttractionCardProps) => {
  return (
    <div
      className={cn(
        'relative flex h-32.5 w-full min-w-0 flex-col items-start justify-between overflow-hidden rounded-2xl p-4 text-left',
        disabled
          ? 'cursor-not-allowed'
          : 'cursor-pointer transition-transform duration-150 ease-out [@media(hover:hover)]:hover:scale-[1.02] active:scale-[0.98]',
      )}
      role={disabled ? undefined : 'button'}
      tabIndex={disabled ? -1 : 0}
      onClick={() => {
        if (disabled) {
          return;
        }

        onOpen(attraction.id);
      }}
      onKeyDown={(event) => {
        if (disabled) {
          return;
        }

        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onOpen(attraction.id);
        }
      }}
    >
      {attraction.image
        ? (
          <Image
            aria-hidden
            fill
            alt={attraction.title}
            className="object-cover"
            sizes="(max-width: 640px) 50vw, 220px"
            src={attraction.image}
          />
        )
        : <AttractionPlaceholder />}
      <div
        aria-hidden
        className={cn(
          'absolute inset-0 bg-linear-to-b from-transparent',
          isSelected ? 'to-primary' : 'to-[#0c0c12]',
        )}
      />

      <p className="relative z-1 line-clamp-2 text-[13px] leading-snug font-medium tracking-tight text-white">
        {attraction.title}
      </p>

      <Button
        aria-pressed={isSelected}
        className={cn(
          'relative z-1 h-5.5 w-full gap-1 px-2 text-xs tracking-tight',
          !isSelected && 'bg-background hover:bg-white hover:text-background',
        )}
        disabled={disabled || selectDisabled}
        size="xs"
        type="button"
        variant={isSelected ? 'default' : 'secondary'}
        onClick={(event) => {
          event.stopPropagation();
          onToggle(attraction.id);
        }}
      >
        <Check
          aria-hidden
          className="size-4 shrink-0"
        />
        {isSelected ? 'Selected' : 'Select'}
      </Button>
    </div>
  );
};

export { AttractionCard };
