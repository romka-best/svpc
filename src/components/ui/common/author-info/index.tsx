import Image from 'next/image';
import Link from 'next/link';

const AuthorInfo = () => {
  return (
    <div className="flex items-center gap-4">
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

      <Link
        href="https://t.me/roman_danilov"
      >
        <Image
          alt="telegram"
          height={35}
          src="/icons/telegram.svg"
          width={35}
        />
      </Link>
    </div>
  );
};

export { AuthorInfo };
