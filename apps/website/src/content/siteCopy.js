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
    subtitle: 'Local Dictation & Speech Intelligence',
    track: 'Local AI',
    stage: 'Coming Soon',
    description: 'Turn spoken thoughts into structured, editable text on your Mac.',
    detailedDescription:
      'Fast, local-first dictation utility designed for professionals who think faster than they type. Converts spoken thoughts into clean, formatted text in English and Romanian with embedded Whisper speech recognition—running 100% on-device with zero cloud dependencies.',
    features: [
      'Embedded Whisper speech recognition (English & Romanian)',
      'Global hotkey with Hold-to-Talk and Toggle modes',
      'Floating visualizer HUD and instant text insertion',
      'Zero cloud dependency — microphone audio stays local'
    ],
    appStoreUrl: '#'
  },
  {
    key: 'screenshot-search',
    title: 'Screenshot Search',
    subtitle: 'Visual & Text OCR Retrieval',
    track: 'Local AI',
    stage: 'Coming Soon',
    description: 'Find screenshots by their visual content and the text they contain.',
    detailedDescription:
      'On-device OCR and visual indexer that makes your screenshot library instantly searchable. Find images by keywords, code snippets, UI elements, or dates without uploading anything to the cloud.',
    features: [
      'High-performance on-device Apple Vision OCR',
      'Instant search by visual content and text in images',
      'Privacy-first local index with zero telemetry'
    ],
    appStoreUrl: '#'
  },
  {
    key: 'audio-inbox',
    title: 'Audio Inbox',
    subtitle: 'Voice Note Inbox & Processing',
    track: 'Audio',
    stage: 'Coming Soon',
    description: 'Capture, organize, and process short voice notes in one focused workspace.',
    detailedDescription:
      'A dedicated menu-bar inbox for quickly capturing audio memos on the fly. Automatically transcribes voice notes locally and formats them into structured bullet points ready for your notes or task manager.',
    features: [
      'Quick menu bar capture with global shortcut',
      'Automated local transcription and action item tagging',
      'Direct export to Markdown, Apple Notes, and Obsidian'
    ],
    appStoreUrl: '#'
  },
  {
    key: 'clipboard-intelligence',
    title: 'Clipboard Intelligence',
    subtitle: 'Private Clipboard History',
    track: 'Productivity',
    stage: 'Coming Soon',
    description: 'Organize clipboard history and make frequently reused content easier to find.',
    detailedDescription:
      'Private, encrypted clipboard history manager with smart categorization. Re-use snippets, code fragments, color codes, and links with instant fuzzy search and automatic secret scrubbing.',
    features: [
      'Encrypted local history with sensitive token scrubbing',
      'Smart categorization for code, links, colors, and text',
      'Instant fuzzy search and paste preview'
    ],
    appStoreUrl: '#'
  },
  {
    key: 'semantic-file-search',
    title: 'Semantic File Search',
    subtitle: 'On-Device Semantic Search',
    track: 'Local AI',
    stage: 'Coming Soon',
    description: 'Search local files by meaning when exact filenames and keywords are not enough.',
    detailedDescription:
      'Local semantic search over your folders, PDFs, and notes powered by lightweight on-device vector embeddings. Ask questions in natural language to find the exact paragraph you need.',
    features: [
      'On-device neural vector embeddings without internet access',
      'Indexes Markdown, PDF, TXT, and DOCX files',
      'Fast natural language querying with relevance scoring'
    ],
    appStoreUrl: '#'
  },
  {
    key: 'workspace-manager',
    title: 'Workspace Manager',
    subtitle: 'Window & Context Orchestration',
    track: 'Productivity',
    stage: 'Coming Soon',
    description: 'Open and manage repeatable project workspaces with less setup friction.',
    detailedDescription:
      'Save, organize, and restore desktop window layouts, project environments, terminal sessions, and browser tabs for specific workflows with a single shortcut.',
    features: [
      'One-click workspace restoration and window positioning',
      'Multi-display layout preset support',
      'Terminal and developer tool orchestration'
    ],
    appStoreUrl: '#'
  },
  {
    key: 'developer-scratchpad',
    title: 'Developer Scratchpad',
    subtitle: 'Developer Text Transformations',
    track: 'Developer',
    stage: 'Coming Soon',
    description: 'Keep temporary code, commands, notes, and transformations close at hand.',
    detailedDescription:
      'A fast floating scratchpad tailored for software developers. Format JSON, decode JWTs, test regular expressions, convert timestamps, and transform text without opening an external web tool.',
    features: [
      'Built-in offline tools: JSON format, JWT decode, Base64, Regex',
      'Persistent multi-tab buffers that survive app restarts',
      'Syntax highlighting for over 30 languages'
    ],
    appStoreUrl: '#'
  },
  {
    key: 'menu-bar-automations',
    title: 'Menu Bar Automations',
    subtitle: 'Menu Bar Script Runner',
    track: 'Automation',
    stage: 'Coming Soon',
    description: 'Run small, repeatable local workflows directly from the macOS menu bar.',
    detailedDescription:
      'Execute frequent shell scripts, automations, webhooks, and local commands directly from a lightweight menu bar icon with real-time feedback and execution history.',
    features: [
      'One-click execution of custom shell and AppleScript workflows',
      'Configurable keyboard shortcuts and notification alerts',
      'Sandboxed execution environment with detailed logs'
    ],
    appStoreUrl: '#'
  },
  {
    key: 'smart-file-renamer',
    title: 'Smart File Renamer',
    subtitle: 'Batch File Renaming & Undo',
    track: 'Productivity',
    stage: 'Coming Soon',
    description: 'Preview and apply consistent names to groups of local files.',
    detailedDescription:
      'Batch rename photos, documents, and media files with live interactive previews, regex pattern matching, sequence numbering, and full one-click undo support.',
    features: [
      'Interactive multi-file preview before changes are committed',
      'Metadata extraction from EXIF photos and ID3 audio tags',
      'Full reversible undo history'
    ],
    appStoreUrl: '#'
  },
  {
    key: 'drop-zone-file-converter',
    title: 'Drop Zone / File Converter',
    subtitle: 'Drag & Drop Format Converter',
    track: 'Productivity',
    stage: 'Coming Soon',
    description: 'Convert common file formats through a simple drag-and-drop workflow.',
    detailedDescription:
      'A floating desktop drop zone for instantly converting image formats (PNG, WebP, AVIF, SVG), audio, and documents locally on your Mac with zero file uploads.',
    features: [
      'Instant drag-and-drop file format conversions',
      '100% offline and secure local processing',
      'Customizable compression and quality presets'
    ],
    appStoreUrl: '#'
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
