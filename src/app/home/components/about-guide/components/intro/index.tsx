import * as motion from 'motion/react-client';

const AboutGuideIntro = () => {
  return (
    <motion.h2
      className="max-w-4xl text-3xl font-medium leading-tight tracking-tight text-background md:text-4xl xl:text-5xl"
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
      Private Tours With a
      {' '}
      <span className="text-primary">
        Local Guide
      </span>
    </motion.h2>
  );
};

export { AboutGuideIntro };
