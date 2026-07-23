import Image from 'next/image';

import * as motion from 'motion/react-client';

const AboutPortrait = () => {
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
        className="object-cover object-top [-webkit-mask-image:linear-gradient(to_bottom,#000_56%,transparent_92%)] mask-[linear-gradient(to_bottom,#000_56%,transparent_92%)]"
        sizes="(max-width: 1280px) 340px, 402px"
        src="/images/roman-portrait.webp"
      />
    </motion.div>
  );
};

export { AboutPortrait };
