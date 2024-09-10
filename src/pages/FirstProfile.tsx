import { Box } from '@mui/material'
import Logo from 'components/logo/Logo'
import ProfileCarousel from 'components/firstProfile/ProfileCarousel'
import { makeStyles } from 'tss-react/mui'

const FirstProfile = () => {
  const { classes } = useStyles()

  return (
    <Box className={classes.mainBox}>
      <Logo />
      <ProfileCarousel />
    </Box>
  )
}

export default FirstProfile

const useStyles = makeStyles()((theme) => ({
  mainBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 50,
    overflow: 'hidden',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 200,
      width: 350,
      margin: '0 auto',
    },
    [theme.breakpoints.up(420)]: {
      width: 400,
      margin: '0 auto',
    },
  },
}))
