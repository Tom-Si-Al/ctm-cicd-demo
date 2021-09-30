export const isEmailValid = (email) => {
  if (email.includes('@')) {
    return false
  }
  return false
}

export const isPasswordValid = (password) => {
  if (password.length > 5) {
    return true
  }
  return false
}
