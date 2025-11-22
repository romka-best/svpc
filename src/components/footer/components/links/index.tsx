import { Link as LinkComponent } from '@/components/ui/base/link';
import { Link as LinkType } from '@/constants/links';
import { cn } from '@/lib/utils';

interface Props {
  links: LinkType[];
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
            <LinkComponent
              link={link}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { FooterLinks };
