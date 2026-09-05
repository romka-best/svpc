'use client';

import {
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import * as motion from 'motion/react-client';

import { Button } from '@/components/ui/base/button';
import {
  Slider,
  SliderValue,
} from '@/components/ui/base/slider';

import {
  ADULTS_MIN,
  getDefaultsForGroup,
  getMaxParticipantsForGroup,
  getMinParticipantsForGroup,
} from '../../../constants';
import { usePlanYourTour } from '../../../context';

import { GroupTypeRadio } from './components/group-type-radio';

const SelectParticipantsStep = () => {
  const {
    answers,
    canGoBack,
    goBack,
    goNext,
    patchSelectParticipants,
  } = usePlanYourTour();

  const {
    adults,
    groupType,
    participants,
  } = answers['select-participants'];

  const minParticipants = getMinParticipantsForGroup(groupType);
  const maxParticipants = getMaxParticipantsForGroup(groupType);
  const childrenCount = Math.max(0, participants - adults);
  const isFixedGroup = groupType === 'solo' || groupType === 'partners';
  const showParticipantsSlider = !isFixedGroup;
  const showAdultsSlider = groupType === 'family' || groupType === 'group';
  const showChildrenSummary = showAdultsSlider;

  return (
    <div className="flex min-h-0 w-full flex-1 flex-col justify-between gap-10">
      <div className="flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto p-2 -m-2">
        <div className="flex w-full flex-col gap-4">
          <p className="text-base font-semibold tracking-tight text-white">
            Select group type
          </p>
          <GroupTypeRadio
            value={groupType}
            onChange={(nextGroupType) => {
              const defaults = getDefaultsForGroup(nextGroupType);

              patchSelectParticipants({
                adults: defaults.adults,
                groupType: nextGroupType,
                participants: defaults.participants,
              });
            }}
          />
        </div>

        {showParticipantsSlider
          ? (
            <div className="flex w-full flex-col gap-4">
              <p className="text-base font-semibold tracking-tight text-white">
                Number of participants
              </p>
              <div className="flex w-full items-center gap-2">
                <span className="shrink-0 text-base font-medium tracking-tight text-white">
                  {minParticipants}
                </span>
                <Slider
                  className="pb-5"
                  max={maxParticipants}
                  min={minParticipants}
                  step={1}
                  value={[
                    participants,
                  ]}
                  onValueChange={([
                    nextParticipants,
                  ]) => {
                    if (nextParticipants === undefined) {
                      return;
                    }

                    patchSelectParticipants({
                      adults: Math.min(
                        Math.max(adults, ADULTS_MIN),
                        nextParticipants,
                      ),
                      participants: nextParticipants,
                    });
                  }}
                >
                  <SliderValue position="bottom" />
                </Slider>
                <span className="shrink-0 text-base font-medium tracking-tight text-white">
                  {maxParticipants}
                </span>
              </div>
            </div>
          )
          : null}

        {showAdultsSlider
          ? (
            <div className="flex w-full flex-col gap-4">
              <p className="text-base font-semibold tracking-tight text-white">
                Select number of adults
              </p>
              <div className="flex w-full items-center gap-2">
                <span className="shrink-0 text-base font-medium tracking-tight text-white">
                  {ADULTS_MIN}
                </span>
                <Slider
                  className="pb-5"
                  max={participants}
                  min={ADULTS_MIN}
                  step={1}
                  value={[
                    adults,
                  ]}
                  onValueChange={([
                    nextAdults,
                  ]) => {
                    if (nextAdults === undefined) {
                      return;
                    }

                    patchSelectParticipants({ adults: Math.max(ADULTS_MIN, nextAdults) });
                  }}
                >
                  <SliderValue position="bottom" />
                </Slider>
                <span className="shrink-0 text-base font-medium tracking-tight text-white">
                  {participants}
                </span>
              </div>
            </div>
          )
          : null}
      </div>

      <motion.div
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="flex w-full shrink-0 flex-col gap-6"
        initial={{
          opacity: 0,
          y: 16,
        }}
        style={{ willChange: 'transform, opacity' }}
        transition={{
          duration: 0.4,
          ease: 'easeOut',
        }}
      >
        <p className="font-medium tracking-tight text-white">
          <span className="text-5xl leading-tight md:text-6xl">
            {adults}
            {' '}
          </span>
          <span className="text-xl text-light-gray">
            {adults === 1 ? 'adult' : 'adults'}
          </span>
          {showChildrenSummary
            ? (
              <>
                <span className="text-5xl leading-tight md:text-6xl">
                  {' '}
                </span>
                <span className="text-4xl leading-tight md:text-5xl">
                  {childrenCount}
                  {' '}
                </span>
                <span className="text-xl text-light-gray">
                  {childrenCount === 1 ? 'child' : 'children'}
                </span>
              </>
            )
            : null}
        </p>

        <div className="flex w-full items-center justify-between gap-4">
          <Button
            className="h-12.5 gap-2 px-5 py-2.5 text-base tracking-tight"
            disabled={!canGoBack}
            size="l"
            type="button"
            variant="outline"
            onClick={goBack}
          >
            <ChevronLeft className="size-6" />
            Back
          </Button>

          <Button
            className="h-12.5 gap-2 px-5 py-2.5 text-base tracking-tight text-white-gray"
            size="l"
            type="button"
            onClick={goNext}
          >
            Next
            <ChevronRight className="size-6" />
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export { SelectParticipantsStep };
