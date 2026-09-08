'use client';

import { Badge } from '@/components/ui/base/badge';

import { usePlanYourTour } from '../../../context';

import { CasinoPrice } from './casino-price';

const PlanYourTourPrice = () => {
  const { price } = usePlanYourTour();

  return (
    <div className="flex w-full items-center gap-4 lg:flex-col lg:items-start">
      <Badge
        className="h-8 border-gray px-3.25 py-1 text-sm font-normal tracking-tight text-gray lg:order-1 lg:border-light-gray lg:text-light-gray"
        size="sm"
        variant="outline"
      >
        Tour price
      </Badge>
      <CasinoPrice
        className="ml-auto text-[32px] text-background lg:ml-0 lg:text-5xl lg:text-white xl:text-[96px] xl:tracking-[-0.03em]"
        price={price}
      />
    </div>
  );
};

export { PlanYourTourPrice };
