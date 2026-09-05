import type { CarId } from '../../../types';

export interface CarOption {
  id: CarId;
  image: string;
  label: string;
  price: number;
}

export const CAR_OPTIONS: readonly CarOption[] = [
  {
    id: 'model-3',
    image: '/images/plan-your-tour/cars/model-3.png',
    label: 'Tesla Model 3',
    price: 320,
  },
  {
    id: 'model-y',
    image: '/images/plan-your-tour/cars/model-y.png',
    label: 'Tesla Model Y',
    price: 360,
  },
  {
    id: 'cybertruck',
    image: '/images/plan-your-tour/cars/cybertruck.png',
    label: 'Tesla Cybertruck',
    price: 450,
  },
  {
    id: 'id-buzz',
    image: '/images/plan-your-tour/cars/id-buzz.png',
    label: 'Volkswagen ID. Buzz',
    price: 400,
  },
];

export const CARS_BY_ID = Object.fromEntries(
  CAR_OPTIONS.map((car) => {
    return [
      car.id,
      car,
    ];
  }),
) as Record<CarId, CarOption>;

export const LARGE_GROUP_MIN_PARTICIPANTS = 5;

export const LARGE_GROUP_CAR_IDS: readonly CarId[] = [
  'id-buzz',
  'model-y',
];

export const isCarAvailableForParticipants = (
  carId: CarId,
  participants: number,
) => {
  if (participants < LARGE_GROUP_MIN_PARTICIPANTS) {
    return true;
  }

  return LARGE_GROUP_CAR_IDS.includes(carId);
};

export const computeCarPrice = (carId: CarId | null) => {
  if (!carId) {
    return 0;
  }

  return CARS_BY_ID[carId]?.price ?? 0;
};
