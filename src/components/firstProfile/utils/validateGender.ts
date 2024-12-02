/**
 * Validates a gender string.
 * @param value - The gender string to validate.
 * @returns True if validation passes, otherwise false.
 */
export const validateGender = (value: string): boolean => {
  return value === 'male' || value === 'female';
}
