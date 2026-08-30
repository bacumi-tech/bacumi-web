import React from 'react';
import DeveloperScratchpadDocsLayout from '../../../components/docs/DeveloperScratchpadDocsLayout';

const DeveloperScratchpadPrivacyDocs = () => (
  <DeveloperScratchpadDocsLayout>
    <h1>Privacy & Offline Operation</h1>

    <p>
      Developer Scratchpad is built for sensitive engineering work. Text stays in-process unless you
      explicitly save a file or copy output elsewhere.
    </p>

    <h2>Local-Only Processing</h2>
    <ul>
      <li>No cloud sync, remote APIs, or generative AI in the core product</li>
      <li>Transformations run deterministically on your Mac</li>
      <li>Clipboard inspection for smart suggestions stays on-device</li>
      <li>No automatic network requests from tool modes</li>
    </ul>

    <h2>Session Storage</h2>
    <p>
      Tabs can be restored locally between launches when session persistence is enabled. Saved scratchpad
      data lives in app storage on your Mac and can be cleared from Settings at any time.
    </p>

    <h2>Permissions</h2>
    <p>
      Core tools do not require Accessibility, Automation, or broad file-system access. Open and save
      dialogs are used only when you choose to read or write a file.
    </p>

    <h2>What Developer Scratchpad Does Not Collect</h2>
    <ul>
      <li>Scratchpad text or transformed output</li>
      <li>JWT payloads, regex patterns, or hash inputs</li>
      <li>File paths beyond what you explicitly open</li>
      <li>Telemetry tied to snippet contents</li>
    </ul>

    <h2>Diagnostics</h2>
    <p>
      Diagnostics are off by default. If offered in a future release, they would be limited to coarse
      feature usage and failure categories—not the content you paste into the app.
    </p>
  </DeveloperScratchpadDocsLayout>
);

export default DeveloperScratchpadPrivacyDocs;
