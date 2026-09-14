'use client';

import {
  Fragment,
  useLayoutEffect,
  useRef,
} from 'react';
import Image from 'next/image';

import {
  motion,
  type MotionValue,
  useMotionValue,
  useMotionValueEvent,
} from 'motion/react';

import { ITINERARY_STOPS } from '../../constants';
import { ItineraryCard } from '../itinerary-card';

/** Top chrome (status + logo + title) that stays fixed over the scrolling list. */
const SCREEN_CHROME_TOP = 128;

/**
 * The list only runs while the phone is actually on screen, so the first and
 * last stops are never skipped at the edges of the section.
 */
const LIST_SCROLL_START = 0.28;
const LIST_SCROLL_END = 0.72;

const getListProgress = (progress: number) => {
  const range = (progress - LIST_SCROLL_START) / (LIST_SCROLL_END - LIST_SCROLL_START);

  return Math.min(1, Math.max(0, range));
};

interface PhoneMockupProps {
  scrollYProgress: MotionValue<number>;
}

const PhoneMockup = ({ scrollYProgress }: PhoneMockupProps) => {
  const screenRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const scrollDistanceRef = useRef(0);
  const itineraryY = useMotionValue(0);

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    itineraryY.set(getListProgress(progress) * -scrollDistanceRef.current);
  });

  useLayoutEffect(() => {
    const screen = screenRef.current;
    const list = listRef.current;

    if (!screen || !list) {
      return;
    }

    const updateDistance = () => {
      const visibleHeight = Math.max(0, screen.clientHeight - SCREEN_CHROME_TOP);
      scrollDistanceRef.current = Math.max(0, list.scrollHeight - visibleHeight);
      itineraryY.set(getListProgress(scrollYProgress.get()) * -scrollDistanceRef.current);
    };

    updateDistance();

    const resizeObserver = new ResizeObserver(updateDistance);

    resizeObserver.observe(screen);
    resizeObserver.observe(list);

    return () => {
      resizeObserver.disconnect();
    };
  }, [
    itineraryY,
    scrollYProgress,
  ]);

  return (
    <motion.div
      aria-hidden
      className="relative mx-auto aspect-45/92 h-auto w-81.25 shrink-0 origin-top scale-90 sm:scale-100 xl:mx-0"
      initial={{
        opacity: 0,
        x: -40,
      }}
      transition={{
        duration: 0.7,
        ease: 'easeOut',
      }}
      viewport={{ once: true }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
    >
      <div
        ref={screenRef}
        className="absolute inset-[2.5%_5.333%] isolate overflow-hidden rounded-[42px] bg-background [clip-path:inset(0_round_42px)]"
      >
        <motion.div
          ref={listRef}
          className="absolute top-32 right-3 left-3 z-10 flex flex-col gap-2.5 pb-16"
          style={{ y: itineraryY }}
        >
          {ITINERARY_STOPS.map((stop) => (
            <Fragment key={`${stop.title}-${stop.time}`}>
              {stop.travelFromPrevious && (
                <div className="flex items-center gap-2 pl-5">
                  <span className="h-5 w-px bg-linear-to-b from-white/5 via-white/30 to-white/5" />
                  <span className="text-[10px] tracking-tight text-white/45">
                    {stop.travelFromPrevious}
                  </span>
                </div>
              )}
              <ItineraryCard {...stop} />
            </Fragment>
          ))}
        </motion.div>

        <div className="absolute inset-x-0 top-0 z-20 h-28 bg-background" />

        <div className="absolute inset-x-0 top-28 z-20 h-6 bg-linear-to-b from-background to-transparent" />

        <div className="absolute inset-x-0 top-28 z-20 h-px bg-white/10" />

        <div className="absolute inset-x-0 bottom-0 z-20 h-20 bg-linear-to-t from-background via-background/75 to-transparent" />

        <div className="absolute top-10 right-3 left-3 z-40 flex items-end justify-between">
          <span className="flex flex-col gap-1">
            <span className="text-[9px] font-medium tracking-[0.18em] text-white/40 uppercase">
              SVPC
            </span>
            <span className="text-[17px] leading-none font-semibold tracking-tight text-white">
              Itinerary
            </span>
          </span>
          <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium tracking-tight text-white/70">
            {ITINERARY_STOPS.length}
            {' '}
            stops
          </span>
        </div>
      </div>

      <Image
        fill
        unoptimized
        alt=""
        className="pointer-events-none z-30 object-contain"
        sizes="325px"
        src="/images/about-tour/iphone-frame.webp"
      />
    </motion.div>
  );
};

export { PhoneMockup };
