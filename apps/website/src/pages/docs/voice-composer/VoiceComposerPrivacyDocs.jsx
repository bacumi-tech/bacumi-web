import React from 'react';
import VoiceComposerDocsLayout from '../../../components/docs/VoiceComposerDocsLayout';

const VoiceComposerPrivacyDocs = () => (
  <VoiceComposerDocsLayout>
    <h1>Privacy & Local Processing</h1>

    <p>
      Voice Composer is local-first by design. Your microphone audio and transcript text are processed on
      your Mac and are not sent to a Bacumi cloud service for transcription.
    </p>

    <h2>Default Data Flow</h2>
    <ol>
      <li>Audio enters a temporary local buffer during recording.</li>
      <li>Whisper converts that buffer to text on-device.</li>
      <li>You review or edit the transcript locally.</li>
      <li>Approved text is inserted or copied only after you confirm the action.</li>
    </ol>

    <h2>What Stays Local</h2>
    <ul>
      <li>Raw audio captured during dictation</li>
      <li>Transcripts shown in the review sheet</li>
      <li>Downloaded Whisper model files</li>
      <li>Your shortcut, language, and preference settings</li>
    </ul>

    <h2>What Voice Composer Does Not Do</h2>
    <ul>
      <li>Always-on listening or background surveillance</li>
      <li>Automatic message sending without review when review mode is enabled</li>
      <li>Cloud transcription in the default configuration</li>
      <li>Collection of clipboard contents or active-app identity in diagnostics</li>
    </ul>

    <h2>Diagnostics</h2>
    <p>
      Diagnostics and analytics are off by default. If enabled in a future release, they would be limited
      to coarse performance and failure categories—not audio, transcript text, or destination app names.
    </p>
  </VoiceComposerDocsLayout>
);

export default VoiceComposerPrivacyDocs;
