import Link from 'next/link';

const HeaderLogo = () => {
  return (
    <Link
      className="flex items-center gap-1"
      href="/"
    >
      <h1 className="text-xs font-bold">Silicon Valley</h1>
      <span className="bg-primary font-bold px-2 py-1 rounded-full text-xs">
        <span className="sm:hidden">PC</span>
        <span className="hidden sm:block">Private Circle</span>
      </span>
    </Link>
  );
};

export { HeaderLogo };
