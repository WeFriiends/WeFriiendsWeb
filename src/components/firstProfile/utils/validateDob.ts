/**
 * Validates a date of birth: to be valid date and 18+ y.o.
 * @param dateValue - The date of birth to validate (Dayjs object).
 * @returns True if the date is valid, otherwise false.
 */

import dayjs, { Dayjs } from 'dayjs'

export const validateDob = (dateValue: Dayjs | null): boolean => {
  if (dateValue === null) return false
  if (!dayjs(dateValue).isValid()) return false // check using dayjs method, if date is valid
  if (dayjs(dateValue).year() < 1900) return false // "threshold/boundary check" (use dateValue.format('D-M-YYYY') to see the date)

  const currentDate = dayjs(new Date())
  const userAge = currentDate.diff(dateValue, 'year', false)

  return userAge >= 18 && userAge <= 100
}
