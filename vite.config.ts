import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  base: './',
  plugins: [ dts({ include: './packages' }) ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./packages', import.meta.url))
    }
  },
  build: {
    outDir: 'lib',
    lib: {
      entry: 'src/index.ts',
      name: 'TouchFusion',
      fileName: (format) => `touch-fusion.${format}.js`
    }
  }
});
