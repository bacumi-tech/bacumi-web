import React from 'react';
import DocsImage from '../../components/docs/DocsImage';
import DocsLayout from '../../components/docs/DocsLayout';

const PersonalViewsDocs = () => (
  <DocsLayout>
    <h1>Personal Views</h1>

    <p>PR Pulse includes focused tabs for individual contributors.</p>

    <DocsImage src="/images/pulse/my-reviews-split.png" alt="PR Pulse My Reviews view split into waiting and already reviewed pull requests" />

    <h2>My PRs</h2>
    <p><strong>My PRs</strong> shows active pull requests authored by the current user.</p>
    <p>Use this tab to track:</p>
    <ul>
      <li>your current open pull requests</li>
      <li>staleness and checks status for those pull requests</li>
      <li>quick navigation to each pull request in Azure DevOps</li>
    </ul>

    <h2>My Reviews</h2>
    <p><strong>My Reviews</strong> shows active pull requests where the current user is listed as a reviewer.</p>
    <p>The tab groups results into:</p>
    <ul>
      <li><strong>Waiting for your review:</strong> pull requests with a pending vote</li>
      <li><strong>Already reviewed:</strong> pull requests that were approved, rejected, or left waiting</li>
    </ul>
    <p>This split puts pending review work first while keeping already-reviewed items visible.</p>
  </DocsLayout>
);

export default PersonalViewsDocs;
