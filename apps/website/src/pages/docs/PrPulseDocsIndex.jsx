import React from 'react';
import { Link } from 'react-router-dom';
import DocsLayout from '../../components/docs/DocsLayout';

const PrPulseDocsIndex = () => (
  <DocsLayout>
    <h1>PR Pulse Documentation</h1>

    <p>
      Bacumi currently offers one publicly available Azure DevOps extension: <strong>PR Pulse</strong>.
      Two free extensions, <Link to="/docs/treefold">Treefold</Link> and{' '}
      <Link to="/docs/tagfold">Tagfold</Link>, are coming soon to the Visual Studio Marketplace. This
      documentation focuses on using PR Pulse inside Azure DevOps.
    </p>

    <h2>Who This Is For</h2>
    <p>
      PR Pulse is built for Azure DevOps extension users who need fast visibility into pull request
      flow across repositories in their current project.
    </p>

    <h2>Getting Started</h2>
    <ol>
      <li>
        Install <strong>PR Pulse</strong> from the{' '}
        <a href="https://marketplace.visualstudio.com/items?itemName=bacumi.pr-pulse" target="_blank" rel="noopener noreferrer">
          Visual Studio Marketplace
        </a>.
      </li>
      <li>Open <strong>Repos → PR Pulse</strong> in any project.</li>
      <li>Use these pages to understand the available views, filters, and workflows.</li>
    </ol>

    <h2>Privacy and Security</h2>
    <p>
      PR Pulse uses the read-only <code>vso.code</code> scope. Pull request data is read from your Azure
      DevOps organization with your own sign-in and rendered in your browser. Nothing is sent to Bacumi,
      and PR Pulse has no Bacumi backend.
    </p>
    <p>
      PR Pulse does not collect usage analytics. The only thing it remembers is your column widths, stored
      in your browser&apos;s local storage. See the <Link to="/legal/privacy">Privacy Policy</Link> for
      details.
    </p>
  </DocsLayout>
);

export default PrPulseDocsIndex;
