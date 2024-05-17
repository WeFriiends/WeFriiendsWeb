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
    <Box className={commonClasses.mainBox}>
      <Logo />

      <Typography
        variant="body1"
        className={`${commonClasses.text} ${classes.messageText}`}
        pt={15}
      >
        Please, note! This location will be used as a permanent one
      </Typography>

      <Typography
        variant="body1"
        className={`${commonClasses.text} ${classes.headingText}`}
        pt={5}
      >
        Select your location
      </Typography>

      <LocationInputAutocomplete />
    </Box>
  )
}

export default LocationManual

const useStyles = makeStyles()(() => {
  return {
    messageText: {
      fontSize: 12,
      lineHeight: '22px',
      color: '#1D878C',
    },
    headingText: {
      fontSize: 18,
      lineHeight: '27px',
      color: theme.palette.text.primary,
    },
    profileInput: {
      backgroundColor: '#FFF1EC',
      borderRadius: 10,
      outline: 'none',
      '&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        border: 'none',
      },
    },
  }
})
