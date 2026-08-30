import React from 'react';
import { useLocation } from 'react-router-dom';
import ProductDocsLayout from './ProductDocsLayout';
import { developerScratchpadDocs, getAdjacentDeveloperScratchpadDocs } from '../../content/macAppDocs';

const DeveloperScratchpadDocsLayout = ({ children }) => {
  const location = useLocation();

  return (
    <ProductDocsLayout
      docsNav={developerScratchpadDocs}
      productLabel="Developer Scratchpad"
      docsRootPath="/docs/developer-scratchpad"
      mobileSelectId="developer-scratchpad-docs-select"
      mobileSelectLabel="Browse Developer Scratchpad documentation"
      pagination={getAdjacentDeveloperScratchpadDocs(location.pathname)}
      installCta={{
        eyebrow: 'Developer Scratchpad for macOS',
        title: 'Interested in early access?',
        description:
          'Developer Scratchpad is in active development for macOS. Contact Bacumi if you want to follow release updates or join a preview.',
        linkText: 'Contact Bacumi',
        href: '/contact'
      }}
    >
      {children}
    </ProductDocsLayout>
  );
};

export default DeveloperScratchpadDocsLayout;
