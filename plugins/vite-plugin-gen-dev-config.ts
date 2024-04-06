import fs from 'fs';
import packageConfig from './dev_package.json';
import prodPackageConfig from '../package.json';

import type { Plugin } from 'vite';

const TEMP_PACKAGE_JSON = './temp/package.json';

const updateLibName = (mode: string = 'production') => {
  console.log('mode: ', mode);
  const config = packageConfig;
  return {
    ...config,
    version: prodPackageConfig.version
  };
};

const genDevConfigPlugin = (): Plugin => {
  return {
    name: 'vite-plugin-gen-dev-config',
    apply: 'build',
    config({ mode }) {
      const config = updateLibName(mode);
      fs.writeFile(TEMP_PACKAGE_JSON, JSON.stringify(config, null, 2), () => {});
    },
    writeBundle() {
      fs.copyFileSync(TEMP_PACKAGE_JSON, './lib/package.json');
    }
  };
};

export default genDevConfigPlugin;
