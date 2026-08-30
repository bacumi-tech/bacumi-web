import React from 'react';
import { useLocation } from 'react-router-dom';
import ProductDocsLayout from './ProductDocsLayout';
import { getAdjacentDocs, prPulseDocs } from '../../content/prPulseDocs';

const marketplaceUrl = 'https://marketplace.visualstudio.com/items?itemName=bacumi.pr-pulse';

const DocsLayout = ({ children }) => {
  const location = useLocation();
  const pagination = getAdjacentDocs(location.pathname);

  return (
    <ProductDocsLayout
      docsNav={prPulseDocs}
      productLabel="PR Pulse"
      docsRootPath="/docs/pr-pulse"
      mobileSelectId="pr-pulse-docs-select"
      mobileSelectLabel="Browse PR Pulse documentation"
      pagination={pagination}
      installCta={{
        eyebrow: 'PR Pulse for Azure DevOps',
        title: 'Ready to use PR Pulse?',
        description:
          'Install the extension from the Visual Studio Marketplace and open it in your Azure DevOps project.',
        linkText: 'Install from Marketplace',
        href: marketplaceUrl,
        external: true
      }}
    >
      {children}
    </ProductDocsLayout>
  );
};

export default DocsLayout;
