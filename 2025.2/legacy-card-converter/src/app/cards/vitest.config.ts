import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    setupFiles: [],
    include: ['**/*.{test,spec}.{ts,tsx}'],
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'html'],
      exclude: ['**/__tests__/', '**/*.{test,spec}.{ts,tsx}'],
    },
  },
});
