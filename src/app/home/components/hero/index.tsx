import { ChevronRight } from 'lucide-react';
import * as motion from 'motion/react-client';

import { AnchorLink } from '@/components/ui/base/anchor-link';
import { Button } from '@/components/ui/base/button';
import { LinkAnchor } from '@/constants/links';

import { HeroBackground } from './components/background';
import { HeroFog } from './components/fog';
import { HeroScrollHint } from './components/scroll-hint';

const HeroSection = () => {
  return (
    <section
      className="relative z-10 isolate flex section-screen flex-col items-center justify-center gap-6.5 px-5 py-10 md:px-10 xl:px-67.5"
      id="hero"
    >
      <HeroBackground />
      <HeroFog />
      <div className="flex flex-col items-center justify-center gap-5">
        <motion.h1
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="text-3xl font-semibold text-center md:text-5xl"
          initial={{
            opacity: 0,
            y: -50,
          }}
          style={{ willChange: 'transform, opacity' }}
          transition={{
            damping: 15,
            duration: 0.6,
            stiffness: 100,
            type: 'spring',
          }}
        >
          Discover <span className="text-primary">Silicon Valley</span>: Your Guide to the World of <span className="text-primary">Innovation</span>
        </motion.h1>
        <motion.p
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="text-base text-center"
          initial={{
            opacity: 0,
            y: -50,
          }}
          style={{ willChange: 'transform, opacity' }}
          transition={{
            damping: 15,
            delay: 0.2,
            duration: 0.6,
            stiffness: 100,
            type: 'spring',
          }}
        >
          Gain exclusive access to industry giants and esteemed universities, and see firsthand the cutting-edge advancements that are shaping our tomorrow.
        </motion.p>
      </div>
      <motion.div
        animate={{
          opacity: 1,
          y: 0,
        }}
        initial={{
          opacity: 0,
          y: -50,
        }}
        style={{ willChange: 'transform, opacity' }}
        transition={{
          damping: 15,
          delay: 0.4,
          duration: 0.6,
          stiffness: 100,
          type: 'spring',
        }}
      >
        <Button
          asChild
          size="l"
        >
          <AnchorLink href={LinkAnchor.CreateTour}>
            Start Journey
            <ChevronRight className="size-4" />
          </AnchorLink>
        </Button>
      </motion.div>
      <HeroScrollHint />
    </section>
  );
};

export { HeroSection };
