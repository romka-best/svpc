import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Link as LinkType } from '@/constants/links';
import { cn } from '@/lib/utils';

interface Props {
  title?: string;
  links: LinkType[];
  direction?: 'horizontal' | 'vertical';
}

const GroupLinks = ({
  title,
  links,
  direction = 'vertical',
}: Props) => {
  const renderLabel = (link: LinkType) => {
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
    <nav className={cn('flex flex-col gap-6')}>
      {title && <h3 className="text-xs text-muted-foreground">{title}</h3>}
      <ul
        className={cn('flex min-w-40 xl:min-w-50', {
          'flex-col gap-4': direction === 'vertical',
          'flex-row gap-2': direction === 'horizontal',
        })}
      >
        {links.map((link: LinkType) => (
          <Button
            key={link.href}
            asChild
            className="font-medium"
            size="s"
            variant="link"
          >
            <li>
              <Link
                href={link.href}
                target={link.target}
              >
                {renderLabel(link)}
              </Link>
            </li>
          </Button>
        ))}
      </ul>
    </nav>
  );
};

export { GroupLinks };

