import Link from 'next/link';

import { cn } from '@/lib/utils';

import {
  type LegalDocumentBlock,
  LegalDocumentBlockType,
  type LegalDocumentSection,
} from '../types';

const CONTACT_LINKS = [
  {
    href: 'mailto:me@romandanilov.com',
    value: 'me@romandanilov.com',
  },
  {
    href: 'https://t.me/roman_danilov',
    value: '@roman_danilov',
  },
] as const;

const CONTACT_PATTERN = new RegExp(
  `(${CONTACT_LINKS.map((link) => {
    return link.value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }).join('|')})`,
  'g',
);

interface LegalDocumentBlocksProps {
  blocks: LegalDocumentBlock[];
  size?: 'base' | 'sm';
}

interface LegalDocumentRichTextProps {
  text: string;
}

interface LegalDocumentSectionProps {
  section: LegalDocumentSection;
}

const LegalDocumentRichText = ({ text }: LegalDocumentRichTextProps) => {
  const parts = text.split(CONTACT_PATTERN);

  return (
    <>
      {parts.map((part, index) => {
        const contactLink = CONTACT_LINKS.find((link) => {
          return link.value === part;
        });

        if (!contactLink) {
          return part;
        }

        const isMailLink = contactLink.href.startsWith('mailto:');

        return (
          <Link
            key={`${contactLink.href}-${index}`}
            className="underline underline-offset-2"
            href={contactLink.href}
            rel={isMailLink ? undefined : 'noreferrer'}
            target={isMailLink ? undefined : '_blank'}
          >
            {contactLink.value}
          </Link>
        );
      })}
    </>
  );
};

const LegalDocumentBlocks = ({
  blocks,
  size = 'base',
}: LegalDocumentBlocksProps) => {
  const textClassName = size === 'sm'
    ? 'text-sm font-normal leading-normal tracking-[-0.03em] text-light-gray'
    : 'text-base font-normal leading-normal tracking-[-0.03em] text-light-gray';

  return (
    <>
      {blocks.map((block, index) => {
        if (block.type === LegalDocumentBlockType.Paragraph) {
          return (
            <p
              key={`${block.type}-${index}`}
              className={textClassName}
            >
              <LegalDocumentRichText text={block.text} />
            </p>
          );
        }

        return (
          <ul
            key={`${block.type}-${index}`}
            className={cn('list-disc space-y-2 pl-5', textClassName)}
          >
            {block.items.map((item) => {
              return (
                <li key={item}>
                  <LegalDocumentRichText text={item} />
                </li>
              );
            })}
          </ul>
        );
      })}
    </>
  );
};

const LegalDocumentSectionBlock = ({ section }: LegalDocumentSectionProps) => {
  return (
    <section className="flex w-full flex-col gap-5">
      <h2 className="text-2xl font-medium leading-[1.2] tracking-[-0.03em] text-white">
        {section.title}
      </h2>
      <LegalDocumentBlocks blocks={section.content} />
      {section.subsections?.map((subsection) => {
        return (
          <div
            key={subsection.title}
            className="flex w-full flex-col gap-5"
          >
            <h3 className="text-base font-medium leading-[1.2] tracking-[-0.03em] text-white">
              {subsection.title}
            </h3>
            <LegalDocumentBlocks
              blocks={subsection.content}
              size="sm"
            />
          </div>
        );
      })}
    </section>
  );
};

export { LegalDocumentSectionBlock };
