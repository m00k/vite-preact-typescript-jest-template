import { FunctionComponent, h } from 'preact';
import React from 'preact/compat'; // NOTE: required for fragment <>
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