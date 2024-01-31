import { useGeolocation } from '@uidotdev/usehooks'
import { Box, CircularProgress } from '@mui/material'
import AccessDenied from './AccessDenied'
import { commonStyles } from 'styles/commonStyles'

const Geolocation: React.FC = () => {
  const { classes } = commonStyles()
  const location = useGeolocation()

  if (location.loading) {
    return (
      <Box sx={{ display: 'grid', placeItems: 'center', height: '10rem' }}>
        <CircularProgress />
      </Box>
    )
  }

  if (location.error) {
    return <AccessDenied />
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

export default Geolocation
