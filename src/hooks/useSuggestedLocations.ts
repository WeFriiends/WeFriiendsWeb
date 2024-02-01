import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDebounce } from 'usehooks-ts'

const LIMIT = 7

type GeoLocation = {
  latitude: number
  longitude: number
}

type LocationInfo = GeoLocation & {
  displayName: string
}

type ResponseItem = {
  display_name: string
  lat: string
  lon: string
}

function parseCoordinate(coordinate: string): number {
  return Number.parseFloat(coordinate.substring(0, LIMIT))
}

export const useSuggestedLocations = (
  location: string,
  bounceDuration: number,
  limit: number
) => {
  const debouncedValue = useDebounce<string>(location, bounceDuration)
  const [addresses, setAddresses] = useState<LocationInfo[]>([])

  useEffect(() => {
    async function getSuggestions() {
      if (debouncedValue.length < 5) {
        setAddresses([])
        return
      }
      try {
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/search?addressdetails=1&q=${debouncedValue}&format=jsonv2&limit=${limit}`
        )
        const suggestions: LocationInfo[] = response.data.map(
          ({ display_name, lat, lon }: ResponseItem) => ({
            displayName: display_name,
            latitude: parseCoordinate(lat),
            longitude: parseCoordinate(lon),
          })
        )
        const uniqueSuggestions = [
          ...new Map(
            suggestions.map((item) => [item.displayName, item])
          ).values(),
        ]
        setAddresses(uniqueSuggestions)
      } catch (error) {
        console.error(error)
      }
    }
    getSuggestions()
  }, [debouncedValue, limit])

  return addresses
}
