import { ImportMetaEnvVite, AppConfig } from './index'

const ENV_VAR_PREFIX = 'VITE_'
export const mapViteEnvVars = (viteEnv: ImportMetaEnvVite) =>
  Object.keys(viteEnv).reduce((acc: ImportMetaEnv, curr: string) => {
    const newKey =
      curr.indexOf(ENV_VAR_PREFIX) === -1
        ? curr
        : curr.substr(ENV_VAR_PREFIX.length)
    acc[newKey] = viteEnv[curr]
    return { ...acc }
  }, {} as AppConfig) as AppConfig
