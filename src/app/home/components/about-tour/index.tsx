'use client';

import { useRef } from 'react';

import { useScroll } from 'motion/react';

import { AboutTourContent } from './components/content';
import { PhoneMockup } from './components/phone-mockup';
import { ABOUT_TOUR_JSON_LD } from './constants';

const AboutTourSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    offset: [
      'start end',
      'end start',
    ],
    target: sectionRef,
  });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-5 py-20 md:px-10 md:py-32 xl:px-20 xl:py-24"
      id="most-popular-places"
    >
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ABOUT_TOUR_JSON_LD) }}
        type="application/ld+json"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 size-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[160px] xl:left-1/4"
      />

      <div className="relative mx-auto flex w-full max-w-282.5 flex-col items-center gap-10 xl:flex-row xl:items-center xl:justify-center xl:gap-33.75">
        <PhoneMockup scrollYProgress={scrollYProgress} />
        <AboutTourContent />
      </div>
    </section>
  );
};

export { AboutTourSection };
