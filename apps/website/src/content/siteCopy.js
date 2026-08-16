export const brand = {
  name: 'Bacumi',
  promise: 'Work better, perform better.',
  heroTitle: 'Focused software for clearer business workflows.',
  heroSubtitle:
    'Bacumi builds practical products for engineering operations and business verification, starting with PR Pulse for Azure DevOps.',
  companySummary:
    'Bacumi builds practical software that helps teams improve execution, visibility, and decision clarity.'
};

export const solutionTracks = [
  {
    id: 'engineering',
    title: 'Engineering',
    description:
      'Pull request operations today, with bounded engineering flow intelligence planned next.',
    status: 'PR Pulse live'
  },
  {
    id: 'verification',
    title: 'Verification',
    description:
      'Excel-first company verification workflows being shaped with design partners.',
    status: 'Design partner track'
  }
];

export const solutions = [
  {
    key: 'pr-pulse',
    to: '/products/pulse',
    title: 'PR Pulse',
    subtitle: 'Pull Request Operations',
    description:
      'Live multi-repository pull request visibility with personal execution views and team workload signals.',
    stage: 'Live',
    track: 'Engineering',
    flagship: true
  },
  {
    key: 'pr-pulse-pro',
    to: '/products/pr-pulse-pro',
    title: 'PR Pulse Pro',
    subtitle: 'Engineering Flow Intelligence',
    description:
      'Historical flow metrics, stale-work policies, and weekly Teams digests for Azure DevOps organizations.',
    stage: 'Coming Soon',
    track: 'Engineering'
  },
  {
    key: 'company-verify',
    to: '/products/company-verify',
    title: 'Company Verify',
    subtitle: 'Romania and VIES Verification',
    description:
      'Excel-first company verification workflows for Romanian and EU business data.',
    stage: 'Design Partner',
    track: 'Verification'
  }
];

export const navLinks = {
  main: [
    { to: '/solutions', label: 'Solutions' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' }
  ],
  legal: [
    { to: '/legal/privacy', label: 'Privacy Policy' },
    { to: '/legal/terms', label: 'Terms of Service' },
    { to: '/legal/gdpr', label: 'GDPR Information' },
    { to: '/legal/trust', label: 'Trust Center' }
  ]
};

export const roadmap = {
  now: 'PR Pulse is live for Azure DevOps pull request operations. The shared product and Azure foundation is the next delivery milestone.',
  next: 'Planned sequence: Foundation → PR Pulse Pro → Company Verify. Future products move forward through explicit validation gates.'
};

export const contacts = {
  support: 'support@bacumi.com',
  sales: 'sales@bacumi.com',
  location: 'Romania, European Union',
  linkedin: 'https://www.linkedin.com/company/bacumi',
  github: 'https://github.com/bacumicom',
  x: 'https://x.com/bacumicom'
};

export const marketplace = {
  pulseInstall: 'https://marketplace.visualstudio.com/items?itemName=bacumi.pr-pulse',
  publisher: 'https://marketplace.visualstudio.com/publishers/bacumi'
};

export const claimsVocabulary = {
  allowed: [
    'live',
    'coming soon',
    'design partner',
    'planned',
    'designed to',
    'intended to',
    'depends on configuration'
  ],
  avoid: [
    'absolute-compliance wording',
    'unqualified-uptime promises',
    'unverified-certification labels',
    'absolute-data-handling promises'
  ]
};
