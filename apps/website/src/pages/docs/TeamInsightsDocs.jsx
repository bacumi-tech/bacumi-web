import React from 'react';
import DocsImage from '../../components/docs/DocsImage';
import DocsLayout from '../../components/docs/DocsLayout';

const TeamInsightsDocs = () => (
  <DocsLayout>
    <h1>Team Insights</h1>

    <p>PR Pulse provides lightweight team-level visibility directly in the dashboard.</p>

    <DocsImage src="/images/pulse/health-strip.png" alt="PR Pulse health strip with Fresh, Aging, and Critical pull request counts" />
    <DocsImage src="/images/pulse/reviewer-workload.png" alt="PR Pulse reviewer workload dialog with active assignment counts" />

    <h2>Reviewer Load Balancer</h2>
    <p>In the <strong>All PRs</strong> tab, PR Pulse shows reviewer workload by counting active pull request assignments.</p>
    <ul>
      <li>Avatar chips display up to four reviewers with a count badge.</li>
      <li>Green indicates no more than two active assignments.</li>
      <li>Orange indicates three to five active assignments.</li>
      <li>Red indicates more than five active assignments.</li>
      <li>An ellipsis button, or +N when more than four reviewers exist, opens the Reviewer Load dialog.</li>
      <li>
        The dialog lists every reviewer, scales progress bars to the highest active load, and identifies
        the most available reviewer in its health message.
      </li>
    </ul>
    <p>These signals help engineering leads rebalance review requests before pull requests sit waiting.</p>

    <h2>PR Health Chips</h2>
    <p>PR Pulse summarizes active pull request recency into three fixed buckets:</p>
    <ul>
      <li><strong>Fresh:</strong> less than 24 hours since meaningful activity</li>
      <li><strong>Aging:</strong> 24 to 72 hours since meaningful activity</li>
      <li><strong>Critical:</strong> more than 72 hours since meaningful activity</li>
    </ul>
    <p>This gives engineering leads a current-state signal of review flow health without an external report.</p>
  </DocsLayout>
);

export default TeamInsightsDocs;
