import Logo from '../../logo/logo'
import { Button, Grid, Typography, Box, Link } from '@mui/material'

const CreateAccount = () => {
  return (
    <Box
      mr={2.5}
      ml={2.5}
      // align="center"
      height="100vh"
      sx={{ display: 'grid', gridTemplateRows: '1fr 2fr 4fr 1fr' }}
    >
      <Box>
        <Logo />
      </Box>
      <Box>
        <Typography variant="h1" sx={styles.title}>
          New here?
        </Typography>
        <Typography sx={styles.subTitle}>Create an account</Typography>
      </Box>
      <Box>
        <Grid container spacing={2.5}>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              sx={styles.Button}
              // sx={{ widthP: 24, height: 24, pr: 10 }}
              startIcon={<img alt="fb" src={'/img/fb.svg'} />}
            >
              Facebook
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              sx={styles.Button}
              startIcon={
                <img
                  alt="google"
                  src={'/img/google.svg'}
                  // sx={{ widthP: 24, height: 24, pr: 10 }}
                />
              }
            >
              Google
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Link href="/registration">
              <Button fullWidth variant="contained" sx={styles.button}>
                e-mail
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Typography sx={styles.p}>
          {' '}
          By creating an account, I agree with
          <Link sx={styles.link_small}> The Terms of Service </Link>
          and
          <Link sx={styles.link_small}> Privacy Policy</Link>
        </Typography>
      </Box>
      <Box>
        <Typography sx={styles.text}>Already have an account?</Typography>
        <Link href="/signIn" sx={styles.link}>
          Sign In
        </Link>
      </Box>
    </Box>
  )
}

export default CreateAccount

const styles = {
  title: {
    fontSize: '32px',
    fontWeight: '600',
    lineHeight: '40px',
    pt: '80px',
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
  p: { paddingTop: '15px', textAlign: 'left' },
  text: {
    fontSize: '22px',
    color: '#3B4054',
  },
}
