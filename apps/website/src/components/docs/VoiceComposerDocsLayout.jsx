import React from 'react';
import { useLocation } from 'react-router-dom';
import ProductDocsLayout from './ProductDocsLayout';
import { getAdjacentVoiceComposerDocs, voiceComposerDocs } from '../../content/macAppDocs';

const VoiceComposerDocsLayout = ({ children }) => {
  const location = useLocation();

  return (
    <ProductDocsLayout
      docsNav={voiceComposerDocs}
      productLabel="Voice Composer"
      docsRootPath="/docs/voice-composer"
      mobileSelectId="voice-composer-docs-select"
      mobileSelectLabel="Browse Voice Composer documentation"
      pagination={getAdjacentVoiceComposerDocs(location.pathname)}
      installCta={{
        eyebrow: 'Voice Composer',
        title: 'Interested in the Voice Composer pilot?',
        description:
          'Voice Composer is in development. Apply to tell us about your dictation workflow and preferred platform.',
        linkText: 'Express pilot interest',
        href: '/pilots?product=voice-composer'
      }}
    >
      {children}
    </ProductDocsLayout>
  );
};

export default VoiceComposerDocsLayout;
