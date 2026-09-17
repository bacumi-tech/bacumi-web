import { describe, expect, it } from 'vitest';
import { getPilotProgram, pilotPrograms } from './pilotPrograms';

describe('pilot program catalogue', () => {
  it('exposes only the approved application programs in their agreed order', () => {
    expect(pilotPrograms.map(({ id }) => id)).toEqual([
      'pr-pulse-pro',
      'company-verify',
      'voice-composer'
    ]);
  });

  it('does not resolve live products or internal ideas as pilot programs', () => {
    expect(getPilotProgram('pr-pulse')).toBeNull();
    expect(getPilotProgram('internal-idea')).toBeNull();
  });
});
