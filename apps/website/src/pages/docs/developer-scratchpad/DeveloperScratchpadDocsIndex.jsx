import React from 'react';
import DeveloperScratchpadDocsLayout from '../../../components/docs/DeveloperScratchpadDocsLayout';

const DeveloperScratchpadDocsIndex = () => (
  <DeveloperScratchpadDocsLayout>
    <h1>Developer Scratchpad Documentation</h1>

    <p>
      <strong>Developer Scratchpad</strong> is a macOS utility for temporary text, deterministic
      transformations, and focused developer workflows. Everything runs locally in-process—no cloud sync,
      no AI calls, and no network requests.
    </p>

    <h2>Who This Is For</h2>
    <p>
      Developer Scratchpad is for engineers, support staff, and technical operators who need fast JSON
      formatting, encoding helpers, regex tests, JWT inspection, and other repeatable transformations
      without opening a full IDE or pasting sensitive payloads into a web tool.
    </p>

    <h2>Core Capabilities</h2>
    <ul>
      <li>Multiple scratchpad tabs with optional local session restore</li>
      <li>Dual-pane transform workbench with live preview</li>
      <li>Built-in tools for JSON, JWT, regex, timestamps, hashes, SQL, cron, cURL, and more</li>
      <li>Command palette for quick navigation between tools and tabs</li>
      <li>Developer themes including Bacumi Graphite plus popular third-party editor themes</li>
    </ul>

    <h2>Platform Requirements</h2>
    <ul>
      <li>macOS 14.0 or later</li>
      <li>Apple Silicon or Intel Mac</li>
      <li>No special permissions required for core transformations</li>
    </ul>
  </DeveloperScratchpadDocsLayout>
);

export default DeveloperScratchpadDocsIndex;
