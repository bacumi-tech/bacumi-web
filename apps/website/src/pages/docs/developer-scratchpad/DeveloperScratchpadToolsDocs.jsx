import React from 'react';
import DeveloperScratchpadDocsLayout from '../../../components/docs/DeveloperScratchpadDocsLayout';

const DeveloperScratchpadToolsDocs = () => (
  <DeveloperScratchpadDocsLayout>
    <h1>Transformation Tools</h1>

    <p>
      Every tool in Developer Scratchpad is deterministic and offline. Results are shown in a preview
      pane before you replace the source text or copy output.
    </p>

    <h2>Editor & Workbench</h2>
    <ul>
      <li><strong>Editor:</strong> plain multi-line scratch space with syntax-friendly monospace rendering</li>
      <li><strong>Dual-Pane Transform:</strong> input on one side, transformed output on the other</li>
      <li><strong>Diff Tool:</strong> compare two text blocks with add/delete highlighting</li>
    </ul>

    <h2>Data & Encoding</h2>
    <ul>
      <li>JSON format, validate, minify, and sort keys</li>
      <li>Base64, URL, and HTML entity encode/decode helpers</li>
      <li>Data Matrix converter for JSON, YAML, TOML, and CSV</li>
      <li>Hash generator for common digest algorithms</li>
      <li>Timestamp converter between Unix epochs and human-readable dates</li>
    </ul>

    <h2>Developer Utilities</h2>
    <ul>
      <li><strong>cURL to Code:</strong> parse a cURL command and generate request code</li>
      <li><strong>JSON to Types:</strong> produce model/type stubs from JSON payloads</li>
      <li><strong>JWT Inspector:</strong> decode header and payload segments with validation hints</li>
      <li><strong>Regex Tester:</strong> evaluate patterns with match highlighting and capture groups</li>
      <li><strong>SQL Formatter:</strong> format or minify SQL snippets</li>
      <li><strong>Cron Explainer:</strong> describe cron expressions in plain language</li>
      <li><strong>Mock Data Faker:</strong> generate sample structured data locally</li>
      <li><strong>.env Secret Masker:</strong> mask and validate environment variable files</li>
      <li><strong>SSL Certificate Inspector:</strong> parse certificate details from pasted PEM content</li>
      <li><strong>Custom JavaScript Scripts:</strong> run user-authored transform scripts in a sandboxed flow</li>
    </ul>

    <h2>Preview Before Apply</h2>
    <p>
      Destructive or wide-reaching transforms open a preview sheet first. Review the output, then choose to
      apply it to the active tab or copy it to the clipboard.
    </p>
  </DeveloperScratchpadDocsLayout>
);

export default DeveloperScratchpadToolsDocs;
