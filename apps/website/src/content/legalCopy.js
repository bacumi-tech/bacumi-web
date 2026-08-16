import { contacts } from './siteCopy';

export const legalMeta = {
  privacyLastUpdated: 'August 16, 2026',
  termsLastUpdated: 'August 16, 2026',
  gdprLastUpdated: 'August 16, 2026'
};

export const legalEntity = {
  displayName: 'Bacumi',
  status: 'Pre-incorporation product project',
  contactEmail: contacts.support,
  jurisdiction: 'Romania and applicable European Union law'
};

export const privacySections = {
  scope:
    'This interim Privacy Policy describes how the Bacumi pre-incorporation product project handles personal data when you use our website and support channels.',
  dataCategories: [
    'Account and contact data you provide to us, such as name, work email, and organization details.',
    'Service usage metadata needed to operate and support our services, such as request timestamps, feature usage events, and error logs.',
    'Support and communications data when you contact us for product, billing, or technical support.'
  ],
  legalBases: [
    'Performance of a contract, when data is required to provide requested services.',
    'Legitimate interests, such as service reliability, abuse prevention, and support operations.',
    'Legal obligations, where retention or disclosure is required by applicable law.',
    'Consent, when consent is required by law for specific processing activities.'
  ],
  purposes: [
    'Operate, secure, and improve Bacumi products and services.',
    'Respond to support requests and service inquiries.',
    'Manage customer relationships, billing, and contractual obligations.',
    'Maintain logs for security, diagnostics, and service continuity.'
  ],
  retention:
    'We retain personal data only for as long as needed for the purposes above, plus any legally required retention period. Retention windows vary by data type and contractual obligations.',
  subprocessors:
    'We may rely on third-party infrastructure, observability, communication, and payment providers. Subprocessor usage depends on product configuration and contractual setup. Details are provided on request or in contractual documentation.',
  transfers:
    'Where personal data is transferred outside the EEA, Bacumi applies appropriate safeguards required by applicable data protection law, such as contractual safeguards.',
  rights: [
    'Access and receive a copy of your personal data.',
    'Request correction of inaccurate personal data.',
    'Request deletion where legal grounds apply.',
    'Object to processing or request processing restrictions where applicable.',
    'Request portability where legally applicable.',
    'Lodge a complaint with a supervisory authority.'
  ],
  rightsContact:
    'To exercise privacy rights, contact support@bacumi.com. We may request verification to protect account security.'
};

export const termsSections = {
  acceptance:
    'By accessing or using Bacumi websites or services, you agree to these Terms and to applicable law.',
  serviceStatus:
    'Product availability and service commitments depend on plan, launch stage, and contractual agreement. Public product pages describe current status (for example: Live, Coming Soon, Design Partner).',
  commercial:
    'Commercial terms, service levels, support commitments, and data processing obligations are defined in signed commercial agreements where applicable.',
  acceptableUse:
    'You agree not to misuse Bacumi services, attempt unauthorized access, interfere with service operations, or violate applicable laws.',
  ip:
    'Bacumi and its licensors retain all rights in service software, branding, and documentation, except rights explicitly granted to customers by agreement.',
  disclaimers:
    'Unless otherwise stated in a signed agreement, services are provided on an as-available basis.',
  liability:
    'To the extent permitted by law, Bacumi is not liable for indirect, incidental, or consequential damages arising from website use or service interruptions.',
  governingLaw:
    'These terms are governed by the laws of Romania and applicable European Union law.'
};

export const gdprSections = {
  overview:
    'Bacumi designs privacy and security controls to support GDPR obligations for our services and customers. Implementation details can vary by product configuration and contract scope.',
  commitments: [
    'Data minimization and purpose limitation in product and support workflows.',
    'Role-based access control and least-privilege operational practices.',
    'Operational processes for data subject request handling.',
    'Contractual data protection terms for customer engagements where applicable.'
  ],
  dsr:
    'Data subject requests can be submitted through support@bacumi.com. Bacumi validates requests and responds within applicable legal timelines.',
  residency:
    'Data hosting location depends on product architecture, deployment model, and contractual terms. Residency requirements are addressed during customer onboarding and contracting.'
};

export const trustSections = {
  accessModel:
    'Bacumi products request only the permissions needed for their documented function. Required scopes depend on product capabilities and customer configuration.',
  securityControls:
    'Security controls include access restriction, logging, secure development practices, and operational monitoring. Control depth depends on product stage and hosting model.',
  claimPolicy:
    'Bacumi publishes only claims that can be supported by current implementation or contractual documentation. We avoid unsupported certification or compliance statements on public pages.',
  incident:
    'Security concerns can be reported to support@bacumi.com. We triage and respond based on severity and customer impact.'
};
