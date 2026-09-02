const HeroFog = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] translate-y-[28%] overflow-x-clip mask-[linear-gradient(to_bottom,transparent,#000_12%,#000_70%,transparent)]"
    >
      <div className="fog-band fog-band-back absolute inset-y-0 left-0 w-[200%] motion-safe:animate-fog-back" />
      <div className="fog-band fog-band-mid absolute inset-y-0 left-0 w-[200%] motion-safe:animate-fog-mid" />
      <div className="fog-band fog-band-front absolute inset-y-0 left-0 w-[200%] motion-safe:animate-fog-front" />
    </div>
  );
};

export { HeroFog };
