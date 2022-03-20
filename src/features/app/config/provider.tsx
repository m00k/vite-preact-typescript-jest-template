import appConfig, { AppConfig } from './index'

import { ComponentChildren, createContext, PreactContext } from 'preact'
import { useContext } from 'preact/hooks'

export type AppConfigContext = AppConfig
const AppConfigContext: PreactContext<AppConfigContext> =
  createContext<AppConfigContext>({} as AppConfig)

export const AppConfigProvider = ({
  value,
  children,
}: {
  value?: AppConfig
  children?: ComponentChildren
}) => {
  return (
    <AppConfigContext.Provider value={value || appConfig}>
      {children}
    </AppConfigContext.Provider>
  )
}

export const useAppConfig = (): AppConfigContext =>
  useContext<AppConfigContext>(AppConfigContext)
