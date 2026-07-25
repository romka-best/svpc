'use client';

import Link from 'next/link';

import {
  ChevronRight,
  Star, 
} from 'lucide-react';
import * as motion from 'motion/react-client';

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
      className="flex w-full max-w-167.5 shrink-0 flex-col items-start gap-6 lg:h-165.5 lg:justify-center"
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
      <h2 className="text-3xl font-medium leading-snug tracking-tight text-white md:text-4xl xl:text-5xl">
        We invite you to explore Silicon Valley in the most
        {' '}
        <span className="text-primary">
          popular places
        </span>
      </h2>

      <div className="flex max-w-138.75 flex-wrap content-center items-center gap-2">
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
              className="h-8 border-light-gray px-3.25 py-1 text-sm font-normal tracking-tight text-light-gray"
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
            className="h-8 gap-1 border-primary px-3.25 py-1 text-sm font-normal tracking-tight text-primary"
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
          <Link href={LinkAnchor.CreateTour}>
            Start Journey
            <ChevronRight className="size-6" />
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
};

export { AboutTourContent };
