const TourForYouDescription = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 md:px-30">
      <div className="flex flex-col items-center justify-center gap-2.5">
        <h2 className="text-3xl font-semibold text-center md:text-4xl">
          Premium Tour For <span className="text-primary">You</span>
        </h2>
        <p className="text-base text-center font-medium md:text-xl">
          Explore hidden gems in&nbsp;the heart of&nbsp;Silicon Valley
        </p>
      </div>
      <p className="text-sm text-center text-muted-foreground md:text-base">
        Silicon Valley Private Circle offers premium, private Silicon Valley tours with personalized experiences at&nbsp;the heart of&nbsp;the world&rsquo;s leading technology hub. Explore iconic tech companies, prestigious universities, and the innovations shaping our future through expert local insight and immersive storytelling. Each tour is&nbsp;tailored to&nbsp;your interests for a&nbsp;memorable, inspiring journey through Silicon Valley.
      </p>
    </div>

  );
};

export { TourForYouDescription };
