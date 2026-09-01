import { TourForYouDescription } from './components/description';
import { TourForYouSpots } from './components/spots';

const TourForYouSection = () => {
  return (
    <section
      className="relative flex section-screen flex-col items-center justify-center gap-7.5 overflow-x-clip px-5 py-10 md:px-10 xl:px-67.5"
      id="tour-for-you"
    >
      <TourForYouDescription />
      <TourForYouSpots />
    </section>
  );
};

export { TourForYouSection };
