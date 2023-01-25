export default function isEmailValid(email: string): boolean {
  const isEmailValid = email.length > 0 && email.includes('@')
  return isEmailValid
}