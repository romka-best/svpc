'use client';

import {
  createContext,
  useContext,
} from 'react';

import { cn } from '@/lib/utils';

import type {
  EmptyContentProps,
  EmptyContextValue,
  EmptyDescriptionProps,
  EmptyHeaderProps,
  EmptyMediaProps,
  EmptyProps,
  EmptyTitleProps,
} from './types';
import {
  emptyContentVariants,
  emptyDescriptionVariants,
  emptyMediaVariants,
  emptyTitleVariants,
  emptyVariants,
} from './variants';

const EmptyContext = createContext<EmptyContextValue | null>(null);

const useEmptyContext = () => {
  return useContext(EmptyContext);
};

const Empty = ({
  className,
  variant,
  size = 'md',
  ...props
}: EmptyProps) => {
  return (
    <EmptyContext.Provider value={{ size: size ?? 'md' }}>
      <div
        className={cn(emptyVariants({
          variant,
          size,
        }), className)}
        data-slot="empty"
        {...props}
      />
    </EmptyContext.Provider>
  );
};

const EmptyHeader = ({
  className,
  size,
  ...props
}: EmptyHeaderProps) => {
  const context = useEmptyContext();
  const effectiveSize = size ?? context?.size ?? 'md';

  return (
    <div
      className={cn(
        'flex max-w-sm flex-col items-center text-center',
        effectiveSize === 'sm' && 'gap-1',
        effectiveSize === 'md' && 'gap-2',
        effectiveSize === 'lg' && 'gap-3',
        className,
      )}
      data-slot="empty-header"
      {...props}
    />
  );
};

const EmptyMedia = ({
  className,
  variant = 'icon',
  size,
  ...props
}: EmptyMediaProps) => {
  const context = useEmptyContext();
  const effectiveSize = size ?? context?.size ?? 'md';

  return (
    <div
      className={cn(emptyMediaVariants({
        variant,
        size: effectiveSize,
      }), className)}
      data-slot="empty-media"
      {...props}
    />
  );
};

const EmptyTitle = ({
  className,
  size,
  ...props
}: EmptyTitleProps) => {
  const context = useEmptyContext();
  const effectiveSize = size ?? context?.size ?? 'md';

  return (
    <div
      className={cn(emptyTitleVariants({ size: effectiveSize }), className)}
      data-slot="empty-title"
      {...props}
    />
  );
};

const EmptyDescription = ({
  className,
  size,
  ...props
}: EmptyDescriptionProps) => {
  const context = useEmptyContext();
  const effectiveSize = size ?? context?.size ?? 'md';

  return (
    <div
      className={cn(emptyDescriptionVariants({ size: effectiveSize }), className)}
      data-slot="empty-description"
      {...props}
    />
  );
};

const EmptyContent = ({
  className,
  size,
  ...props
}: EmptyContentProps) => {
  const context = useEmptyContext();
  const effectiveSize = size ?? context?.size ?? 'md';

  return (
    <div
      className={cn(emptyContentVariants({ size: effectiveSize }), className)}
      data-slot="empty-content"
      {...props}
    />
  );
};

export {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
};
