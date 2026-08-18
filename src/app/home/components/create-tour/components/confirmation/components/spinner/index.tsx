'use client';

const SPINNER_TICKS = 12;

const ConfirmationSpinner = () => {
  return (
    <span
      aria-hidden
      className="relative size-10 animate-spin motion-reduce:animate-none"
    >
      {Array.from({ length: SPINNER_TICKS }, (_, index) => {
        return (
          <span
            key={index}
            className="absolute top-0 left-1/2 h-2.5 w-0.5 rounded-full bg-primary"
            style={{
              opacity: (index + 1) / SPINNER_TICKS,
              transform: `translateX(-50%) rotate(${index * (360 / SPINNER_TICKS)}deg)`,
              transformOrigin: '50% 20px',
            }}
          />
        );
      })}
    </span>
  );
};

export { ConfirmationSpinner };
