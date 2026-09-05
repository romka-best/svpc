import { REVIEWS } from './constants';

export const wrapReviewIndex = (index: number) => {
  const count = REVIEWS.length;

  return ((index % count) + count) % count;
};

export const getReviewInitials = (author: string) => {
  const parts = author
    .trim()
    .split(/\s+/)
    .filter((part) => {
      return !/^(and|&)$/i.test(part);
    });

  if (parts.length < 2) {
    return (parts[0]?.[0] ?? '').toUpperCase();
  }

  return `${parts[0]?.[0] ?? ''}${parts.at(-1)?.[0] ?? ''}`.toUpperCase();
};
