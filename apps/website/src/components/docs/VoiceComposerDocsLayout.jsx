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
        eyebrow: 'Voice Composer for macOS',
        title: 'Interested in early access?',
        description:
          'Voice Composer is in active development for macOS. Contact Bacumi if you want to follow release updates or join a preview.',
        linkText: 'Contact Bacumi',
        href: '/contact'
      }}
    >
      {children}
    </ProductDocsLayout>
  );
};

export default VoiceComposerDocsLayout;
