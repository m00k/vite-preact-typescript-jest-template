import {
  /* waitFor, screen, RenderResult */ act,
  render,
} from '@testing-library/preact'
import Home from '.'
import type { AppConfig } from '../app/config'
import { AppConfigProvider } from '../app/config/provider'

// mock accessing the import.meta.env
jest.mock('../app/config/index.ts')

// override the default mock if necessary
const GREETER_DELAY_NUMBER = 500
const GREETER_DELAY = GREETER_DELAY_NUMBER + ''
const config = { GREETER_DELAY } as AppConfig
const renderTest = () =>
  render(
    <AppConfigProvider value={config}>
      <Home />
    </AppConfigProvider>,
  )

describe('app', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  test('adds 1 + 2 to equal 3', () => {
    const expected = 3
    expect(1 + 2).toBe(expected)
  })

  test('renders the app', () => {
    const testMessage = 'Learn Preact'
    const { getByText } = renderTest()
    expect(getByText(testMessage)).not.toBeNull()
  })

  test('renders the app', () => {
    const testMessage = 'Hello Vite'
    const testMessage2 = `${testMessage} + Preact!`
    const { getByText } = renderTest()

    expect(getByText(testMessage)).not.toBeNull()

    act(() => {
      jest.advanceTimersByTime(GREETER_DELAY_NUMBER)
    })

    // screen.debug()
    expect(getByText(testMessage2)).not.toBeNull()
  })
})
