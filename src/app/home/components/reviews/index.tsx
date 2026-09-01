'use client';

import {
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import Image from 'next/image';

import {
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import * as motion from 'motion/react-client';

import { QuoteIcon } from '@/components/icons/quote';
import { Badge } from '@/components/ui/base/badge';
import { Button } from '@/components/ui/base/button';

import { REVIEWS } from './constants';

const quoteClassName = 'text-2xl font-medium italic leading-snug tracking-tight text-white md:text-3xl xl:text-4xl';

const ReviewsSection = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [
    quoteHeight,
    setQuoteHeight,
  ] = useState<number>();
  const [
    {
      direction,
      index,
    },
    setSlide,
  ] = useState({
    direction: 0,
    index: 0,
  });

  const review = REVIEWS[index];

  useLayoutEffect(() => {
    const content = contentRef.current;

    if (!content) {
      return;
    }

    const updateHeight = () => {
      setQuoteHeight(content.offsetHeight);
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);

    resizeObserver.observe(content);

    return () => {
      resizeObserver.disconnect();
    };
  }, [
    index,
  ]);

  const goPrev = () => {
    setSlide(({ index: current }) => ({
      direction: -1,
      index: (current - 1 + REVIEWS.length) % REVIEWS.length,
    }));
  };

  const goNext = () => {
    setSlide(({ index: current }) => ({
      direction: 1,
      index: (current + 1) % REVIEWS.length,
    }));
  };

  return (
    <section
      className="flex section-screen flex-col justify-center px-5 py-10 md:px-10 xl:px-48.5"
      id="reviews"
    >
      <div className="mx-auto flex max-w-5xl items-center gap-6 md:gap-10">
        <Button
          aria-label="Previous review"
          className="hidden size-10 shrink-0 p-2 sm:inline-flex"
          size="m"
          type="button"
          variant="default"
          onClick={goPrev}
        >
          <ChevronLeft className="size-6" />
        </Button>

        <div className="flex min-w-0 flex-1 flex-col gap-6">
          <motion.div
            className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center"
            initial={{
              opacity: 0,
              y: 20,
            }}
            transition={{
              duration: 0.55,
              ease: 'easeOut',
            }}
            viewport={{ once: true }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
          >
            <Badge
              className="border-light-gray px-3.25 py-1 text-sm font-normal tracking-tight text-light-gray"
              size="sm"
              variant="outline"
            >
              Experiences from Adventures
            </Badge>

            <motion.div
              key={index}
              animate={{
                opacity: 1,
                x: 0,
              }}
              className="flex items-center gap-4 self-end sm:self-auto"
              initial={direction === 0
                ? false
                : {
                  opacity: 0,
                  x: direction * 20,
                }}
              transition={{
                duration: 0.35,
                ease: 'easeOut',
              }}
            >
              <div className="relative size-8.75 shrink-0 overflow-hidden rounded-full">
                <Image
                  fill
                  unoptimized
                  alt={review.author}
                  className="object-cover"
                  sizes="35px"
                  src={review.avatarSrc}
                />
              </div>
              <div className="flex flex-col leading-snug tracking-tight">
                <p className="text-base font-semibold text-white">
                  {review.author}
                </p>
                <p className="text-[13px] text-primary">
                  {review.role}
                </p>
              </div>
            </motion.div>
          </motion.div>

          <div className="relative flex items-start gap-4 md:gap-5">
            <motion.div
              aria-hidden
              className="mt-1 hidden shrink-0 self-start rotate-180 sm:block"
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              transition={{
                delay: 0.1,
                duration: 0.5,
                ease: 'easeOut',
              }}
              viewport={{ once: true }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
            >
              <QuoteIcon className="h-10.75 w-11.75 select-none text-[#2D2D3E]" />
            </motion.div>

            <motion.div
              animate={quoteHeight
                ? { height: quoteHeight }
                : undefined}
              className="relative min-w-0 flex-1 overflow-hidden"
              initial={false}
              transition={{
                duration: 0.4,
                ease: 'easeOut',
              }}
            >
              <div ref={contentRef}>
                <motion.blockquote
                  key={index}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  className={quoteClassName}
                  data-review-index={index}
                  initial={direction === 0
                    ? false
                    : {
                      opacity: 0,
                      x: direction * 28,
                    }}
                  transition={{
                    duration: 0.4,
                    ease: 'easeOut',
                  }}
                >
                  {review.quote}
                </motion.blockquote>
              </div>
            </motion.div>

            <motion.div
              aria-hidden
              className="hidden shrink-0 self-end sm:block"
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              transition={{
                delay: 0.15,
                duration: 0.5,
                ease: 'easeOut',
              }}
              viewport={{ once: true }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
            >
              <QuoteIcon className="h-10.75 w-11.75 select-none text-[#2D2D3E]" />
            </motion.div>
          </div>

          <div className="flex justify-center gap-3 sm:hidden">
            <Button
              aria-label="Previous review"
              className="size-10 p-2"
              size="m"
              type="button"
              variant="default"
              onClick={goPrev}
            >
              <ChevronLeft className="size-6" />
            </Button>
            <Button
              aria-label="Next review"
              className="size-10 p-2"
              size="m"
              type="button"
              variant="default"
              onClick={goNext}
            >
              <ChevronRight className="size-6" />
            </Button>
          </div>
        </div>

        <Button
          aria-label="Next review"
          className="hidden size-10 shrink-0 p-2 sm:inline-flex"
          size="m"
          type="button"
          variant="default"
          onClick={goNext}
        >
          <ChevronRight className="size-6" />
        </Button>
      </div>
    </section>
  );
};

export { ReviewsSection };
