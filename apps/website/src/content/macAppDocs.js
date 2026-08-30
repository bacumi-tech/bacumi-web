export const voiceComposerDocs = [
  { path: '/docs/voice-composer', label: 'Introduction' },
  { path: '/docs/voice-composer/getting-started', label: 'Getting Started' },
  { path: '/docs/voice-composer/dictation-workflow', label: 'Dictation Workflow' },
  { path: '/docs/voice-composer/settings', label: 'Settings & Menu Bar' },
  { path: '/docs/voice-composer/privacy', label: 'Privacy & Local Processing' }
];

export const developerScratchpadDocs = [
  { path: '/docs/developer-scratchpad', label: 'Introduction' },
  { path: '/docs/developer-scratchpad/getting-started', label: 'Getting Started' },
  { path: '/docs/developer-scratchpad/tools', label: 'Transformation Tools' },
  { path: '/docs/developer-scratchpad/themes', label: 'Themes & Workspace' },
  { path: '/docs/developer-scratchpad/privacy', label: 'Privacy & Offline Operation' }
];

export const documentationProducts = [
  {
    key: 'pr-pulse',
    title: 'PR Pulse',
    description: 'Azure DevOps pull request visibility, filters, and team insights.',
    to: '/docs/pr-pulse',
    platform: 'Azure DevOps extension'
  },
  {
    key: 'voice-composer',
    title: 'Voice Composer',
    description: 'Local-first macOS dictation with review, formatting, and text insertion.',
    to: '/docs/voice-composer',
    platform: 'macOS app'
  },
  {
    key: 'developer-scratchpad',
    title: 'Developer Scratchpad',
    description: 'Offline developer transformations, tabs, and deterministic utilities.',
    to: '/docs/developer-scratchpad',
    platform: 'macOS app'
  }
];

export const getAdjacentDocsFor = (docs, path) => {
  const currentIndex = docs.findIndex((doc) => doc.path === path);

  if (currentIndex === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: docs[currentIndex - 1] ?? null,
    next: docs[currentIndex + 1] ?? null
  };
};

export const getAdjacentVoiceComposerDocs = (path) => getAdjacentDocsFor(voiceComposerDocs, path);

export const getAdjacentDeveloperScratchpadDocs = (path) =>
  getAdjacentDocsFor(developerScratchpadDocs, path);
