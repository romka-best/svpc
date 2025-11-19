import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

interface Link {
  label: string;
  href: string;
  icon?: string;
}

interface Props {
  title?: string;
  links: Link[];
  direction?: 'horizontal' | 'vertical';
}

const GroupLinks = ({
  title,
  links,
  direction = 'vertical',
}: Props) => {
  const renderLabel = (link: Link) => {
    if (link?.icon) {
      return (
        <Image
          alt={link?.label}
          height={32}
          src={link?.icon}
          width={32}
        />
      );
    }

    return link?.label;
  };

  return (
    <div className={cn('flex flex-col gap-7')}>
      {title && <h3 className="text-xs text-muted-foreground">{title}</h3>}
      <ul
        className={cn('flex', {
          'flex-col gap-4': direction === 'vertical',
          'flex-row gap-2': direction === 'horizontal',
        })}
      >
        {links.map((link: Link) => (
          <li
            key={link.href}
            className="text-sm text-white font-medium"
          >
            <Link href={link.href}>{renderLabel(link)}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { GroupLinks };

