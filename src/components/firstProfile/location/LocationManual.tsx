import { Box, Typography, FormHelperText } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import theme from 'styles/createTheme'
import LocationInputAutocomplete from './LocationAutocomplete'

const LocationManual = () => {
  const { classes } = useStyles()
  return (
    <Box>
      <FormHelperText className={classes.helperText}>
        Please, note! This location will be used as a permanent one
      </FormHelperText>

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
    helperText: {
      marginTop: 0,
      marginBottom: 30,
    },
    text: {
      fontSize: 12,
    },
  }
})
