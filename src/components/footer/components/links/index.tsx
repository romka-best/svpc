import { CommonLink } from '@/components/ui/common/link';
import { Link } from '@/constants/links';
import { cn } from '@/lib/utils';

interface Props {
  links: Link[];
  title?: string;
  direction?: 'horizontal' | 'vertical';
}

const FooterLinks = (
  {
    links,
    title,
    direction = 'vertical',
  }: Props,
) => {
  return (
    <nav className="flex flex-col gap-6">
      {title && <h3 className="text-xs text-muted-foreground">{title}</h3>}
      <ul
        className={cn('flex min-w-40 xl:min-w-50', {
          'flex-col gap-4': direction === 'vertical',
          'flex-row gap-2': direction === 'horizontal',
        })}
      >
        {links.map((link) => (
          <li
            key={link.href}
            className="w-max"
          >
            <CommonLink
              link={link}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { FooterLinks };
