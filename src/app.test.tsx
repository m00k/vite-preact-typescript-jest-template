import { /* act, screen, RenderResult */ render, waitFor } from '@testing-library/preact'
import App from './app';

describe('app', () => {
  beforeEach(() => {
    // jest.useFakeTimers()
  })

  afterEach(() => {
    // jest.useRealTimers()
  })

  test('adds 1 + 2 to equal 3', () => {
    const expected: number = 3
    expect(1 + 2).toBe(expected)
  })
  
  test('renders the app', () => {
    const testMessage = 'Learn Preact'
    const { getByText } = render(<App />)
    expect(getByText(testMessage)).not.toBeNull()
  })
  
  test('renders the app', async () => {
    const testMessage = 'Hello Vite'
    const testMessage2 = `${testMessage} + Preact!`
    const { getByText } = render(<App />)
    
    await waitFor(() => expect(getByText(testMessage)).not.toBeNull())
    await waitFor(() => expect(getByText(testMessage2)).not.toBeNull(), { timeout: 1000 })
  })
})
