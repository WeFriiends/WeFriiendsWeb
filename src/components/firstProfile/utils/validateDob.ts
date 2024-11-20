/**
 * Validates a date of birth.
 * @param dateValue - The date of birth to validate (Dayjs object).
 * @returns True if the date is valid, otherwise false.
 */

import { Dayjs } from 'dayjs'

export const validateDob = (dateValue: Dayjs | null): boolean => {
  if (!dateValue) return false // No date provided

  const currentYear = new Date().getFullYear()
  const yearOfBirth = dateValue.year()
  const age = currentYear - yearOfBirth

  return age >= 18 && age <= 150
}
