import React from 'react';
import VoiceComposerDocsLayout from '../../../components/docs/VoiceComposerDocsLayout';

const VoiceComposerDocsIndex = () => (
  <VoiceComposerDocsLayout>
    <h1>Voice Composer Documentation</h1>

    <p>
      <strong>Voice Composer</strong> is an in-development dictation utility designed to turn short spoken
      thoughts into clean, editable text with local speech recognition. The current development build
      targets macOS, as part of Bacumi's native Mac app portfolio.
    </p>

    <h2>Who This Is For</h2>
    <p>
      Voice Composer is built for professionals who think faster than they type and want a focused,
      privacy-respecting way to draft messages, notes, prompts, and documents from a desktop workflow.
    </p>

    <h2>Initial Product Scope</h2>
    <ul>
      <li>Trigger dictation with a global shortcut in Hold to Talk or Toggle mode</li>
      <li>Transcribe locally with embedded Whisper models for English and Romanian</li>
      <li>Review and edit text before insertion when review mode is enabled</li>
      <li>Insert approved text into the active field or fall back to the clipboard</li>
      <li>Control the app from the menu bar extra and settings window</li>
    </ul>

    <h2>Current Development Target</h2>
    <ul>
      <li>macOS 14.0 or later</li>
      <li>Apple Silicon or Intel Mac</li>
      <li>Microphone access for recording</li>
      <li>Accessibility permission may be required for direct text insertion</li>
    </ul>

    <h2>Documentation Map</h2>
    <p>Use the sidebar to move through setup, dictation workflow, settings, and privacy details.</p>
  </VoiceComposerDocsLayout>
);

export default VoiceComposerDocsIndex;
