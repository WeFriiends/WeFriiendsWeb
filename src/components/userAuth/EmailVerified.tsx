import { Box, Button, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import Logo from 'components/logo/Logo'
import { useAuth0 } from '@auth0/auth0-react'

const EmailVerified = () => {
  const { classes } = useStyles()
  const { loginWithRedirect } = useAuth0()

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: 'user/fill-profile',
      },
    })
  }
  return (
    <Box className={classes.mainBox}>
      <Logo />
      <Typography className={classes.text} sx={{ paddingTop: '65px' }}>
        Glad you’re here!
      </Typography>
      <Typography className={classes.text} sx={{ marginBottom: '50px' }}>
        Hope, you’ll enjoy!
      </Typography>
      <Button
        className={classes.startButton}
        variant="contained"
        onClick={handleLogin}
      >
        let’s start!
      </Button>
    </Box>
  )
}
export default EmailVerified

const useStyles = makeStyles()({
  mainBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 200,
    maxWidth: 355,
    margin: '0 auto',
  },
  text: {
    fontSize: 40,
    lineHeight: '150%',
    fontWeight: 500,
  },
  startButton: {
    width: '70%',
    textTransform: 'lowercase',
    backgroundColor: '#FB8F67',
    color: '#FFFFFF',
    height: 56,
    fontSize: 18,
    fontWeight: 600,
    borderRadius: 10,
  },
})
