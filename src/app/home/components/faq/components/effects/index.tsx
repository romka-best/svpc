import Image from 'next/image';

const FaqEffects = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute top-1/2 left-[8.8%] aspect-648/952 w-[33.7%] -translate-y-1/2">
        <Image
          fill
          unoptimized
          alt=""
          className="object-fill"
          sizes="34vw"
          src="/images/faq/effect-1.webp"
        />
      </div>
      <div className="absolute top-1/2 left-[43.5%] aspect-2170/2650 w-[76.5%] translate-y-[-48%]">
        <Image
          fill
          unoptimized
          alt=""
          className="object-fill"
          sizes="77vw"
          src="/images/faq/effect-2.webp"
        />
      </div>
    </div>
  );
};

export { FaqEffects };
