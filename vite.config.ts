import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import genDevConfigPlugin from './plugins/vite-plugin-gen-dev-config';

export default defineConfig({
  base: './',
  plugins: [
    dts({ include: './packages' }),
    genDevConfigPlugin()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./packages', import.meta.url))
    }
  },
  build: {
    outDir: 'lib',
    lib: {
      entry: 'packages/index.ts',
      name: 'TouchFusion',
      fileName: 'touch-fusion'
    }
  }
});
