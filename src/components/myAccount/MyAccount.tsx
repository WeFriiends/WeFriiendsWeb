import * as React from 'react'
import {
  Box,
  Grid,
  Icon,
  Typography,
  TextField,
  Button,
  FormHelperText,
} from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import theme from '../../styles/createTheme'
import AgeRangeControl from './AgeRangeControl'
import DistanceControl from './DistanceControl'
import { useProfileStore } from '../../zustand/store'
import LocationInputAutocomplete from '../firstProfile/location/LocationAutocomplete'
import { Address } from '../firstProfile/profile'
import { validateLocation } from '../firstProfile/utils/validateLocation'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import HelpAndSupport from './HelpAndSupport'
import MyProfile from './MyProfile'
import useBearerToken from '../../hooks/useBearToken'

const MyAccount: React.FC = () => {
  const { classes } = useStyles()
  const {
    data: profile,
    loading,
    updateProfile: updateProfileAction,
  } = useProfileStore()
  const [errorLocation, setErrorLocation] = useState<string | null>(null)
  const [, setAddress] = useState<Address | null>(null)
  const navigate = useNavigate()
  const token = useBearerToken()

  useEffect(() => {
    if (profile?.location) {
      setAddress({
        country: profile.location.country || '',
        city: profile.location.city || '',
        street: profile.location.street || '',
        houseNumber: profile.location.houseNumber || '',
        lat: profile.location.lat || 0,
        lng: profile.location.lng || 0,
      })
    }
  }, [profile])

  const handleGetManualAddress = async (value: any) => {
    // Assume `value` is the selected address object (e.g., from LocationInputAutocomplete)

    const resolvedAddress: Address = {
      country: value.addressDetails.country || '',
      city:
        value.addressDetails.city ||
        value.addressDetails.town ||
        value.addressDetails.hamlet ||
        value.addressDetails.village ||
        '',
      street: value.addressDetails.road || '',
      houseNumber: value.addressDetails.house_number || '',
      lat: value.latitude,
      lng: value.longitude,
    }

    if (validateLocation(resolvedAddress)) {
      // Обновляем адрес на сервере
      setErrorLocation('Changing...')
      if (token) {
        try {
          await updateProfileAction(
            {
              location: {
                lat: resolvedAddress.lat,
                lng: resolvedAddress.lng,
                country: resolvedAddress.country,
                city: resolvedAddress.city,
                street: resolvedAddress.street,
                houseNumber: resolvedAddress.houseNumber,
              },
            },
            token
          )
          // Показываем сообщение об успешном обновлении, только если запрос прошел успешно
          setErrorLocation('The address has been successfully changed.')
        } catch (err) {
          console.error('Error updating address:', err)
          setErrorLocation('Failed to update address.')
        }
      } else {
        console.error('Token is not available.')
        setErrorLocation('Authentication error. Please try logging in again.')
      }
    } else {
      setErrorLocation(
        'Invalid location data, accuracy up to house number is needed.'
      )
    }
  }

  return (
    <Grid container spacing={3}>
      <Button
        variant="text"
        onClick={() => navigate('/account')}
        sx={{ textDecoration: 'none', color: '#007bff' }}
      >
        Change account
      </Button>
      <Grid item xs={12} className={classes.twoColumnLayoutWrapper}>
        <Box className={classes.twoColumnLayoutColLeft}>
          <Typography variant="h1" className={classes.title}>
            My account
          </Typography>
          <Box className={classes.settingsDescription}>
            <Typography variant="h2" className={classes.subtitle}>
              Settings
            </Typography>
            <Typography variant="body2" className={classes.description}>
              Indicate what is important to you <br />
              and we will show you the best options.
            </Typography>
          </Box>
          <Box className={classes.settingsItem}>
            <Typography variant="h2" className={classes.subtitle}>
              Location
            </Typography>
            <LocationInputAutocomplete
              onLocationChange={handleGetManualAddress}
              defaultValue={
                loading
                  ? 'Loading...'
                  : `${profile?.location.country || ''}, ${
                      profile?.location.city || ''
                    }, ${profile?.location.street || ''}${
                      profile?.location.houseNumber
                        ? `, ${profile.location.houseNumber}`
                        : ''
                    }`
              }
            />
            <FormHelperText error={true}>{errorLocation}</FormHelperText>

            <Box className={classes.btnLocation}>
              <TextField
                className={classes.inputLocation}
                id="location"
                sx={{ width: 300 }}
              />
              <Icon>
                <img
                  className={classes.btnLocationIcon}
                  src="/img/icon-location-arrow.svg"
                  alt="Change location"
                />
              </Icon>
            </Box>
            <DistanceControl>
              <Typography variant="body2" className={classes.descriptionSlider}>
                Distance from location (100 km max)
              </Typography>
            </DistanceControl>
          </Box>
          <Box className={classes.settingsItem}>
            <AgeRangeControl />
          </Box>
          <HelpAndSupport />
        </Box>
        <Box className={classes.twoColumnLayoutColRight}>
          <MyProfile />
        </Box>
      </Grid>
    </Grid>
  )
}

export default MyAccount

const useStyles = makeStyles()({
  twoColumnLayoutWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'column',
    paddingBottom: 100,
    [theme.breakpoints.up(850)]: {
      alignItems: 'start',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    [theme.breakpoints.up('lg')]: {
      paddingBottom: 0,
    },
  },
  twoColumnLayoutColLeft: {
    width: 350,
    marginBottom: 50,
    maxWidth: '100%',
    [theme.breakpoints.up(850)]: {
      width: 350,
    },
  },
  twoColumnLayoutColRight: {
    width: 450,
    maxWidth: '100%',
    overflow: 'auto',
    [theme.breakpoints.up(850)]: {
      width: 450,
    },
  },

  title: {
    paddingTop: 60,
    paddingBottom: 10,
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 600,
    [theme.breakpoints.up('lg')]: {
      paddingTop: 0,
      paddingBottom: 20,
      textAlign: 'left',
      fontSize: 24,
      fontWeight: 500,
    },
  },
  subtitle: {
    fontSize: 16,
    lineHeight: '22px',
    marginTop: 15,
    marginBottom: 20,
  },
  noBottomMargin: {
    marginBottom: 0,
  },
  description: {
    lineHeight: 1.3,
    marginBottom: 30,
  },
  descriptionSlider: {
    lineHeight: 1.3,
  },
  settingsDescription: {
    marginBottom: 50,
  },
  settingsItem: {
    marginBottom: 30,
  },
  btnLocation: {
    height: 34,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.palette.common.white,
    boxShadow: '0 0 7px 1px rgba(217, 217, 217, 0.5)',
    borderRadius: 8,
    fontWeight: 500,
    fontSize: 12,
    marginBottom: 20,
    paddingRight: 10,
    color: theme.palette.common.black,
    textTransform: 'none',
    '& .MuiInputBase-root.MuiAutocomplete-inputRoot': {
      padding: 0,
    },
    '& .MuiOutlinedInput-root .MuiAutocomplete-endAdornment': {
      display: 'none',
    },
    '& .MuiInputBase-input.MuiOutlinedInput-input': {
      padding: '8.5px 15px',
      fontWeight: 500,
      fontSize: 12,
      color: theme.palette.common.black,
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'transparent',
    },
    '& .MuiAutocomplete-hasPopupIcon .MuiOutlinedInput-root': {
      padding: 0,
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
      {
        border: 0,
      },
  },
  btnLocationIcon: {
    width: 15,
    height: 14,
    margin: '5px 0',
  },
  inputLocation: {
    border: 0,
  },
})
