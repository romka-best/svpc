'use client';

import { useRef } from 'react';

import { useScroll } from 'motion/react';

import { AboutTourContent } from './components/content';
import { PhoneMockup } from './components/phone-mockup';

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
      className="px-5 py-20 md:px-10 md:py-32 xl:px-20 xl:py-24"
      id="most-popular-places"
    >
      <div className="mx-auto flex w-full max-w-282.5 flex-col items-center gap-10 xl:flex-row xl:items-center xl:justify-center xl:gap-33.75">
        <PhoneMockup scrollYProgress={scrollYProgress} />
        <AboutTourContent />
      </div>
    </section>
  );
};

export { AboutTourSection };
