import React from 'react';
import DeveloperScratchpadDocsLayout from '../../../components/docs/DeveloperScratchpadDocsLayout';

const DeveloperScratchpadGettingStarted = () => (
  <DeveloperScratchpadDocsLayout>
    <h1>Getting Started</h1>

    <p>
      Developer Scratchpad opens as a focused workbench with tabs across the top, a central editor area,
      and an optional tools sidebar on the right.
    </p>

    <h2>Tabs</h2>
    <ul>
      <li>Create a new tab from the tab bar or with the standard new-tab shortcut.</li>
      <li>Each tab remembers its mode, input text, and output pane independently.</li>
      <li>Pin important tabs so they stay visible while you work through a session.</li>
      <li>Saved tabs can persist locally between launches when session restore is enabled.</li>
    </ul>

    <h2>Command Palette</h2>
    <p>
      Press <strong>⌘K</strong> to open the command palette. From there you can switch tools, jump to a
      tab, run transforms, and access common actions without leaving the keyboard.
    </p>

    <h2>Tools Sidebar</h2>
    <p>
      Expand the sidebar to browse every built-in tool grouped by category. Selecting a tool switches the
      active tab into the matching mode and loads the appropriate workbench layout.
    </p>

    <h2>Smart Clipboard Suggestions</h2>
    <p>
      When Developer Scratchpad becomes active, it can inspect the clipboard for recognizable payloads such
      as JSON, JWTs, or cURL commands and suggest the most relevant tool. Suggestions stay local and never
      leave your Mac.
    </p>

    <h2>File Open & Save</h2>
    <p>
      Use standard open and save actions to bring external snippets into a tab or export transformed
      output. File access is user-initiated only.
    </p>
  </DeveloperScratchpadDocsLayout>
);

export default DeveloperScratchpadGettingStarted;
