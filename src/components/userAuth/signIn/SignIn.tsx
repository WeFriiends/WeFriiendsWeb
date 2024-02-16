import Logo from '../../../common/Logo'
import { Box, Typography, Link } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { commonStyles } from 'styles/commonStyles'

const SignIn = () => {
  const { classes } = useStyles()
  const commonClasses = commonStyles().classes
  return (
    <Box className={`${commonClasses.mainBox} ${classes.mainGrid}`}>
      <Logo />
      <Typography
        variant="h1"
        className={`${commonClasses.title}  ${classes.title}`}
      >
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
      <Link
        href="/authentication/email-sign-in"
        className={commonClasses.linkBtn}
      >
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

const useStyles = makeStyles()(() => {
  return {
    mainGrid: {
      display: 'grid',
      gridTemplateRows: '1fr 2fr 1fr 2fr',
    },
    title: {
      paddingTop: 0,
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
