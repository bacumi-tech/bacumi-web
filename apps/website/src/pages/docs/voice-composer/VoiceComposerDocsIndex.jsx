import React from 'react';
import VoiceComposerDocsLayout from '../../../components/docs/VoiceComposerDocsLayout';

const VoiceComposerDocsIndex = () => (
  <VoiceComposerDocsLayout>
    <h1>Voice Composer Documentation</h1>

    <p>
      <strong>Voice Composer</strong> is a macOS dictation utility that turns short spoken thoughts into
      clean, editable text using on-device speech recognition. Audio stays local unless you explicitly
      choose to share output elsewhere.
    </p>

    <h2>Who This Is For</h2>
    <p>
      Voice Composer is built for professionals who think faster than they type and want a focused,
      privacy-respecting way to draft messages, notes, prompts, and documents from anywhere on the Mac.
    </p>

    <h2>What You Can Do Today</h2>
    <ul>
      <li>Trigger dictation with a global shortcut in Hold to Talk or Toggle mode</li>
      <li>Transcribe locally with embedded Whisper models for English and Romanian</li>
      <li>Review and edit text before insertion when review mode is enabled</li>
      <li>Insert approved text into the active field or fall back to the clipboard</li>
      <li>Control the app from the menu bar extra and settings window</li>
    </ul>

    <h2>Platform Requirements</h2>
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
