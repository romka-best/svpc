import type { Metadata } from 'next';

import { LegalPage } from '@/components/legal-document/page';

import {
  TERMS_SECTIONS,
  TERMS_UPDATED_ON,
} from './constants';

export const metadata: Metadata = {
  title: 'Terms',
  description:
    'Booking, payment, cancellation, and tour terms for Silicon Valley Private Circle private tours in the San Francisco Bay Area.',
};

const TermsPage = () => {
  return (
    <LegalPage
      sections={TERMS_SECTIONS}
      title="Terms"
      updatedOn={TERMS_UPDATED_ON}
    />
  );
};

export default TermsPage;
