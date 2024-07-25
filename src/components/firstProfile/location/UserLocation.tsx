// UserLocation.tsx
import React, { useState, useEffect } from 'react'
import { reverseGeocode } from '../../../actions/geocoding'
import { useGeolocation } from '@uidotdev/usehooks'
import LocationInput from './LocationInput'

export const checkGeolocationPermission = async () => {
  if (!navigator.permissions) {
    return 'unsupported'
  }

  try {
    const result = await navigator.permissions.query({ name: 'geolocation' })
    console.log('Permission status:', result)
    return result.state // 'granted', 'denied', or 'prompt'
  } catch (error) {
    console.error('Error checking geolocation permission:', error)
    return 'error'
  }
}

const UserLocation: React.FC = () => {
  const { latitude, longitude, error } = useGeolocation()
  const state = useGeolocation()
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
    null
  )
  const [address, setAddress] = useState<string | null>(null)
  const [showInput, setShowInput] = useState(false)
  const [permissionStatus, setPermissionStatus] = useState<string | null>(null)
  useEffect(() => {
    const getPermissionStatus = async () => {
      const status = await checkGeolocationPermission()
      setPermissionStatus(status)
    }

    getPermissionStatus()
  }, [])
  console.log({ permissionStatus })
  useEffect(() => {
    console.log('Latitude:', latitude)
    console.log('Longitude:', longitude)
    console.log({ state })
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
    // Handle the location data as needed
    console.log('User location:', location)
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
      {(location || showInput) && (
        <LocationInput onLocationChange={handleLocationChange} />
      )}
    </div>
  )
}

export default UserLocation
