import Logo from '../../../common/Logo'
import { Typography, Box, Link } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

const CreateAccount = () => {
  const { classes } = useStyles()
  return (
    <Box className={classes.mainBox}>
      <Box>
        <Logo />
      </Box>
      <Box>
        <Typography variant="h1" className={classes.title}>
          New here?
        </Typography>
        <Typography className={classes.subTitle}>Create an account</Typography>
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
        <Link href="/registration/register-email" className={classes.linkBtn}>
          e-mail
        </Link>
        <Typography className={classes.p}>
          By creating an account, I agree with
          <Link className={classes.linkSmall}> The Terms of Service </Link>
          and
          <Link className={classes.linkSmall}> Privacy Policy</Link>
        </Typography>
      </Box>
      <Box>
        <Typography className={classes.text}>
          Already have an account?
        </Typography>
        <Link href="/authentication/sign-in" className={classes.link}>
          Sign In
        </Link>
      </Box>
    </Box>
  )
}

export default CreateAccount

const useStyles = makeStyles()((theme) => {
  return {
    mainBox: {
      display: 'grid',
      gridTemplateRows: '1fr 2fr 2fr 1fr',
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
      paddingTop: 80,
      color: '#F46B5D',
      textAlign: 'center',
    },
    subTitle: {
      fontSize: 26,
      lineHeight: '40px',
      color: '#444444',
      textAlign: 'center',
    },
    link: {
      color: '#1D878C',
      fontSize: 22,
      textDecoration: 'none',
      display: 'block',
      textAlign: 'center',
    },
    linkSmall: {
      textDecoration: 'none',
      color: '#1D878C',
      fontSize: 13,
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
    },
    p: {
      paddingTop: 14,
      textAlign: 'left',
      fontSize: 13,
    },
    text: {
      fontSize: 22,
      color: '#3B4054',
      textAlign: 'center',
    },
    startIcon: {
      marginRight: 16,
    },
  }
})
