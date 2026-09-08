'use client';

import Image from 'next/image';

import {
  Check,
  MapPin,
  Star,
} from 'lucide-react';

import { Button } from '@/components/ui/base/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/base/dialog';
import { cn } from '@/lib/utils';

import {
  ATTRACTIONS_BY_ID,
  getAttractionDetails,
  type Attraction,
} from '../../constants';
import { AttractionPlaceholder } from '../attraction-placeholder';

interface AttractionDetailDialogProps {
  attractionId: string | null;
  disabled?: boolean;
  isSelected: boolean;
  onOpenChange: (open: boolean) => void;
  onToggle: (id: string) => void;
  open: boolean;
  selectDisabled?: boolean;
}

const STAR_COUNT = 5;

interface AttractionRatingStarsProps {
  rating: number;
}

const AttractionRatingStars = ({ rating }: AttractionRatingStarsProps) => {
  const clampedRating = Math.min(STAR_COUNT, Math.max(0, rating));

  return (
    <div
      aria-label={`${clampedRating} out of ${STAR_COUNT} stars`}
      className="flex shrink-0 items-center gap-2"
      role="img"
    >
      <div
        aria-hidden
        className="flex items-center gap-0.5"
      >
        {Array.from({ length: STAR_COUNT }, (_, index) => {
          const fill = Math.min(1, Math.max(0, clampedRating - index));

          return (
            <span
              key={index}
              className="relative inline-flex size-5 shrink-0 md:size-6"
            >
              <Star className="size-5 fill-light-gray text-light-gray md:size-6" />
              {fill > 0
                ? (
                  <span
                    className="absolute inset-y-0 left-0 overflow-hidden"
                    style={{ width: `${fill * 100}%` }}
                  >
                    <Star className="size-5 max-w-none fill-primary text-primary md:size-6" />
                  </span>
                )
                : null}
            </span>
          );
        })}
      </div>
      <span className="text-xl font-medium tracking-tight text-white-gray md:text-2xl">
        {clampedRating}
      </span>
    </div>
  );
};

interface AttractionDetailContentProps {
  attraction: Attraction;
  details: ReturnType<typeof getAttractionDetails>;
  disabled?: boolean;
  isSelected: boolean;
  onToggle: (id: string) => void;
  selectDisabled?: boolean;
}

const AttractionDetailContent = ({
  attraction,
  details,
  disabled = false,
  isSelected,
  onToggle,
  selectDisabled = false,
}: AttractionDetailContentProps) => {
  const imageSrc = attraction.image ?? details.gallery[0];

  return (
    <DialogContent
      className="flex h-[min(calc(100dvh-2rem),56rem)] max-h-[calc(100dvh-2rem)] flex-col gap-4 overflow-hidden border-none bg-dark-gray p-4 md:p-5 lg:p-6"
      size="xl"
    >
      <DialogDescription className="sr-only">
        {attraction.title}
      </DialogDescription>

      <div className="flex min-h-0 flex-1 flex-col gap-4 p-2">
        <div className="flex shrink-0 flex-col gap-4 pr-8 md:flex-row md:items-center md:justify-between md:gap-6 md:pr-12">
          <div className="flex min-w-0 flex-col gap-2">
            <DialogTitle className="text-[28px] leading-[1.2] font-medium tracking-tight text-white md:text-[40px]">
              {attraction.title}
            </DialogTitle>
            <div className="flex items-center gap-0.5 text-sm tracking-tight text-white">
              <MapPin className="size-4 shrink-0 text-light-gray" />
              <span>{details.location}</span>
            </div>
          </div>

          {typeof details.rating === 'number'
            ? <AttractionRatingStars rating={details.rating} />
            : null}
        </div>

        <div className="relative min-h-0 w-full min-w-0 flex-1 overflow-hidden rounded-lg">
          {imageSrc
            ? (
              <Image
                fill
                alt={attraction.title}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1130px"
                src={imageSrc}
              />
            )
            : <AttractionPlaceholder />}
        </div>
      </div>

      <div className="shrink-0 p-2 pt-0">
        <Button
          className={cn(
            'h-12.5 w-full gap-2 px-5 py-2.5 text-base tracking-tight text-white-gray',
            !isSelected && 'bg-background hover:bg-white hover:text-background',
          )}
          disabled={disabled || (!isSelected && selectDisabled)}
          size="l"
          type="button"
          variant={isSelected ? 'default' : 'secondary'}
          onClick={() => {
            onToggle(attraction.id);
          }}
        >
          <Check className="size-6" />
          {isSelected ? 'Selected' : 'Select'}
        </Button>
      </div>
    </DialogContent>
  );
};

const AttractionDetailDialog = ({
  attractionId,
  disabled = false,
  isSelected,
  onOpenChange,
  onToggle,
  open,
  selectDisabled = false,
}: AttractionDetailDialogProps) => {
  const attraction = attractionId
    ? ATTRACTIONS_BY_ID[attractionId]
    : null;
  const details = attraction
    ? getAttractionDetails(attraction)
    : null;

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      {attraction && details
        ? (
          <AttractionDetailContent
            key={attraction.id}
            attraction={attraction}
            details={details}
            disabled={disabled}
            isSelected={isSelected}
            selectDisabled={selectDisabled}
            onToggle={onToggle}
          />
        )
        : null}
    </Dialog>
  );
};

export { AttractionDetailDialog };
