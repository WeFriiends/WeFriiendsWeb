import { Typography, Box, Link, Button } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { useAuth0 } from '@auth0/auth0-react'
import Logo from '../logo/Logo'
import { commonStyles } from 'styles/commonStyles'
import LoadingScreen from 'common/svg/Loader'

const UserAuthentication = () => {
  const { classes } = useStyles()
  const commonClasses = commonStyles().classes
  const { isLoading, loginWithRedirect } = useAuth0()

  if (isLoading) {
    return <LoadingScreen />
  }

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: 'user/messages-and-friends',
      },
    })
  }

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: 'user/fill-profile',
      },
      authorizationParams: {
        screen_hint: 'signup',
      },
    })
  }

  return (
    <Box className={`${commonClasses.mainBox} ${classes.mainGrid}`}>
      <Box>
        <Logo />
      </Box>
      <Box>
        <Typography variant="h1" className={commonClasses.title}>
          New here?
        </Typography>
        <Typography className={commonClasses.subTitle}>
          Create an account
        </Typography>
      </Box>
      <Box>
        <Button
          fullWidth
          variant="contained"
          className={classes.fbAndGoogleButton}
          startIcon={<img alt="fb" src={'/img/fb.svg'} />}
          onClick={handleSignUp}
        >
          Facebook
        </Button>
        <Button
          fullWidth
          variant="contained"
          className={classes.fbAndGoogleButton}
          startIcon={<img alt="google" src={'/img/google.svg'} />}
          onClick={handleSignUp}
        >
          Google
        </Button>
        <Button
          fullWidth
          variant="contained"
          className={commonClasses.linkBtn}
          onClick={handleSignUp}
        >
          e-mail
        </Button>
        <Typography className={commonClasses.p}>
          By creating an account, I agree with
          <Link
            className={commonClasses.linkSmall}
            href="https://wefriiends.com/documents/privacy.html"
            target="_blank"
            rel="noopener"
          >
            {' The Terms of Service '}
          </Link>
          and
          <Link
            className={commonClasses.linkSmall}
            href="https://wefriiends.com/documents/privacy.html"
            target="_blank"
            rel="noopener"
          >
            {' Privacy Policy'}
          </Link>
        </Typography>
      </Box>
      <Box>
        <Typography className={commonClasses.text}>
          Already have an account?
        </Typography>
        <Button
          fullWidth
          variant="contained"
          className={commonClasses.linkSmall}
          onClick={handleLogin}
        >
          Sign In
        </Button>
      </Box>
    </Box>
  )
}
export default UserAuthentication

const useStyles = makeStyles()(() => {
  return {
    mainGrid: {
      display: 'grid',
      gridTemplateRows: '1fr 2fr 2fr 1fr',
    },
    fbAndGoogleButton: {
      textTransform: 'capitalize',
      backgroundColor: '#FFF1EC',
      color: '#444444',
      height: 56,
      fontSize: 18,
    },
    startIcon: {
      marginRight: 16,
    },
  }
})
