/**
 * Validates an aboutMe string.
 * @param value - The name string to validate.
 * @returns True if validation passes, otherwise false.
 */
export const validateAboutMe = (value: string): boolean => {
  const regex = /^(?!.*[<>&'])(.{0,1}|$)/u
  return regex.test(value)
}
