'use client';

import {
  useEffect,
  useRef,
} from 'react';

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'motion/react';

import { cn } from '@/lib/utils';

import { usePlanYourTour } from '../../../context';
import type {
  CarId,
  PlanYourTourAnswers,
  PlanYourTourStepId,
} from '../../../types';
import { CARS_BY_ID } from '../../steps/car-choice/constants';
import {
  formatRangeLabel,
  isTourDateRangeAllowed,
} from '../../steps/select-days/utils';

type SnapshotStepId = Extract<
  PlanYourTourStepId,
  'select-days' | 'select-participants' | 'select-attractions' | 'car-choice'
>;

interface SnapshotFact {
  editLabel: string;
  stepId: SnapshotStepId;
  value: string;
}

const CAR_SNAPSHOT_LABELS: Record<CarId, string> = {
  'model-3': 'Model 3',
  'model-y': 'Model Y',
  cybertruck: 'Cybertruck',
  'id-buzz': 'ID. Buzz',
};

const EASE_OUT: [
  number,
  number,
  number,
  number,
] = [
  0.215,
  0.61,
  0.355,
  1,
];

const CHIP_TRANSITION = {
  duration: 0.22,
  ease: EASE_OUT,
} as const;

const VALUE_TRANSITION = {
  duration: 0.16,
  ease: EASE_OUT,
} as const;

const getSnapshotFacts = (answers: PlanYourTourAnswers) => {
  const facts: SnapshotFact[] = [];
  const {
    endDate,
    startDate,
  } = answers['select-days'];

  if (isTourDateRangeAllowed(startDate, endDate) && startDate && endDate) {
    facts.push({
      editLabel: 'Edit dates',
      stepId: 'select-days',
      value: formatRangeLabel(startDate, endDate),
    });
  }

  const {
    groupType,
    participants,
  } = answers['select-participants'];

  if (groupType && participants > 0) {
    facts.push({
      editLabel: 'Edit guests',
      stepId: 'select-participants',
      value: `${participants} ${participants === 1 ? 'guest' : 'guests'}`,
    });
  }

  const {
    autoChoice,
    selectedIds,
  } = answers['select-attractions'];
  const stopCount = selectedIds.length;

  if (autoChoice) {
    facts.push({
      editLabel: 'Edit stops',
      stepId: 'select-attractions',
      value: participants > 1 ? 'Surprise Us' : 'Surprise Me',
    });
  } else if (stopCount > 0) {
    facts.push({
      editLabel: 'Edit stops',
      stepId: 'select-attractions',
      value: `${stopCount} ${stopCount === 1 ? 'stop' : 'stops'}`,
    });
  }

  const carId = answers['car-choice'].carId;

  if (carId && CARS_BY_ID[carId]) {
    facts.push({
      editLabel: 'Edit vehicle',
      stepId: 'car-choice',
      value: CAR_SNAPSHOT_LABELS[carId],
    });
  }

  return facts;
};

interface SnapshotChipProps {
  fact: SnapshotFact;
  isCurrent: boolean;
  isInteractive: boolean;
  onSelect: (stepId: SnapshotStepId) => void;
  shouldReduceMotion: boolean;
}

const SnapshotChip = ({
  fact,
  isCurrent,
  isInteractive,
  onSelect,
  shouldReduceMotion,
}: SnapshotChipProps) => {
  const chipRef = useRef<HTMLButtonElement>(null);
  const motionTransition = shouldReduceMotion
    ? { duration: 0 }
    : CHIP_TRANSITION;

  useEffect(() => {
    if (!isCurrent) {
      return;
    }

    const chip = chipRef.current;
    const scroller = chip?.closest<HTMLElement>('[data-snapshot-scroller]');

    if (!chip || !scroller) {
      return;
    }

    const chipRect = chip.getBoundingClientRect();
    const scrollerRect = scroller.getBoundingClientRect();
    const edgePadding = 8;
    const isOverflowingLeft = chipRect.left < scrollerRect.left + edgePadding;
    const isOverflowingRight = chipRect.right > scrollerRect.right - edgePadding;

    if (!isOverflowingLeft && !isOverflowingRight) {
      return;
    }

    const nextLeft = scroller.scrollLeft
      + (chipRect.left - scrollerRect.left)
      - (scrollerRect.width - chipRect.width) / 2;

    scroller.scrollTo({
      behavior: shouldReduceMotion ? 'auto' : 'smooth',
      left: Math.max(0, nextLeft),
    });
  }, [
    fact.value,
    isCurrent,
    shouldReduceMotion,
  ]);

  return (
    <motion.div
      animate={{
        opacity: 1,
        x: 0,
      }}
      className="shrink-0"
      exit={shouldReduceMotion
        ? { opacity: 0 }
        : {
          opacity: 0,
          x: -8,
        }}
      initial={shouldReduceMotion
        ? false
        : {
          opacity: 0,
          x: 12,
        }}
      layout="position"
      style={{ willChange: 'transform, opacity' }}
      transition={motionTransition}
      whileTap={isInteractive && !shouldReduceMotion
        ? { scale: 0.98 }
        : undefined}
    >
      <button
        ref={chipRef}
        aria-current={isCurrent ? 'step' : undefined}
        className={cn(
          'h-8 overflow-hidden rounded-[30px] border px-3.25 text-sm font-normal tracking-tight tabular-nums transition-colors duration-150 ease-[ease]',
          isCurrent
            ? 'border-primary bg-primary/20 text-primary'
            : 'border-gray text-background lg:border-light-gray lg:text-white',
          isInteractive
            ? 'cursor-pointer [@media(hover:hover)]:hover:border-primary [@media(hover:hover)]:hover:text-primary focus-visible:border-primary focus-visible:text-primary focus-visible:outline-none'
            : 'cursor-default',
        )}
        title={isInteractive ? fact.editLabel : undefined}
        type="button"
        onClick={() => {
          if (!isInteractive) {
            return;
          }

          onSelect(fact.stepId);
        }}
      >
        <AnimatePresence
          initial={false}
          mode="wait"
        >
          <motion.span
            key={fact.value}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="inline-block whitespace-nowrap"
            exit={shouldReduceMotion
              ? { opacity: 0 }
              : {
                opacity: 0,
                y: -4,
              }}
            initial={shouldReduceMotion
              ? false
              : {
                opacity: 0,
                y: 4,
              }}
            style={{ willChange: 'transform, opacity' }}
            transition={shouldReduceMotion
              ? { duration: 0 }
              : VALUE_TRANSITION}
          >
            {fact.value}
          </motion.span>
        </AnimatePresence>
      </button>
    </motion.div>
  );
};

const PlanYourTourSnapshot = () => {
  const {
    answers,
    goToStep,
    stepId,
    submissionStatus,
  } = usePlanYourTour();
  const shouldReduceMotion = useReducedMotion();
  const facts = getSnapshotFacts(answers);

  if (facts.length === 0) {
    return null;
  }

  const canJump = submissionStatus === 'idle';

  return (
    <div
      aria-label="Tour summary"
      className="flex h-8 w-full items-center gap-2 overflow-x-auto scrollbar-none"
      data-snapshot-scroller=""
    >
      <AnimatePresence mode="popLayout">
        {facts.map((fact) => {
          const isCurrent = fact.stepId === stepId;

          return (
            <SnapshotChip
              key={fact.stepId}
              fact={fact}
              isCurrent={isCurrent}
              isInteractive={canJump && !isCurrent}
              shouldReduceMotion={Boolean(shouldReduceMotion)}
              onSelect={goToStep}
            />
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export { PlanYourTourSnapshot };
