import fs from 'fs';

import type { Plugin } from 'vite';

const copyFilePlugin = (): Plugin => {
  return {
    name: 'vite-plugin-copy-file',
    apply: 'build',
    writeBundle() {
      const docsDir = 'docs/development';
      if (!fs.existsSync(docsDir)) {
        fs.mkdirSync(docsDir, { recursive: true });
      }
      const changelog = fs.readFileSync('CHANGELOG.md', 'utf-8');
      fs.writeFile(`${docsDir}/changelog.md`, changelog, () => {});
      const readme = fs.readFileSync('README.md', 'utf-8');
      fs.writeFile(`${docsDir}/index.md`, readme, () => {});
    }
  };
};

export default copyFilePlugin;
