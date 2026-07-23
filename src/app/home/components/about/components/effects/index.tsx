import Image from 'next/image';

const AboutEffects = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-[20px]"
    >
      <div className="absolute -left-16 top-[14%] h-95 w-60.5 md:h-135 md:w-85.75">
        <Image
          fill
          alt=""
          className="object-contain"
          sizes="343px"
          src="/images/about-effect-1.webp"
        />
      </div>
      <div className="absolute -right-16 top-[6%] h-90 w-56.5 md:h-130 md:w-81.75">
        <Image
          fill
          alt=""
          className="object-contain"
          sizes="327px"
          src="/images/about-effect-2.webp"
        />
      </div>
    </div>
  );
};

export { AboutEffects };
