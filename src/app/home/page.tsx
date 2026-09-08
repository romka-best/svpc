import { redirect } from 'next/navigation';

interface HomeRedirectPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

const getRedirectPath = (searchParams: Record<string, string | string[] | undefined>) => {
  const query = new URLSearchParams();

  Object.entries(searchParams).forEach(([
    key,
    value,
  ]) => {
    if (typeof value === 'string') {
      query.set(key, value);
      return;
    }

    value?.forEach((item) => {
      query.append(key, item);
    });
  });

  const serializedQuery = query.toString();

  if (!serializedQuery) {
    return '/';
  }

  return `/?${serializedQuery}`;
};

export default async function HomeRedirectPage({ searchParams }: HomeRedirectPageProps) {
  redirect(getRedirectPath(await searchParams));
}
