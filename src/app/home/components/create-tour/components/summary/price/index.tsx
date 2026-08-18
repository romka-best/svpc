'use client';

import { Badge } from '@/components/ui/base/badge';

import { useCreateTour } from '../../../context';

import { CasinoPrice } from './casino-price';

const CreateTourPrice = () => {
  const { price } = useCreateTour();

  return (
    <div className="flex w-full flex-col items-start gap-4">
      <CasinoPrice
        className="text-5xl md:text-7xl xl:text-[96px] xl:tracking-[-0.03em]"
        price={price}
      />
      <Badge
        className="h-8 border-light-gray px-3.25 py-1 text-sm font-normal tracking-tight text-light-gray"
        size="sm"
        variant="outline"
      >
        Tour price
      </Badge>
    </div>
  );
};

export { CreateTourPrice };
