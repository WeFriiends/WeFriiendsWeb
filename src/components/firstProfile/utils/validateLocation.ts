/**
 * Validates a location object.
 * @param location - The location object to validate.
 * @returns {boolean} - True if the location is valid, otherwise false.
 */

type Location = {
  country: string
  city: string
  street: string
  houseNumber: string
  lat: number
  lng: number
}

export const validateLocation = (location: Location): boolean => {
  const { country, city, street, houseNumber, lat, lng } = location

  // Basic validation to ensure required fields are not empty
  if (!country || !city || !street || !houseNumber) return false

  // Validate latitude and longitude
  return lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180
}
