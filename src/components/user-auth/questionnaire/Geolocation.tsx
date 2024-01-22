import { useGeolocation } from '@uidotdev/usehooks'
import { Box } from '@mui/material'
import AccessDenied from './AccessDenied'
import { commonStyles } from 'styles/commonStyles'

const Geolocation: React.FC = () => {
  const { classes } = commonStyles()
  const location = useGeolocation()

  if (location.loading) {
    return <p>loading...</p>
  }

  if (location.error) {
    return <AccessDenied />
  }

  return (
    <Box
      className={classes.flexContainer}
      sx={{ height: '150px', flexDirection: 'column' }}
    >
      <Box> Your latitude: {location.latitude}</Box>

      <Box>Your longitude: {location.longitude}</Box>
    </Box>
  )
}

export default Geolocation
