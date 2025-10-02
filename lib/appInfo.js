import {createRequire} from 'module';

const require = createRequire(import.meta.url);
const pkg = require('../package.json')

export const AppInfo = {
  version: pkg.version
}
