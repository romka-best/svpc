'use client';

import Image from 'next/image';

import {
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

import { Radio } from '@/components/ui/base/radio';
import { RadioGroup } from '@/components/ui/base/radio-group';
import { cn } from '@/lib/utils';

import { usePlanYourTour } from '../../../context';
import type { CarId } from '../../../types';
import { StepNavButton } from '../../step-nav';

import {
  CAR_OPTIONS,
  isCarAvailableForParticipants,
} from './constants';

const CarChoiceStep = () => {
  const {
    answers,
    canGoBack,
    canGoNext,
    goBack,
    goNext,
    patchCarChoice,
  } = usePlanYourTour();

  const { carId } = answers['car-choice'];
  const { participants } = answers['select-participants'];

  return (
    <div className="flex min-h-0 w-full flex-1 flex-col justify-between gap-6">
      <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto p-2 -m-2">
        <p className="text-base font-semibold tracking-tight text-white">
          Select a vehicle
        </p>

        <RadioGroup
          className="flex flex-row flex-wrap gap-4"
          value={carId ?? undefined}
          onValueChange={(value) => {
            patchCarChoice({ carId: value as CarId });
          }}
        >
          {CAR_OPTIONS.map((car) => {
            const isSelected = car.id === carId;
            const isAvailable = isCarAvailableForParticipants(car.id, participants);
            const inputId = `car-${car.id}`;

            return (
              <label
                key={car.id}
                className={cn(
                  'flex flex-col items-start gap-2',
                  isAvailable ? 'cursor-pointer' : 'cursor-not-allowed opacity-40',
                )}
                htmlFor={inputId}
              >
                <span className="flex items-center gap-2">
                  <Radio
                    disabled={!isAvailable}
                    id={inputId}
                    value={car.id}
                  />
                  <span
                    className={cn(
                      'text-sm font-medium tracking-tight',
                      isSelected ? 'text-white' : 'text-light-gray',
                    )}
                  >
                    {car.label}
                  </span>
                </span>

                <span className="relative h-21 w-36 overflow-hidden">
                  <Image
                    fill
                    unoptimized
                    alt={car.label}
                    className="bg-transparent object-contain"
                    sizes="145px"
                    src={car.image}
                  />
                </span>
              </label>
            );
          })}
        </RadioGroup>
      </div>

      <div className="flex w-full shrink-0 items-center justify-between gap-4">
        <StepNavButton
          disabled={!canGoBack}
          type="button"
          variant="outline"
          onClick={goBack}
        >
          <ChevronLeft className="size-6" />
          Back
        </StepNavButton>

        <StepNavButton
          className="text-white-gray"
          disabled={!canGoNext}
          type="button"
          onClick={goNext}
        >
          Next
          <ChevronRight className="size-6" />
        </StepNavButton>
      </div>
    </div>
  );
};

export { CarChoiceStep };
