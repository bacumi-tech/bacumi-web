import React from 'react';
import DocsImage from '../../components/docs/DocsImage';
import DocsLayout from '../../components/docs/DocsLayout';

const PrDetailsDocs = () => (
  <DocsLayout>
    <h1>PR Details and Quick Actions</h1>

    <p>PR Pulse keeps detailed actions lightweight and native to Azure DevOps pull requests.</p>

    <DocsImage src="/images/pulse/checks-failed.png" alt="PR Pulse popover showing failed build and policy checks" />

    <h2>Current Interaction Model</h2>
    <p>PR Pulse does not use a dedicated in-app side panel today. Instead, it provides:</p>
    <ul>
      <li>direct links from the pull request ID and title to the Azure DevOps PR page</li>
      <li>a checks popover with build and enabled policy-check details</li>
      <li>a reviewer popover with reviewer votes and status</li>
      <li>a conflict indicator in the status column when merge conflicts are reported</li>
    </ul>

    <h2>Why This Model</h2>
    <ul>
      <li>It keeps the extension fast and focused on triage.</li>
      <li>It lets users perform deep review in the native Azure DevOps pull request page.</li>
      <li>It avoids duplicating a complex review interface inside the extension.</li>
    </ul>

    <h2>Planned Evolution</h2>
    <p>
      A richer in-app detail panel is a possible future enhancement. It is not shipped and is not
      part of the current PR Pulse baseline.
    </p>
  </DocsLayout>
);

export default PrDetailsDocs;
