export default function isEmailValid(email: string): boolean {
  // const re = /\S+@\S+\.\S+/
  const isEmailValid = email.length > 0 && email.includes('@')
  return isEmailValid
}