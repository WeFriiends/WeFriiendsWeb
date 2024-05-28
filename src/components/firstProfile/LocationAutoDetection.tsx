import { useGeolocation } from '@uidotdev/usehooks'
import { Box, CircularProgress } from '@mui/material'
import LocationAccessDenied from './LocationAccessDenied'
import { makeStyles } from 'tss-react/mui'

const LocationAutoDetection: React.FC = () => {
  const { classes } = useStyles()
  const location = useGeolocation()

  if (location.loading) {
    return (
      <Box sx={{ display: 'grid', placeItems: 'center', height: '10rem' }}>
        <CircularProgress />
      </Box>
    )
  }

  if (location.error) {
    return <LocationAccessDenied />
  }

  return (
    <Box
      className={classes.buttonsContainer}
      sx={{ height: '150px', flexDirection: 'column' }}
    >
      <Box> Your latitude: {location.latitude}</Box>

      <Box>Your longitude: {location.longitude}</Box>
    </Box>
  )
}

export default LocationAutoDetection

const useStyles = makeStyles()(() => {
  return {
    buttonsContainer: {
      marginTop: '1rem',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
    },
  }
})
