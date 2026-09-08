import type { Metadata } from 'next';

import { LegalPage } from '@/components/legal-document/page';

import {
  PRIVACY_POLICY_SECTIONS,
  PRIVACY_POLICY_UPDATED_ON,
} from './constants';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Silicon Valley Private Circle collects, uses, and protects personal information for private Silicon Valley tours in the San Francisco Bay Area.',
};

const PrivacyPolicyPage = () => {
  return (
    <LegalPage
      sections={PRIVACY_POLICY_SECTIONS}
      title="Privacy Policy"
      updatedOn={PRIVACY_POLICY_UPDATED_ON}
    />
  );
};

export default PrivacyPolicyPage;
