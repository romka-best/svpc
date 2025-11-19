'use client';

import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'motion/react';

import {
  buttonVariants,
  motionButtonAnimation,
} from '@/components/ui/button';
import { Link as LinkType } from '@/constants/links';
import { cn } from '@/lib/utils';

interface Props {
  link: LinkType;
}

const CommonLink = ({ link }: Props) => {
  return (
    <Link
      href={link.href}
      target={link.target}
    >
      <motion.span
        {...motionButtonAnimation}
        className={cn(
          buttonVariants({
            size: 's',
            variant: 'link',
          }),
          'font-medium will-change-transform will-change-filter inline-flex',
        )}
      >
        {link.icon && (
          <Image
            alt={link.alt || ''}
            height={32}
            src={link.icon}
            width={32}
          />
        )}
        {link.label && (
          link.label
        )}
      </motion.span>
    </Link>
  );
};

export { CommonLink };
