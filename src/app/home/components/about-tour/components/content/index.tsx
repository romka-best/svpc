'use client';

import {
  ChevronRight,
  Star,
} from 'lucide-react';
import * as motion from 'motion/react-client';

import { AnchorLink } from '@/components/ui/base/anchor-link';
import { Badge } from '@/components/ui/base/badge';
import { Button } from '@/components/ui/base/button';
import { LinkAnchor } from '@/constants/links';

import {
  ABOUT_TOUR_FEATURED_TAG,
  ABOUT_TOUR_TAGS,
} from '../../constants';

const AboutTourContent = () => {
  return (
    <motion.div
      className="flex w-full max-w-167.5 shrink-0 flex-col items-start gap-6 xl:h-165.5"
      initial={{
        opacity: 0,
        x: 40,
      }}
      style={{ willChange: 'transform, opacity' }}
      transition={{
        delay: 0.1,
        duration: 0.7,
        ease: 'easeOut',
      }}
      viewport={{ once: true }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl leading-snug font-medium tracking-tight text-balance text-white md:text-4xl xl:text-5xl">
          A private Silicon Valley tour, planned down to the
          {' '}
          <span className="text-primary">
            last stop
          </span>
        </h2>

        <p className="max-w-155 text-base tracking-tight text-light-gray md:text-lg">
          Explore iconic landmarks and hidden gems in&nbsp;a&nbsp;single day&nbsp;&mdash; driven door to&nbsp;door, at&nbsp;your pace, with a&nbsp;guide who actually lives here.
        </p>
      </div>

      <div className="flex max-w-155 flex-wrap content-center items-center gap-2">
        {ABOUT_TOUR_TAGS.map((tag, index) => (
          <motion.div
            key={tag}
            initial={{
              opacity: 0,
              y: 12,
            }}
            transition={{
              delay: 0.2 + index * 0.05,
              duration: 0.45,
              ease: 'easeOut',
            }}
            viewport={{ once: true }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
          >
            <Badge
              className="h-8 border-white/15 bg-white/3 px-3.25 py-1 text-sm font-normal tracking-tight text-light-gray"
              size="sm"
              variant="outline"
            >
              {tag}
            </Badge>
          </motion.div>
        ))}

        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          transition={{
            delay: 0.5,
            duration: 0.45,
            ease: 'easeOut',
          }}
          viewport={{ once: true }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
        >
          <Badge
            className="h-8 gap-1 border-primary bg-primary/10 px-3.25 py-1 text-sm font-normal tracking-tight text-primary"
            size="sm"
            variant="outline"
          >
            <Star
              aria-hidden
              className="size-4 fill-primary text-primary"
              strokeWidth={1.5}
            />
            {ABOUT_TOUR_FEATURED_TAG}
          </Badge>
        </motion.div>
      </div>

      <motion.div
        className="xl:mt-auto"
        initial={{
          opacity: 0,
          y: 16,
        }}
        transition={{
          delay: 0.35,
          duration: 0.5,
          ease: 'easeOut',
        }}
        viewport={{ once: true }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
      >
        <Button
          asChild
          size="l"
        >
          <AnchorLink href={LinkAnchor.PlanYourTour}>
            Build Your Itinerary
            <ChevronRight className="size-6" />
          </AnchorLink>
        </Button>
      </motion.div>
    </motion.div>
  );
};

export { AboutTourContent };
