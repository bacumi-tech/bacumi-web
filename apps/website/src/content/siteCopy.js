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
    eyebrow: 'macOS first',
    description:
      'Ten small, practical applications planned for individuals and organizations, each kept deliberately focused.'
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
    description: 'Turn spoken thoughts into structured, editable text on your Mac.'
  },
  {
    key: 'screenshot-search',
    title: 'Screenshot Search',
    description: 'Find screenshots by their visual content and the text they contain.'
  },
  {
    key: 'audio-inbox',
    title: 'Audio Inbox',
    description: 'Capture, organize, and process short voice notes in one focused workspace.'
  },
  {
    key: 'clipboard-intelligence',
    title: 'Clipboard Intelligence',
    description: 'Organize clipboard history and make frequently reused content easier to find.'
  },
  {
    key: 'semantic-file-search',
    title: 'Semantic File Search',
    description: 'Search local files by meaning when exact filenames and keywords are not enough.'
  },
  {
    key: 'workspace-manager',
    title: 'Workspace Manager',
    description: 'Open and manage repeatable project workspaces with less setup friction.'
  },
  {
    key: 'developer-scratchpad',
    title: 'Developer Scratchpad',
    description: 'Keep temporary code, commands, notes, and transformations close at hand.'
  },
  {
    key: 'menu-bar-automations',
    title: 'Menu Bar Automations',
    description: 'Run small, repeatable local workflows directly from the macOS menu bar.'
  },
  {
    key: 'smart-file-renamer',
    title: 'Smart File Renamer',
    description: 'Preview and apply consistent names to groups of local files.'
  },
  {
    key: 'drop-zone-file-converter',
    title: 'Drop Zone / File Converter',
    description: 'Convert common file formats through a simple drag-and-drop workflow.'
  }
];

export const navLinks = {
  main: [
    { to: '/products', label: 'Products' },
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
