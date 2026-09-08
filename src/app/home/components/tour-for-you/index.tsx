import { TourForYouDescription } from './components/description';
import { TourForYouSpots } from './components/spots';

const TourForYouSection = () => {
  return (
    <section
      className="relative z-20 isolate flex section-screen flex-col items-center justify-center gap-7.5 overflow-x-clip px-5 py-32 md:px-10 md:py-50 xl:px-67.5 xl:py-56"
      id="tour-for-you"
    >
      <TourForYouDescription />
      <TourForYouSpots />
    </section>
  );
};

export { TourForYouSection };
