import Logo from '../../logo/logo'
import { Button, Grid, Typography, Box, Link } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

const CreateAccount = () => {
  const { classes } = useStyles()
  return (
    <Box
      mr={2.5}
      ml={2.5}
      align="center"
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
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              className={classes.Button}
              startIcon={
                <img
                  alt="fb"
                  src={'/img/fb.svg'}
                  sx={{ width: 24, height: 24, pr: 10 }}
                />
              }
            >
              Facebook
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              className={classes.Button}
              startIcon={
                <img
                  alt="google"
                  src={'/img/google.svg'}
                  sx={{ width: 24, height: 24, mr: '16px' }}
                />
              }
            >
              Google
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Link href="/registration">
              <Button fullWidth variant="contained" className={classes.button}>
                e-mail
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Typography className={classes.p}>
          By creating an account, I agree with
          <Link className={classes.link_small}> The Terms of Service </Link>
          and
          <Link className={classes.link_small}> Privacy Policy</Link>
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
const useStyles = makeStyles()((theme) => {
  return {
    title: {
      fontSize: '32px',
      fontWeight: '600',
      lineHeight: '40px',
      paddingTop: '80px',
      color: '#F46B5D',
    },
    subTitle: {
      fontSize: '26px',
      lineHeight: '40px',
      color: '#444444',
    },
    link: {
      color: '#1D878C',
      fontSize: '22px',
      textDecoration: 'none',
    },
    link_small: {
      textDecoration: 'none',
      color: '#1D878C',
      fontSize: '13px',
    },
    button: {
      textTransform: 'lowercase',
      backgroundColor: '#FFF1EC',
      color: '#444444',
      height: '56px',
      fontSize: '18px',
      textDecoration: 'none',
    },
    Button: {
      textTransform: 'capitalize',
      backgroundColor: '#FFF1EC',
      color: '#444444',
      height: '56px',
      fontSize: '18px',
    },
    p: {
      paddingTop: '15px',
      textAlign: 'left',
      fontSize: '13px',
    },
    text: {
      fontSize: '22px',
      color: '#3B4054',
    },
  }
})
