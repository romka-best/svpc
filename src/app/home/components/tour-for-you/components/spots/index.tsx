import { Badge } from '@/components/ui/base/badge';

import { TOUR_FOR_YOU_SPOTS } from './constants';

const TourForYouSpots = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h3 className="text-base font-medium">
        Several Popular Tour Spots
      </h3>
      <ul className="flex flex-wrap items-center justify-center gap-2">
        {TOUR_FOR_YOU_SPOTS.map((spot) => (
          <Badge
            key={spot.label}
            asChild
            clickable
            variant="outline"
          >
            <li>{spot.label}</li>
          </Badge>
        ))}
      </ul>
    </div>
  );
};

export { TourForYouSpots };
