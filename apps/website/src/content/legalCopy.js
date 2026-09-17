import { contacts } from './siteCopy';

export const legalMeta = {
  privacyLastUpdated: 'September 17, 2026',
  termsLastUpdated: 'August 24, 2026',
  gdprLastUpdated: 'August 24, 2026'
};

export const legalEntity = {
  displayName: 'Bacumi SRL',
  status: 'Romanian limited liability company',
  contactEmail: contacts.support,
  jurisdiction: 'Romania and applicable European Union law'
};

export const privacySections = {
  scope:
    'This Privacy Policy describes how Bacumi SRL handles personal data when you use our website, contact us, apply for a pilot, or use our Azure DevOps extensions.',
  dataCategories: [
    'Contact messages may include your email address, name, selected category or product, and the message you choose to send.',
    'Pilot applications may include your email address, name, company, selected product, platform, use case, and acknowledgement that we may contact you about the application.',
    'Limited technical data used to secure the forms and diagnose failures, such as request time and a protected identifier derived from a trusted client address.'
  ],
  legalBases: [
    'Steps taken at your request, when you ask about a product or possible commercial relationship.',
    'Legitimate interests, such as responding to enquiries, evaluating product demand, service reliability, abuse prevention, and support operations.',
    'Legal obligations, where retention or disclosure is required by applicable law.',
    'Consent, where it is the appropriate basis for a specific processing activity. Pilot contact permission applies only to that application and is not marketing consent.'
  ],
  purposes: [
    'Respond to contact messages and support requests.',
    'Review pilot applications, assess suitability, and contact selected applicants.',
    'Understand demand for published Bacumi products and programs.',
    'Protect the forms from abuse and maintain short-lived diagnostic records.'
  ],
  retention:
    'Contact messages are scheduled for deletion within 180 days and pilot applications within 365 days, unless an earlier deletion is appropriate or a legal obligation requires longer retention. Form abuse counters expire within 24 hours and application diagnostic events within 30 days.',
  subprocessors:
    'Website form submissions are processed using Microsoft Azure hosting and storage services. Azure Communication Services may send a limited internal notification containing a submission type, product or category, and reference. The notification does not include the message, use case, or email address.',
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
    'To exercise privacy rights, contact support@bacumi.com. We may request verification to protect account security.',
  azureDevOpsExtensions: {
    intro:
      'This section covers the Bacumi extensions for Azure DevOps: PR Pulse, available on the Visual Studio Marketplace, and Treefold and Tagfold, which are coming soon. These extensions run in your browser, inside your own Azure DevOps organization.',
    practices: [
      "The extensions call your own Azure DevOps organization's APIs with the signed-in user's Azure DevOps sign-in and permissions. They can only read or change what that user is already allowed to access.",
      'Bacumi does not operate a server for these extensions. Bacumi does not receive pull request, work item, query, or tag data from them.',
      'The extensions do not collect usage analytics or telemetry.',
      'Treefold workbooks are generated in your browser and saved to your own device.'
    ],
    permissions: [
      'PR Pulse requests vso.code, read-only access to repositories and pull requests.',
      'Treefold requests vso.work, read-only access to work items and queries.',
      'Tagfold requests vso.work_write, read and write access to work items, used to rename, merge, and delete tags.'
    ],
    storage: [
      "PR Pulse remembers your column widths in your browser's local storage on your device.",
      'Treefold remembers your export choices (columns per query, hierarchy layout, and rich-text option) in Azure DevOps extension data storage, scoped to your user and kept within your Azure DevOps organization.',
      'Tagfold does not store preferences.'
    ],
    microsoft:
      'Azure DevOps and the Visual Studio Marketplace are operated by Microsoft, which processes data in those services under its own terms and privacy statement.',
    support:
      'If you contact support@bacumi.com about an extension, we handle the information you choose to send as support and communications data under this policy.'
  }
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
