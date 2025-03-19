import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      exclude: ['**.config.**', 'dist/**', 'src/db/**', 'src/index.ts'],
    },
  },
});
