import Logo from '../../logo/Logo'
import { Box, Typography, Grid, Button, Link } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

const SignIn = () => {
  const { classes } = useStyles()
  return (
    <Box mr={2.5} ml={2.5} align="center">
      <Logo />
      <Typography variant="h1" className={classes.title} pt={11}>
        Sign In?
      </Typography>
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
      <Link href="/mailSignIn" underline="none">
        <Button fullWidth variant="contained" className={classes.emailButton}>
          e-mail
        </Button>
      </Link>

      <Typography variant="body1" fontSize={22} color="#3B4054" pt={15}>
        Don’t have an account?
      </Typography>
      <Link href="/" underline="none" fontSize={22} color="#1D878C">
        Sign Up
      </Link>
    </Box>
  )
}

export default SignIn

const useStyles = makeStyles()(() => {
  return {
    title: {
      fontSize: 32,
      fontWeight: 600,
      lineHeight: '40px',
      color: '#F46B5D',
    },
    emailButton: {
      textTransform: 'lowercase',
      backgroundColor: '#FFF1EC',
      color: '#444444',
      height: 56,
      fontSize: 18,
      textDecoration: 'none',
      '&: hover': {
        backgroundColor: '#FFF1EC',
      },
    },
    fbAndGoogleButton: {
      textTransform: 'capitalize',
      backgroundColor: '#FFF1EC',
      color: '#444444',
      height: 56,
      fontSize: 18,
      '&: hover': {
        backgroundColor: '#FFF1EC',
      },
    },
  }
})
