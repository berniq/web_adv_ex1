import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './vitest.setup.js',
    include: ['tests/**/*.test.{js,jsx,ts,tsx}'], // Include only test files in the tests directory
  },
});
