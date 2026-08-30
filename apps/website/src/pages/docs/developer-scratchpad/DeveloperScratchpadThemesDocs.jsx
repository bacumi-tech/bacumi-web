import React from 'react';
import DeveloperScratchpadDocsLayout from '../../../components/docs/DeveloperScratchpadDocsLayout';

const DeveloperScratchpadThemesDocs = () => (
  <DeveloperScratchpadDocsLayout>
    <h1>Themes & Workspace</h1>

    <p>
      Developer Scratchpad includes Bacumi-branded themes plus a set of popular third-party editor themes
      for developers who already have a preferred color system.
    </p>

    <h2>Bacumi Themes</h2>
    <ul>
      <li><strong>Bacumi Graphite:</strong> default dark theme using the Bacumi orange–graphite palette</li>
      <li><strong>Bacumi Light:</strong> light workspace with accessible orange accents for actions</li>
    </ul>

    <h2>Third-Party Themes</h2>
    <p>
      Additional themes such as Tokyo Night, Nord, Dracula, Catppuccin Mocha, One Dark Pro, and Light Studio
      are available under permissive open-source licenses. Each theme adjusts editor, sidebar, and status
      colors consistently across the app.
    </p>

    <h2>Changing Themes</h2>
    <ol>
      <li>Open the theme picker from the toolbar menu.</li>
      <li>Or go to Settings → Developer Theme to preview swatches and read the license notice.</li>
      <li>Your selection persists between launches.</li>
    </ol>

    <h2>Editor Preferences</h2>
    <ul>
      <li>Adjust editor font size from settings or per-session controls where available</li>
      <li>Resize the tools sidebar to give more room to the workbench</li>
      <li>Use pinned tabs for long-running transformation tasks</li>
    </ul>

    <h2>Status Footer</h2>
    <p>
      The footer shows the active tool, character counts, and transformation status so you always know
      which mode is driving the current tab.
    </p>
  </DeveloperScratchpadDocsLayout>
);

export default DeveloperScratchpadThemesDocs;
