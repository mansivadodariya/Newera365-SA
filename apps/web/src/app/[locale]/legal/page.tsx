import { setRequestLocale } from 'next-intl/server';
import { LegalPage, CtaBanner } from '@newera365/ui';
import type { Metadata } from 'next';
import { SA_LEGAL_DOCUMENTS } from '@/data/saLegalPolicies';

interface Props {
  params: { locale: string };
}

export const metadata: Metadata = {
  title: 'Legal Documents & Policies',
  description:
    'Complaints Management Framework, Conflict of Interest Policy, Risk Management Policy, AML Policy, and Disaster Recovery Plan.',
};

export default async function LegalRoute({ params }: Props) {
  setRequestLocale(params.locale);
  return (
    <>
      <LegalPage documents={SA_LEGAL_DOCUMENTS} />
      <CtaBanner />
    </>
  );
}
