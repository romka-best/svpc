'use client';

import Image from 'next/image';

import { Check } from 'lucide-react';

import { Button } from '@/components/ui/base/button';
import { cn } from '@/lib/utils';

import type { Attraction } from '../../constants';

interface AttractionCardProps {
  attraction: Attraction;
  disabled?: boolean;
  isSelected: boolean;
  onOpen: (id: string) => void;
  onToggle: (id: string) => void;
}

const AttractionCard = ({
  attraction,
  disabled = false,
  isSelected,
  onOpen,
  onToggle,
}: AttractionCardProps) => {
  return (
    <div
      className={cn(
        'relative flex h-32.5 w-45 shrink-0 flex-col items-start justify-between overflow-hidden rounded-2xl p-4 text-left transition-transform duration-250 ease-out',
        disabled
          ? 'cursor-not-allowed'
          : 'cursor-pointer hover:scale-[1.02] active:scale-[0.98]',
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
      <Image
        fill
        alt=""
        className="object-cover"
        sizes="180px"
        src={attraction.image}
      />
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
        disabled={disabled}
        size="xs"
        type="button"
        variant={isSelected ? 'default' : 'secondary'}
        onClick={(event) => {
          event.stopPropagation();
          onToggle(attraction.id);
        }}
      >
        <Check className="size-4 shrink-0" />
        {isSelected ? 'Selected' : 'Select'}
      </Button>
    </div>
  );
};

export { AttractionCard };
