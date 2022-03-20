import { FunctionComponent } from 'preact'
import { AppConfigProvider } from '../../features/app/config/provider'
import Home from '../../features/home'

const HomePage: FunctionComponent = () => {
  return (
    <AppConfigProvider>
      <Home />
    </AppConfigProvider>
  )
}

export default HomePage
