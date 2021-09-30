import { isEmailValid, isPasswordValid } from './validators'

describe('test suite', () => {
  it('returns false if the string does not contain an @', () => {
    const testString = 'thisIsATestString'
    expect(isEmailValid(testString)).toBe(false)
  })

  it('returns true if the string does contain an @', () => {
    const testString = 'thisIsATestString@'
    expect(isEmailValid(testString)).toBe(true)
  })

  it('returns false if the password is 5 or less chars', () => {
    const testString = 'pw'
    expect(isPasswordValid(testString)).toBe(false)
  })

  it('returns true if the password is over 5 chars', () => {
    const testString = 'thisPassword'
    expect(isPasswordValid(testString)).toBe(true)
  })
})
