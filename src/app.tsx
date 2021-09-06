import { FunctionComponent } from 'preact';
import { Logo } from './logo';

const App: FunctionComponent = () => {
  return (
    <>
    <Logo />
      <p>Hello Vite + Preact!</p>
      <p>
        <a
          class="link"
          href="https://preactjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Preact
        </a>
      </p>
    </>
  )
}

export default App