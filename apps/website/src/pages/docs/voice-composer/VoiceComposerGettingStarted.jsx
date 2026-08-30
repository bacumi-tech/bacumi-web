import React from 'react';
import VoiceComposerDocsLayout from '../../../components/docs/VoiceComposerDocsLayout';

const VoiceComposerGettingStarted = () => (
  <VoiceComposerDocsLayout>
    <h1>Getting Started</h1>

    <p>
      Voice Composer is designed to be invoked on demand. You choose when to record, review the result,
      and decide whether to insert it.
    </p>

    <h2>First Launch</h2>
    <ol>
      <li>Open Voice Composer from Applications or the menu bar icon.</li>
      <li>Complete the onboarding flow to choose your shortcut, language, and review preference.</li>
      <li>Grant microphone access when macOS prompts you during the first recording attempt.</li>
      <li>Download the recommended Whisper model if prompted on first use.</li>
    </ol>

    <h2>Permissions</h2>
    <ul>
      <li>
        <strong>Microphone:</strong> required to capture speech. Voice Composer does not record outside an
        explicit user action.
      </li>
      <li>
        <strong>Accessibility:</strong> optional but recommended for direct insertion into the focused
        text field. If unavailable, Voice Composer can copy the transcript to the clipboard instead.
      </li>
    </ul>

    <h2>Choose a Shortcut</h2>
    <p>Voice Composer supports presets such as Right Option, Option + Space, and Command + Shift + D.</p>
    <p>
      Pick the mode that matches your workflow:
    </p>
    <ul>
      <li><strong>Hold to Talk:</strong> recording runs while the shortcut is held down</li>
      <li><strong>Toggle:</strong> first press starts recording, second press stops it</li>
    </ul>

    <h2>First Dictation</h2>
    <ol>
      <li>Place the cursor in the destination app.</li>
      <li>Press your configured shortcut and speak a short utterance.</li>
      <li>Release the shortcut or press it again, depending on mode.</li>
      <li>Review the transcript if review mode is enabled, then insert or copy the result.</li>
    </ol>
  </VoiceComposerDocsLayout>
);

export default VoiceComposerGettingStarted;
