/**
 * Validates a name string.
 * @param value - The name string to validate.
 * @returns True if validation passes, otherwise false.
 */
export const validateName = (value: string): boolean => {
  if (!value) return false
  const regex = /^[a-zA-Z ]{2,15}$/
  return (
    regex.test(value) &&
    !value.startsWith(' ') &&
    !value.endsWith(' ') &&
    value !== ''
  )
}
