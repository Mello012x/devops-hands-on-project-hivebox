import {createRequire} from 'module';

const req = createRequire(import.meta.url);
const pkg = req('../package.json')

export const AppInfo = {
  version: pkg.version
}
