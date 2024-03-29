import { Typography, Box, Link } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { useAuth0 } from '@auth0/auth0-react'

import Logo from '../../logo/Logo'
import { commonStyles } from 'styles/commonStyles'
import Loader from 'common/Loader'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: 'user/messages-and-friends',
      },
    })
  }

  return <button onClick={handleLogin}>Sign In</button>
}
const SignupButton = () => {
  const { loginWithRedirect } = useAuth0()

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: 'user/messages-and-friends',
      },
      authorizationParams: {
        screen_hint: 'signup',
      },
    })
  }

  return (
    <button className="button__sign-up" onClick={handleSignUp}>
      Sign Up
    </button>
  )
}

export const LogoutButton = () => {
  const { logout } = useAuth0()

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    })
  }

  return (
    <button className="button__logout" onClick={handleLogout}>
      Log Out
    </button>
  )
}

const CreateAccount = () => {
  const { classes } = useStyles()
  const commonClasses = commonStyles().classes
  const { isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return <Loader />
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
        {!isAuthenticated && (
          <>
            <SignupButton />
            <LoginButton />
          </>
        )}
        {isAuthenticated && (
          <>
            <LogoutButton />
          </>
        )}
      </Box>
      <Box>
        {/* <Button
          fullWidth
          variant="contained"
          className={classes.fbAndGoogleButton}
          startIcon={<img alt="fb" src={'/img/fb.svg'} />}
        >
          Facebook
        </Button>
        <Button
          fullWidth
          variant="contained"
          className={classes.fbAndGoogleButton}
          startIcon={<img alt="google" src={'/img/google.svg'} />}
        >
          Google
        </Button> */}
        <Link
          href="/registration/register-email"
          className={commonClasses.linkBtn}
        >
          e-mail
        </Link>
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

        {/* <Link href="/authentication/sign-in" className={commonClasses.link}>
          Sign In
        </Link> */}
      </Box>
    </Box>
  )
}

export default CreateAccount

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
