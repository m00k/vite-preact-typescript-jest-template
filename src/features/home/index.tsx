import { FunctionComponent } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import { Logo } from '../../components/logo'
import { useAppConfig } from '../app/config/provider'

const Home: FunctionComponent = () => {
  const [hello, setHello] = useState('Hello Vite')
  const { GREETER_DELAY } = useAppConfig()

  useEffect(() => {
    const t = setTimeout(
      () => setHello((curr) => `${curr} + Preact!`),
      +GREETER_DELAY,
    )
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

export default Home
