import Logo from '../../logo/Logo'
import { Button, Grid, Typography, Box, Link } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

const CreateAccount = () => {
  const { classes } = useStyles()
  return (
    <Box
      mr={2.5}
      ml={2.5}
      height="100vh"
      sx={{ display: 'grid', gridTemplateRows: '1fr 2fr 4fr 1fr' }}
    >
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
        <Grid container spacing={2.5}>
          {/* <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              className={classes.fbAndGoogleButton}
              startIcon={<img alt="fb" src={'/img/fb.svg'} />}
            >
              Facebook
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              className={classes.fbAndGoogleButton}
              startIcon={<img alt="google" src={'/img/google.svg'} />}
            >
              Google
            </Button>
          </Grid> */}
          <Grid item xs={12}>
            <Link href="/registration">
              <Button
                fullWidth
                variant="contained"
                className={classes.emailButton}
              >
                e-mail
              </Button>
            </Link>
          </Grid>
        </Grid>
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
        <Link href="/signIn" className={classes.link}>
          Sign In
        </Link>
      </Box>
    </Box>
  )
}

export default CreateAccount

const useStyles = makeStyles()(() => {
  return {
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
    emailButton: {
      textTransform: 'lowercase',
      backgroundColor: '#FFF1EC',
      color: '#444444',
      height: 56,
      fontSize: 18,
      textDecoration: 'none',
    },
    fbAndGoogleButton: {
      textTransform: 'capitalize',
      backgroundColor: '#FFF1EC',
      color: '#444444',
      height: 56,
      fontSize: 18,
    },
    p: {
      paddingTop: 15,
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
