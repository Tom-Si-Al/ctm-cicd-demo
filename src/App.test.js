import { render, fireEvent, screen } from '@testing-library/react'
import App from './App'

describe('email field', () => {
  test('it toggles is-invalid class when the value is invalid', async () => {
    render(<App />)
    const emailText = screen.getByTestId('formEmail')
    fireEvent.change(emailText, { target: { value: 'not an email' } })
    expect(emailText.className).toContain('is-invalid')
  })

  test('it toggles is-valid class when the value is valid', async () => {
    render(<App />)
    const emailText = screen.getByTestId('formEmail')
    fireEvent.change(emailText, { target: { value: 'an@email.address' } })
    expect(emailText.className).toContain('is-valid')
  })
})

describe('password field', () => {
  test('it toggles is-invalid class when the value is invalid', async () => {
    render(<App />)
    const emailText = screen.getByTestId('formPassword')
    fireEvent.change(emailText, { target: { value: 'short' } })
    expect(emailText.className).toContain('is-invalid')
  })

  test('it toggles is-valid class when the value is valid', async () => {
    render(<App />)
    const emailText = screen.getByTestId('formPassword')
    fireEvent.change(emailText, { target: { value: 'long password' } })
    expect(emailText.className).toContain('is-valid')
  })
})
