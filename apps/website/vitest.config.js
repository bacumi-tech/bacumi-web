import react from '@vitejs/plugin-react';
import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.js'],
    env: { VITE_INTAKE_ENABLED: 'true' },
    exclude: [...configDefaults.exclude, 'tests/e2e/**']
  }
});
