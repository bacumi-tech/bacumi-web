import React from 'react';
import VoiceComposerDocsLayout from '../../../components/docs/VoiceComposerDocsLayout';

const VoiceComposerSettingsDocs = () => (
  <VoiceComposerDocsLayout>
    <h1>Settings & Menu Bar</h1>

    <p>
      Voice Composer settings are grouped into General, Models, and Privacy tabs. Changes apply
      immediately to the next dictation session.
    </p>

    <h2>Speech</h2>
    <ul>
      <li>
        <strong>Performance profile:</strong> Automatic selects Whisper Small on systems under 16 GB RAM and
        Large-v3-Turbo on 16 GB and above.
      </li>
      <li>
        <strong>Dictation language:</strong> English and Romanian are supported in the current build.
      </li>
    </ul>

    <h2>Input</h2>
    <ul>
      <li>Select the microphone input device or keep the system default.</li>
      <li>Enable or disable review-before-insert from the Input section.</li>
    </ul>

    <h2>Transcribe Shortcut</h2>
    <ul>
      <li>Switch between Hold to Talk and Toggle modes.</li>
      <li>Choose from preset global shortcuts tuned for one-handed use.</li>
    </ul>

    <h2>Models</h2>
    <p>
      Whisper models download on demand and remain on your Mac for offline reuse. The Models tab shows
      download progress, installed variants, and storage used by each model package.
    </p>

    <h2>Launch at Login</h2>
    <p>
      Optional launch-at-login keeps the menu bar extra available after restart. Voice Composer still only
      records when you explicitly trigger dictation.
    </p>
  </VoiceComposerDocsLayout>
);

export default VoiceComposerSettingsDocs;
