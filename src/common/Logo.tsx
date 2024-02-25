import { Box } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

const Logo = () => {
  const { classes } = useStyles()
  return (
    <Box
      component="img"
      src="/img/logo.svg"
      alt="logo"
      className={classes.logo}
    />
  )
}

export default Logo

const useStyles = makeStyles()(() => {
  return {
    logo: {
      marginTop: '5vh',
      width: '15.58925rem',
      height: '2.875rem',
    },
  }
})
