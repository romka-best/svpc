import Image from 'next/image';

interface Props {
  label: string;
  imageUrl?: string;
}

const TourForYouSpotsPlanet = ({
  label, 
  imageUrl, 
}: Props) => {
  return (
    <Image
      alt={label}
      className="size-15 min-w-15 rounded-full hover:size-22.5 hover:min-w-22.5 md:size-25 md:min-w-25 md:hover:size-37.5 md:hover:min-w-37.5 xl:size-37.5 xl:min-w-37.5 xl:hover:size-60 xl:hover:min-w-60"
      height={60}
      src={imageUrl || `https://api.dicebear.com/9.x/glass/png?seed=${encodeURIComponent(label)}`}
      width={60}
    />
  );
};

export { TourForYouSpotsPlanet };
