import { render } from 'preact'
import App from './features/app'
import './styles/index.css'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
render(<App />, document.getElementById('app')!)
