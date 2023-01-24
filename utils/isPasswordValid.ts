export default function isPasswordValid(password: string): boolean {
  const isPasswordValid = password.length > 4
  return isPasswordValid
}
