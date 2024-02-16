import Logo from '../../../common/Logo'
import { Box, Typography, Link } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

const SignIn = () => {
  const { classes } = useStyles()
  return (
    <Box className={classes.mainBox}>
      <Logo />
      <Typography variant="h1" className={classes.title}>
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
      <Link href="/authentication/email-sign-in" className={classes.linkBtn}>
        e-mail
      </Link>
      <div className={classes.textCenter}>
        <Typography variant="body1" fontSize={22} color="#3B4054">
          Don’t have an account?
        </Typography>
        <Link href="/" underline="none" fontSize={22} color="#1D878C">
          Sign Up
        </Link>
      </div>
    </Box>
  )
}

export default SignIn

const useStyles = makeStyles()((theme) => {
  return {
    mainBox: {
      display: 'grid',
      gridTemplateRows: '1fr 2fr 1fr 2fr',
      alignItems: 'center',
      marginLeft: 20,
      marginRight: 20,
      [theme.breakpoints.up('sm')]: {
        width: 400,
        margin: '0 auto',
      },
    },
    title: {
      fontSize: 32,
      fontWeight: 600,
      lineHeight: '40px',
      color: '#F46B5D',
      textAlign: 'center',
    },
    linkBtn: {
      display: 'block',
      textTransform: 'lowercase',
      backgroundColor: '#FFF1EC',
      color: '#444444',
      paddingTop: 18,
      paddingBottom: 18,
      borderRadius: 10,
      fontSize: 18,
      textDecoration: 'none',
      textAlign: 'center',
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
    textCenter: {
      textAlign: 'center',
    },
  }
})
