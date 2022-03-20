// NOTE: 'npm test' fails with error TS1343
// (The 'import.meta' meta-property is only allowed when the '--module' option is 'es2020', 'esnext', or 'system')
// when using import.meta.env directly (as per https://vitejs.dev/guide/env-and-mode.html#env-files)
// -> consider creating a AppConfigTestContext.Provider or utilizing jest.mock('./path/to/config.ts') when testing

import { mapViteEnvVars } from './mapper'

export interface AppConfig extends ImportMetaEnv {
  readonly GREETER_DELAY: string
}

export interface ImportMetaEnvVite extends ImportMetaEnv {
  readonly VITE_GREETER_DELAY: string
}

const config = mapViteEnvVars(import.meta.env as ImportMetaEnvVite)

export default config
