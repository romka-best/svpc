import { TourForYouDescription } from './components/description';
import { TourForYouSpots } from './components/spots';

const TourForYouSection = () => {
  return (
    <section
      className="flex flex-col items-center justify-center gap-7.5 px-5 py-32 md:px-10 md:py-50 xl:px-67.5 xl:py-56"
      id="tour-for-you"
    >
      <TourForYouDescription />
      <TourForYouSpots />
    </section>
  );
};

export { TourForYouSection };
