const TourForYouDescription = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 md:px-30">
      <div className="flex flex-col items-center justify-center gap-2.5">
        <h2 className="text-3xl font-semibold text-center md:text-4xl">
          Premium Tour For <span className="text-primary">You</span>
        </h2>
        <p className="text-base text-center font-medium md:text-xl">
          Explore hidden gems in the heart of Silicon Valley
        </p>
      </div>
      <p className="text-sm text-center text-muted-foreground md:text-base">
        Silicon Valley Boy offers exclusive, premium tours that provide personalized and immersive experiences in the heart of the tech world. Explore behind-the-scenes access to leading IT companies and prestigious universities, and witness firsthand the latest innovations shaping our future.
      </p>
    </div>

  );
};

export { TourForYouDescription };
