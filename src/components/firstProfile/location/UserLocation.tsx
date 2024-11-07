import { FC, useState, useEffect } from 'react'
import { reverseGeocode } from '../../../actions/geocoding'
import { useGeolocation } from '@uidotdev/usehooks'
import {
  getItemFromLocalStorage,
  setItemToLocalStorage,
} from 'utils/localStorage'
import { InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import Loader from 'common/svg/Loader'
import LocationManual from './LocationManual'
import { makeStyles } from 'tss-react/mui'

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
type Address = {
  country: string
  city: string
  street: string
  houseNumber: string
}

const UserLocation: FC = () => {
  const { classes } = useStyles()
  const { latitude, longitude, error } = useGeolocation()
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
    { lat: getItemFromLocalStorage('lat'), lng: getItemFromLocalStorage('lng') }
  )
  const [address, setAddress] = useState<Address | null>(null)
  const [_, setIsFocused] = useState(false)

  useEffect(() => {
    if (latitude && longitude) {
      setLocation({ lat: latitude, lng: longitude })
      const fetchAddress = async () => {
        const response = await reverseGeocode(latitude, longitude)
        const { country, city, town, village, road, house_number } =
          response.address
        setAddress({
          country: country || '',
          city: city || town || village || '',
          street: road || '',
          houseNumber: house_number || '',
        })

        setItemToLocalStorage('lat', latitude)
        setItemToLocalStorage('lng', longitude)
      }
      fetchAddress()
    }
  }, [latitude, longitude])

  useEffect(() => {
    setItemToLocalStorage('country', address?.country)
    setItemToLocalStorage('city', address?.city)
    setItemToLocalStorage('street', address?.street)
    setItemToLocalStorage('houseNumber', address?.houseNumber)
  }, [address?.country, address?.city, address?.street, address?.houseNumber])
  return (
    <div>
      {error && <div>Error: {error.message}</div>}
      <LocationManual />
      {!location && <Loader />}
      {location && address && (
        <TextField
          className={classes.inputAddressAutocomplete}
          value={`${address.city}, ${address.street}, ${address.houseNumber}`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      )}
    </div>
  )
}

export default UserLocation

const useStyles = makeStyles()(() => ({
  inputAddressAutocomplete: {
    width: '100%',
    "& input[type='search']::-webkit-search-cancel-button": {
      display: 'none',
    },
  },
}))
