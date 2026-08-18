import type { ContactMethod } from '../../../types';

export const CONTACT_METHODS: readonly {
  id: ContactMethod;
  label: string;
  placeholder: string;
}[] = [
  {
    id: 'email',
    label: 'Email',
    placeholder: 'Email',
  },
  {
    id: 'phone',
    label: 'Phone',
    placeholder: 'Phone',
  },
  {
    id: 'telegram',
    label: 'Telegram',
    placeholder: 'Telegram',
  },
];

export const CONTACT_VALIDATION: Record<ContactMethod, RegExp> = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
  phone: /^\+?[\d\s().-]{7,20}$/,
  telegram: /^@?[a-zA-Z0-9_]{5,32}$/,
};

export const isContactValueValid = (
  method: ContactMethod,
  value: string,
) => {
  const trimmed = value.trim();

  if (!trimmed) {
    return false;
  }

  return CONTACT_VALIDATION[method].test(trimmed);
};
