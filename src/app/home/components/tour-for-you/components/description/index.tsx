const TourForYouDescription = () => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center gap-5 md:px-30">
      <div className="flex flex-col items-center justify-center gap-2.5">
        <h2 className="text-3xl font-semibold text-center md:text-4xl">
          A Private Tour, Built Around
          {' '}
          <span className="text-primary">
            You
          </span>
        </h2>
        <p className="text-base text-center font-medium md:text-xl">
          Explore hidden gems in&nbsp;the heart of&nbsp;Silicon Valley
        </p>
      </div>
      <p className="text-sm text-center text-muted-foreground md:text-base">
        Private tours of Silicon Valley and San Francisco, built around what you want to see. A local guide, a private car, and a route that includes the campuses, landmarks, and hidden gems&nbsp;&mdash; not a bus-and-script loop.
      </p>
    </div>

  );
};

export { TourForYouDescription };
