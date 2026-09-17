export const pilotPrograms = Object.freeze([
  Object.freeze({
    id: 'pr-pulse-pro',
    label: 'PR Pulse Pro early access',
    available: true
  }),
  Object.freeze({
    id: 'company-verify',
    label: 'Company Verify design partners',
    available: true
  }),
  Object.freeze({
    id: 'voice-composer',
    label: 'Voice Composer pilot interest',
    available: true
  })
]);

export const getPilotProgram = (id) =>
  pilotPrograms.find((program) => program.id === id) ?? null;
