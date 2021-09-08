import { FunctionComponent } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { Logo } from './logo';

const App: FunctionComponent = () => {
  const [hello, setHello] = useState('Hello Vite')
  useEffect(() => {
    const t = setTimeout(() => setHello(curr => `${curr} + Preact!`), 1000)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <Logo />
      <p>{hello}</p>
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