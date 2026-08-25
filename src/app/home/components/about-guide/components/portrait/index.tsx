import Image from 'next/image';

import * as motion from 'motion/react-client';

const AboutGuidePortrait = () => {
  return (
    <motion.div
      className="relative aspect-402/460 w-70 shrink-0 md:w-85 xl:w-100.5"
      initial={{
        opacity: 0,
        scale: 0.96,
      }}
      style={{ willChange: 'transform, opacity' }}
      transition={{
        duration: 0.7,
        ease: 'easeOut',
      }}
      viewport={{ once: true }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
    >
      <Image
        fill
        priority
        alt="Roman Danilov, your Silicon Valley guide"
        className="object-cover object-top mask-[linear-gradient(to_bottom,#000_56%,transparent_92%)] [-webkit-mask-image:linear-gradient(to_bottom,#000_56%,transparent_92%)]"
        sizes="(max-width: 1280px) 340px, 402px"
        src="/images/about-guide/roman-portrait.webp"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[22%] bg-[linear-gradient(to_right,var(--color-white-gray),rgb(240_240_246/0))]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[22%] bg-[linear-gradient(to_left,var(--color-white-gray),rgb(240_240_246/0))]"
      />
    </motion.div>
  );
};

export { AboutGuidePortrait };
