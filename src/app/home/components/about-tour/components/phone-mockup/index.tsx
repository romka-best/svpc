'use client';

import {
  useLayoutEffect,
  useRef,
} from 'react';
import Image from 'next/image';

import {
  type MotionValue,
  motion,
  useMotionValue,
  useMotionValueEvent,
} from 'motion/react';

import { Logo } from '@/components/ui/base/logo';

import { ITINERARY_STOPS } from '../../constants';
import { ItineraryCard } from '../itinerary-card';

/** Top chrome (status + logo + title) that stays fixed over the scrolling list. */
const SCREEN_CHROME_TOP = 120;

interface PhoneMockupProps {
  scrollYProgress: MotionValue<number>;
}

const PhoneMockup = ({ scrollYProgress }: PhoneMockupProps) => {
  const phoneRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const scrollDistanceRef = useRef(0);
  const itineraryY = useMotionValue(0);

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    itineraryY.set(progress * -scrollDistanceRef.current);
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
      itineraryY.set(scrollYProgress.get() * -scrollDistanceRef.current);
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
        className="absolute top-9.75 left-7.5 z-10 flex w-66.25 flex-col gap-4 pb-16"
        style={{ y: itineraryY }}
      >
        {ITINERARY_STOPS.map((stop) => (
          <ItineraryCard
            key={`${stop.title}-${stop.time}`}
            {...stop}
          />
        ))}
      </motion.div>

      <div className="absolute top-1.25 left-2.75 z-20 h-27.75 w-76.5 rounded-t-[50px] bg-[#1e1e29]" />

      <Image
        fill
        unoptimized
        alt=""
        className="pointer-events-none z-30 object-cover"
        sizes="325px"
        src="/images/about-tour/iphone-frame.webp"
      />

      <div className="absolute top-14.5 left-1/2 z-40 w-max -translate-x-1/2">
        <Logo className="pointer-events-none" />
      </div>

      <p className="absolute top-20.75 left-1/2 z-40 -translate-x-1/2 whitespace-nowrap text-sm tracking-tight text-white">
        Itinerary
      </p>
    </motion.div>
  );
};

export { PhoneMockup };
