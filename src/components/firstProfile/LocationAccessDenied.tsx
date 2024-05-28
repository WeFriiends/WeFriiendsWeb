import { Box } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import theme from 'styles/createTheme'

const LocationAccessDenied = () => {
  const { classes } = useStyles()

  return (
    <>
      <Box className={classes.highlightText}>
        You have to allow WeFriiends to access your device location.
        <br /> Otherwise, we can’t find a friend for you.
      </Box>

      <Box className={classes.blackText}>
        If you still want to find friends, please fill the following
      </Box>
    </>
  )
}

export default LocationAccessDenied

const useStyles = makeStyles()(() => {
  return {
    highlightText: {
      color: theme.palette.primary.main,
      fontWeight: 600,
      fontSize: 26,
      textAlign: 'center',
      margin: '1rem',
    },
    blackText: {
      color: theme.palette.text.primary,
      fontWeight: 600,
      fontSize: 18,
      textAlign: 'center',
      margin: '1rem',
    },
  }
})
