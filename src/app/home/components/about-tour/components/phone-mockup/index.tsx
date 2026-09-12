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
const SCREEN_CHROME_TOP = 144;

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
  const phoneRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const scrollDistanceRef = useRef(0);
  const itineraryY = useMotionValue(0);

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    itineraryY.set(getListProgress(progress) * -scrollDistanceRef.current);
  });

  useLayoutEffect(() => {
    const phone = phoneRef.current;
    const list = listRef.current;

    if (!phone || !list) {
      return;
    }

    const updateDistance = () => {
      const visibleHeight = Math.max(0, phone.clientHeight - SCREEN_CHROME_TOP);
      scrollDistanceRef.current = Math.max(0, list.scrollHeight - visibleHeight);
      itineraryY.set(getListProgress(scrollYProgress.get()) * -scrollDistanceRef.current);
    };

    updateDistance();

    const resizeObserver = new ResizeObserver(updateDistance);

    resizeObserver.observe(phone);
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
      ref={phoneRef}
      aria-hidden
      className="relative mx-auto h-165.5 w-81.25 shrink-0 origin-top scale-90 overflow-hidden rounded-[59px] bg-background sm:scale-100 xl:mx-0"
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
      <motion.div
        ref={listRef}
        className="absolute top-36 left-7.5 z-10 flex w-66.25 flex-col gap-2.5 pb-16"
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

      <div className="absolute top-1.25 left-2.75 z-20 h-27.75 w-76.5 rounded-t-[50px] bg-background" />

      <div className="absolute top-29 left-2.75 z-20 h-6 w-76.5 bg-linear-to-b from-background to-transparent" />

      <div className="absolute top-29 left-2.75 z-20 h-px w-76.5 bg-white/10" />

      <div className="absolute bottom-0 left-2.75 z-20 h-20 w-76.5 bg-linear-to-t from-background via-background/75 to-transparent" />

      <Image
        fill
        unoptimized
        alt=""
        className="pointer-events-none z-30 object-cover"
        sizes="325px"
        src="/images/about-tour/iphone-frame.webp"
      />

      <div className="absolute top-14 left-7.5 z-40 flex w-66.25 items-end justify-between">
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
    </motion.div>
  );
};

export { PhoneMockup };
