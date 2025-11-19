import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

const AuthorInfo = ({ className }: Props) => {
  return (
    <div className={cn('flex items-center gap-4', className)}>
      <div className="flex items-center gap-1">
        <Image
          alt="Roman Danilov"
          className="rounded-full"
          height={35}
          src="/images/roman.png"
          width={35}
        />
        <div className="flex flex-col">
          <h3 className="text-base font-bold">Roman Danilov</h3>
          <p className="text-primary text-xs">Silicon Valley Private Circle</p>
        </div>
      </div>

      <Button
        asChild
        className="p-0"
        variant="link"
      >
        <Link
          href="https://t.me/roman_danilov"
          target="_blank"
        >
          <Image
            alt="telegram"
            height={35}
            src="/icons/telegram.svg"
            width={35}
          />
        </Link>
      </Button>
    </div>
  );
};

export { AuthorInfo };
