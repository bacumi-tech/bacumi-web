import React from 'react';
import { useLocation } from 'react-router-dom';
import ProductDocsLayout from './ProductDocsLayout';
import { getAdjacentDocs, prPulseDocs } from '../../content/prPulseDocs';
import { tagfoldDocs, treefoldDocs } from '../../content/extensionDocs';
import { getAdjacentDocsFor } from '../../content/macAppDocs';

const marketplaceUrl = 'https://marketplace.visualstudio.com/items?itemName=bacumi.pr-pulse';

const comingSoonCta = (productLabel) => ({
  eyebrow: `${productLabel} for Azure DevOps`,
  title: 'Coming soon to the Visual Studio Marketplace',
  description: `${productLabel} is free and not yet published. Contact Bacumi if you want to know when it is available.`,
  linkText: 'Contact Bacumi',
  href: '/contact'
});

const docsProducts = {
  'pr-pulse': {
    docsNav: prPulseDocs,
    productLabel: 'PR Pulse',
    docsRootPath: '/docs/pr-pulse',
    getPagination: getAdjacentDocs,
    installCta: {
      eyebrow: 'PR Pulse for Azure DevOps',
      title: 'Ready to use PR Pulse?',
      description:
        'Install the extension from the Visual Studio Marketplace and open it in your Azure DevOps project.',
      linkText: 'Install from Marketplace',
      href: marketplaceUrl,
      external: true
    }
  },
  treefold: {
    docsNav: treefoldDocs,
    productLabel: 'Treefold',
    docsRootPath: '/docs/treefold',
    getPagination: (path) => getAdjacentDocsFor(treefoldDocs, path),
    installCta: comingSoonCta('Treefold')
  },
  tagfold: {
    docsNav: tagfoldDocs,
    productLabel: 'Tagfold',
    docsRootPath: '/docs/tagfold',
    getPagination: (path) => getAdjacentDocsFor(tagfoldDocs, path),
    installCta: comingSoonCta('Tagfold')
  }
};

const DocsLayout = ({ children, product = 'pr-pulse' }) => {
  const location = useLocation();
  const config = docsProducts[product] ?? docsProducts['pr-pulse'];
  const docsKey = product in docsProducts ? product : 'pr-pulse';

  return (
    <ProductDocsLayout
      docsNav={config.docsNav}
      productLabel={config.productLabel}
      docsRootPath={config.docsRootPath}
      mobileSelectId={`${docsKey}-docs-select`}
      mobileSelectLabel={`Browse ${config.productLabel} documentation`}
      pagination={config.getPagination(location.pathname)}
      installCta={config.installCta}
    >
      {children}
    </ProductDocsLayout>
  );
};

export default DocsLayout;
