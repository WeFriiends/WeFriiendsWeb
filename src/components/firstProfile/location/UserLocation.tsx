import React, { useState, useEffect } from 'react'
import { reverseGeocode } from '../../../actions/geocoding'
import { useGeolocation } from '@uidotdev/usehooks'
import { setItemToLocalStorage } from 'utils/localStorage'

export const checkGeolocationPermission = async () => {
  if (!navigator.permissions) {
    return 'unsupported'
  }

  try {
    const result = await navigator.permissions.query({ name: 'geolocation' })
    return result.state // 'granted', 'denied', or 'prompt'
  } catch (error) {
    console.error('Error checking geolocation permission:', error)
    return 'error'
  }
}

const UserLocation: React.FC = () => {
  const { latitude, longitude, error } = useGeolocation()
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
    null
  )
  const [address, setAddress] = useState<string | null>(null)
  const [showInput, setShowInput] = useState(false)

  useEffect(() => {
    if (latitude && longitude) {
      setLocation({ lat: latitude, lng: longitude })
      const fetchAddress = async () => {
        const response = await reverseGeocode(latitude, longitude)
        setAddress(response.display_name || 'Address not found')
      }
      fetchAddress()
      setShowInput(true)
    }
  }, [latitude, longitude])

  const handleLocationChange = (location: { city: string; street: string }) => {
    setItemToLocalStorage('city', location.city)
    setItemToLocalStorage('street', location.street)
    setItemToLocalStorage('lat', latitude)
    setItemToLocalStorage('lng', longitude)
  }

  return (
    <div>
      {error && <div>Error: {error.message}</div>}
      {!location && !showInput && <div>Fetching your location...</div>}
      {address && (
        <div>
          <h3>Your location: {address}</h3>
        </div>
      )}
    </div>
  )
}

export default UserLocation
