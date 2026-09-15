export const brand = {
  name: 'Bacumi',
  promise: 'Work better, perform better.',
  heroTitle: 'Focused software for people and organizations.',
  heroSubtitle:
    'Bacumi builds practical business software and focused desktop apps, starting with PR Pulse for Azure DevOps.',
  companySummary:
    'Bacumi SRL builds practical software that helps people and organizations work with greater clarity.'
};

export const productLines = [
  {
    key: 'business-software',
    to: '/products/business-software',
    title: 'Bacumi Business Software',
    eyebrow: 'For operational workflows',
    description:
      'Focused products for engineering operations and business verification, with explicit delivery stages.'
  },
  {
    key: 'desktop-apps',
    to: '/products/desktop-apps',
    title: 'Bacumi Desktop Apps',
    eyebrow: 'Native Mac apps',
    description:
      'Focused native Mac apps for individuals and organizations, beginning with Voice Composer in development.'
  }
];

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

export const desktopApps = [
  {
    key: 'voice-composer',
    title: 'Voice Composer',
    subtitle: 'Local Dictation & Speech Intelligence',
    track: 'Local AI',
    stage: 'In Development',
    description: 'Turn spoken thoughts into structured, editable text with local speech recognition.',
    detailedDescription:
      'Voice Composer is being developed as a focused dictation utility. Its current product direction is local speech recognition and an efficient path from spoken thoughts to editable text.',
    features: [
      'Local speech recognition',
      'A focused dictation workflow',
      'Editable output for everyday writing'
    ],
    pilotTo: '/pilots?product=voice-composer'
  }
];

export const navLinks = {
  main: [
    { to: '/products', label: 'Products' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/pilots', label: 'Pilots' },
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

export const companyStats = [
  { value: '1', label: 'Live product', detail: 'PR Pulse on Azure DevOps' },
  { value: '1', label: 'Public desktop app', detail: 'Voice Composer in development' },
  { value: '3', label: 'Business solutions', detail: 'Engineering & verification tracks' }
];

export const featuredProducts = [
  {
    key: 'pr-pulse',
    to: '/products/pulse',
    title: 'PR Pulse',
    subtitle: 'Pull Request Operations',
    description: 'Live multi-repository pull request visibility with personal execution views and team workload signals.',
    stage: 'Live',
    track: 'Engineering',
    platform: 'Azure DevOps',
    ctaLabel: 'View PR Pulse',
    externalHref: 'https://marketplace.visualstudio.com/items?itemName=bacumi.pr-pulse'
  },
  {
    key: 'voice-composer',
    to: '/products/desktop-apps',
    title: 'Voice Composer',
    subtitle: 'Local Dictation & Speech Intelligence',
    description: 'A focused dictation utility being developed as part of the Bacumi Mac app portfolio.',
    stage: 'In Development',
    track: 'Local AI',
    platform: 'Desktop',
    ctaLabel: 'Learn more',
    docsTo: '/docs/voice-composer'
  }
];

export const navProductMenu = {
  business: {
    title: 'Business Software',
    to: '/products/business-software',
    items: solutions.map(({ key, to, title, subtitle, stage }) => ({ key, to, title, subtitle, stage }))
  },
  desktop: {
    title: 'Desktop Apps',
    to: '/products/desktop-apps',
    items: [
      { key: 'voice-composer', to: '/products/desktop-apps', title: 'Voice Composer', subtitle: 'Local dictation', docsTo: '/docs/voice-composer' }
    ]
  },
  resources: [
    { to: '/docs', title: 'Documentation hub', subtitle: 'All product guides' },
    { to: '/docs/pr-pulse', title: 'PR Pulse docs', subtitle: 'Azure DevOps extension' },
    { to: '/docs/voice-composer', title: 'Voice Composer docs', subtitle: 'Desktop dictation app' }
  ]
};

export const contacts = {
  support: 'support@bacumi.com',
  sales: 'sales@bacumi.com',
  location: 'Romania, European Union',
  linkedin: 'https://www.linkedin.com/company/bacumi',
  github: 'https://github.com/bacumi-tech',
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
