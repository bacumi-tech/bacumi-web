import React from 'react';
import VoiceComposerDocsLayout from '../../../components/docs/VoiceComposerDocsLayout';

const VoiceComposerDictationWorkflow = () => (
  <VoiceComposerDocsLayout>
    <h1>Dictation Workflow</h1>

    <p>
      Voice Composer follows a simple capture → transcribe → review → insert loop. Each step is visible so
      you always know what the app is doing.
    </p>

    <h2>Floating HUD</h2>
    <p>
      While dictation is active, a floating pill shows recording, transcribing, formatting, review, and
      insertion states. The HUD stays out of the way and does not steal focus from your current app.
    </p>

    <h2>Recording States</h2>
    <ul>
      <li><strong>Idle:</strong> waiting for your shortcut</li>
      <li><strong>Recording:</strong> microphone input is captured locally</li>
      <li><strong>Transcribing:</strong> Whisper converts audio to text on-device</li>
      <li><strong>Formatting:</strong> optional local cleanup before review or insertion</li>
      <li><strong>Reviewing:</strong> edit the transcript before it is pasted</li>
      <li><strong>Inserting:</strong> approved text is sent to the active field or clipboard</li>
    </ul>

    <h2>Review Before Insert</h2>
    <p>
      When review mode is enabled, Voice Composer opens a transcript review sheet so you can edit wording,
      fix recognition mistakes, or cancel insertion entirely. This is the safest default for sensitive
      workflows.
    </p>

    <h2>Text Insertion</h2>
    <p>
      With Accessibility permission, Voice Composer inserts text directly into the focused field. Without
      it, the app uses a clipboard fallback so you can paste manually with Command + V.
    </p>

    <h2>Menu Bar Control</h2>
    <p>
      The menu bar extra shows current dictation state, provides quick access to settings, and lets you
      open onboarding or permissions again without hunting through the Dock.
    </p>
  </VoiceComposerDocsLayout>
);

export default VoiceComposerDictationWorkflow;
