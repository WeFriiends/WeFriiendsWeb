import { Box } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

const Logo = () => {
  const { classes } = useStyles()
  return (
    <Box align="center">
      <Box
        component="img"
        src="/img/logo.svg"
        alt="logo"
        className={classes.logo}
      ></Box>
    </Box>
  )
}

export default Logo

const useStyles = makeStyles()(() => {
  return {
    logo: {
      marginTop: '5vh',
    },
  }
})
