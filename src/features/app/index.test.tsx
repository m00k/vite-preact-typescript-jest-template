import { /* waitFor, screen, RenderResult */ act, render } from '@testing-library/preact'
import App from '.';

describe('app', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
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
  
  test('renders the app', () => {
    const testMessage = 'Hello Vite'
    const testMessage2 = `${testMessage} + Preact!`
    const { getByText } = render(<App />)
    
    expect(getByText(testMessage)).not.toBeNull()

    act(() => {
      jest.advanceTimersByTime(1000)
    })
    
    // screen.debug()
    expect(getByText(testMessage2)).not.toBeNull()
  })
})
