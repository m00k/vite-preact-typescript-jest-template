import { h } from 'preact'
import { render } from '@testing-library/preact'
import App from './app';


test('adds 1 + 2 to equal 3', () => {
  const expected: number = 3;
  expect(1 + 2).toBe(expected);
})

test('renders the app', () => {
  const testMessage = 'Learn Preact'
  const { getByText } = render(<App />)
  expect(getByText(testMessage)).not.toBeNull()
})