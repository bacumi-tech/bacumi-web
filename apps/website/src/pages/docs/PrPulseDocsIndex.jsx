import React from 'react';
import DocsLayout from '../../components/docs/DocsLayout';

const PrPulseDocsIndex = () => (
  <DocsLayout>
    <h1>PR Pulse Documentation</h1>

    <p>
      Bacumi currently offers one publicly available extension for users: <strong>PR Pulse</strong>.
      This documentation focuses on using PR Pulse inside Azure DevOps.
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
      <li>Open PR Pulse inside your Azure DevOps project.</li>
      <li>Use these pages to understand the available views, filters, and workflows.</li>
    </ol>

    <h2>Privacy and Security</h2>
    <p>
      The core PR Pulse dashboard is client-first and uses the read-only Azure DevOps code scope.
      It processes current-project pull request data in the extension without requiring a Bacumi
      backend for the core dashboard.
    </p>
    <p>
      Optional analytics initializes only when it is configured and supported by the browser. When
      enabled, it may transmit usage events and organization and project context. When it is not
      configured, analytics calls do not transmit those events.
    </p>
  </DocsLayout>
);

export default PrPulseDocsIndex;
