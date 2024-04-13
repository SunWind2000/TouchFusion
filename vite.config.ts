import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import copyFilePlugin from './plugins/vite-plugin-copy-file';

export default defineConfig({
  base: './',
  plugins: [
    dts({ include: './packages' }),
    copyFilePlugin()
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
