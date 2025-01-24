import * as React from 'react'
import {
  Box,
  Grid,
  Icon,
  Typography,
  TextField,
  Autocomplete,
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

const MyAccount: React.FC = () => {
  const { classes } = useStyles()
  const { data: profile, loading } = useProfileStore()
  const [errorForm, setFormError] = useState<string | null>(null)
  const [, setAddress] = useState<Address | null>(null)
  const navigate = useNavigate()

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

  const locationNamesTempList = [
    { label: 'New York' },
    { label: 'Seoul' },
    { label: 'Istanbul' },
    { label: 'Beijing' },
    { label: 'São Paulo' },
    { label: 'Buenos Aires' },
    { label: 'Tokyo' },
  ]

  const handleGetManualAddress = (value: any) => {
    // Assume `value` is the selected address object (e.g., from LocationInputAutocomplete)

    const resolvedAddress: Address = {
      country: value.addressDetails.country || '',
      city: value.addressDetails.city || '',
      street: value.addressDetails.road || '',
      houseNumber: value.addressDetails.house_number || '',
      lat: value.latitude || 0,
      lng: value.longitude || 0,
    }

    console.log(resolvedAddress)
    //
    if (validateLocation(resolvedAddress)) {
      console.log('new valid address')
      //   setAddress(resolvedAddress) // Update the state with the selected address
      //   onLocationChange(resolvedAddress) // Call the onLocationChange callback to notify parent component
      setFormError(null)
    } else {
      setFormError(
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
            />
            <FormHelperText error={true}>{errorForm}</FormHelperText>
            <br />
            <br />
            <br />
            {loading ? (
              'Loading...'
            ) : (
              <>
                {`${profile?.location.country}, ${profile?.location.city}, ${profile?.location.street}`}
                {profile?.location.houseNumber && ''}
                {`, ${profile?.location.houseNumber}`}
              </>
            )}
            <Box className={classes.btnLocation}>
              <Autocomplete
                className={classes.inputLocation}
                disablePortal
                id="location"
                options={locationNamesTempList}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="" />}
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
