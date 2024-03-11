/// <reference types="vitest" />
import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default defineConfig(mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      // test options
      include: ['test/**/*.spec.ts'],
      outputFile: 'build/test-results.xml',
      reporters: ['verbose'],
      environment: 'jsdom'
    }
  })
));
