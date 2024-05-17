import Logo from '../logo/Logo'
import { Box, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { commonStyles } from 'styles/commonStyles'
import theme from 'styles/createTheme'
import LocationInputAutocomplete from './LocationInputAutocomplete'

const LocationManual = () => {
  const { classes } = useStyles()
  const commonClasses = commonStyles().classes
  return (
    <Box
      className={classes.locationBox}
      sx={{ gridTemplateRows: '1fr 1fr 1fr 1fr' }}
    >
      <Logo />

      <Typography
        variant="h3"
        className={`${commonClasses.text} ${classes.messageText}`}
        pt={15}
      >
        Please, note! This location will be used as a permanent one
      </Typography>

      <Typography variant="h1" className={classes.headingText}>
        Select your location
      </Typography>

      <LocationInputAutocomplete />
    </Box>
  )
}

export default LocationManual

const useStyles = makeStyles()(() => {
  return {
    locationBox: {
      display: 'grid',
      gridTemplateRows: '1fr 2fr 0.5fr',
      alignItems: 'center',
      marginLeft: 20,
      marginRight: 20,
      [theme.breakpoints.up('sm')]: {
        width: 400,
        margin: '0 auto',
      },
    },
    messageText: {
      fontSize: 12,
      lineHeight: '22px',
      color: '#1D878C',
    },
    headingText: {
      fontSize: 18,
      fontWeight: 600,
      lineHeight: '27px',
      color: theme.palette.text.primary,
      textAlign: 'center',
    },
  }
})
