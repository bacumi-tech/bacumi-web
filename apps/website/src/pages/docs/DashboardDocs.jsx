import React from 'react';
import DocsImage from '../../components/docs/DocsImage';
import DocsLayout from '../../components/docs/DocsLayout';

const DashboardDocs = () => (
  <DocsLayout>
    <h1>Core Dashboard</h1>

    <p>
      The PR Pulse dashboard is the central view for active pull requests across repositories in the
      <strong> current Azure DevOps project</strong>.
    </p>

    <DocsImage src="/images/pulse/dashboard-main.png" alt="PR Pulse core dashboard showing active pull requests across repositories" />

    <h2>What You See</h2>
    <p>Each table row includes:</p>
    <ul>
      <li>PR ID and title</li>
      <li>Author</li>
      <li>Status: Active, At Risk, Stuck, or Draft</li>
      <li>Checks status, with popover details</li>
      <li>Repository</li>
      <li>Reviewers</li>
      <li>PR age</li>
    </ul>

    <h2>Staleness and Status</h2>
    <p>PR Pulse classifies recency from the last meaningful activity:</p>
    <ul>
      <li><strong>Active:</strong> less than 24 hours</li>
      <li><strong>At Risk:</strong> 24 to 72 hours</li>
      <li><strong>Stuck:</strong> more than 72 hours</li>
      <li><strong>Draft:</strong> the pull request is in draft state</li>
    </ul>

    <h2>Health Strip</h2>
    <p>
      At the top of the table, PR Pulse summarizes project-level recency as <strong>Fresh</strong>,{' '}
      <strong>Aging</strong>, and <strong>Critical</strong> counts.
    </p>

    <h2>Checks Visibility</h2>
    <p>
      The Checks column opens a popover with build and enabled policy-check outcomes and links back
      to the pull request in Azure DevOps.
    </p>

    <h2>Refresh and Paging</h2>
    <ul>
      <li>The manual refresh button reloads current data and clears the in-memory metadata caches.</li>
      <li>Pagination supports 15, 25, or 50 rows per page for larger result sets.</li>
    </ul>
  </DocsLayout>
);

export default DashboardDocs;
