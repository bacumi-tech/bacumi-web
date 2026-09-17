export const defaultPageMetadata = {
  title: 'Bacumi | Work Better, Perform Better',
  description: 'Bacumi builds practical software for focused business and desktop workflows.'
};

const exactMetadata = {
  '/': defaultPageMetadata,
  '/products': {
    title: 'Products | Bacumi',
    description: 'Explore Bacumi business software and desktop products with clear delivery stages.'
  },
  '/products/business-software': {
    title: 'Business Software | Bacumi',
    description: 'Explore PR Pulse, PR Pulse Pro, and Company Verify from Bacumi.'
  },
  '/products/desktop-apps': {
    title: 'Desktop Apps | Bacumi',
    description: 'Learn about Voice Composer and Bacumi’s native Mac app portfolio.'
  },
  '/products/pulse': {
    title: 'PR Pulse | Bacumi',
    description: 'Pull request visibility and team workload signals for Azure DevOps.'
  },
  '/products/pr-pulse-pro': {
    title: 'PR Pulse Pro | Bacumi',
    description: 'Learn about planned PR Pulse Pro flow intelligence and apply for early access.'
  },
  '/products/treefold': {
    title: 'Treefold | Bacumi',
    description: 'Export Azure Boards queries to Excel with the hierarchy intact. A free Azure DevOps extension, coming soon.'
  },
  '/products/tagfold': {
    title: 'Tagfold | Bacumi',
    description: 'Rename, merge, and clean up Azure DevOps work item tags safely. A free Azure DevOps extension, coming soon.'
  },
  '/products/company-verify': {
    title: 'Company Verify | Bacumi',
    description: 'Learn about the planned Romania and VIES verification workflow.'
  },
  '/pricing': {
    title: 'Pricing | Bacumi',
    description: 'Review current Bacumi product pricing and future program stages.'
  },
  '/contact': {
    title: 'Contact | Bacumi',
    description: 'Contact Bacumi about product support, sales, or partnerships.'
  },
  '/pilots': {
    title: 'Pilot Applications | Bacumi',
    description: 'Apply for consideration for a Bacumi product pilot or design-partner program.'
  },
  '/about': {
    title: 'About | Bacumi',
    description: 'Learn about Bacumi SRL and our approach to focused software products.'
  },
  '/legal/privacy': {
    title: 'Privacy Policy | Bacumi',
    description: 'How Bacumi SRL handles website, contact, and pilot application data.'
  },
  '/legal/terms': {
    title: 'Terms of Service | Bacumi',
    description: 'Terms for Bacumi websites and services.'
  },
  '/legal/gdpr': {
    title: 'GDPR Information | Bacumi',
    description: 'Privacy rights and GDPR information for Bacumi.'
  },
  '/legal/trust': {
    title: 'Trust Center | Bacumi',
    description: 'Bacumi security, privacy, and public-claim practices.'
  }
};

export const getPageMetadata = (pathname) => {
  if (exactMetadata[pathname]) return { ...exactMetadata[pathname], indexable: true };
  if (pathname === '/docs' || pathname.startsWith('/docs/')) {
    return {
      title: 'Documentation | Bacumi',
      description: 'Product documentation and guides from Bacumi.',
      indexable: true
    };
  }
  return {
    title: 'Page Not Found | Bacumi',
    description: 'The requested Bacumi page could not be found.',
    indexable: false
  };
};

export const getCanonicalUrl = (pathname) =>
  `https://bacumi.com${pathname === '/' ? '/' : pathname}`;
