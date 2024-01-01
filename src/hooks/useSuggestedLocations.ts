import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDebounce } from 'usehooks-ts'

export const useSuggestedLocations = (
  location: string,
  bounceDuration: number,
  limit: number
) => {
  const debouncedValue = useDebounce<string>(location, bounceDuration)
  const [addresses, setAddresses] = useState<string[]>([])

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
        const suggestions = response.data.map(
          (locationInfo: any) => locationInfo.display_name
        )
        setAddresses(suggestions)
      } catch (error) {
        console.error(error)
      }
    }
    getSuggestions()
  }, [debouncedValue])

  return addresses
}
