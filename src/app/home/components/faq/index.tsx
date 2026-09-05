import * as motion from 'motion/react-client';

import { Accordion } from '@/components/ui/base/accordion';
import { AccordionContent } from '@/components/ui/base/accordion/content';
import { AccordionItem } from '@/components/ui/base/accordion/item';
import { AccordionTrigger } from '@/components/ui/base/accordion/trigger';

import { FaqEffects } from './components/effects';
import {
  FAQ_ITEMS,
  FAQ_JSON_LD,
} from './constants';

const FaqSection = () => {
  return (
    <section
      className="relative flex section-screen flex-col justify-center overflow-hidden px-5 py-10 md:px-10 xl:px-20"
      id="faq"
    >
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
        type="application/ld+json"
      />
      <FaqEffects />
      <div className="relative z-10 flex flex-col items-start gap-10 lg:flex-row lg:justify-center lg:gap-5">
        <motion.h2
          className="w-full min-w-0 max-w-full text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:w-max xl:shrink-0 xl:whitespace-nowrap xl:text-5xl"
          initial={{
            opacity: 0,
            y: 24,
          }}
          style={{ willChange: 'transform, opacity' }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
          }}
          viewport={{ once: true }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
        >
          <span className="whitespace-nowrap">Frequently Asked</span>
          {' '}
          Questions
        </motion.h2>
        <motion.div
          className="w-full lg:w-110"
          initial={{
            opacity: 0,
            y: 24,
          }}
          style={{ willChange: 'transform, opacity' }}
          transition={{
            delay: 0.1,
            duration: 0.6,
            ease: 'easeOut',
          }}
          viewport={{ once: true }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
        >
          <Accordion
            collapsible
            className="flex w-full flex-col gap-6"
            type="single"
          >
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem
                key={`${item.question}-${index}`}
                value={`faq-${index}`}
              >
                <AccordionTrigger>
                  <span className="flex-1 text-2xl font-medium leading-tight tracking-tight text-balance">
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base leading-snug tracking-tight text-white-gray">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export { FaqSection };
