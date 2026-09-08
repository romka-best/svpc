import { cn } from '@/lib/utils';

interface PlanYourTourHeadingProps {
  className?: string;
}

const PlanYourTourHeading = ({ className }: PlanYourTourHeadingProps) => {
  return (
    <h2
      className={cn(
        'text-[32px] font-medium leading-[1.2] tracking-tight text-white lg:text-4xl xl:text-5xl',
        className,
      )}
    >
      Plan Your
      {' '}
      <span className="text-primary">
        Tour
      </span>
    </h2>
  );
};

export { PlanYourTourHeading };
