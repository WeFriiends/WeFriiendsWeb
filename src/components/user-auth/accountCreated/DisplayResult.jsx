import { Box, Typography, Link, Button } from '@mui/material'
import Logo from 'components/logo/Logo'
import { makeStyles } from 'tss-react/mui'

const DisplayResult = (props) => {
  const { classes } = useStyles()
  return (
    <>
      {props.state ? (
        <Box
          sx={{
            display: 'grid',
            gridTemplateRows: 'auto 1fr auto',
            minHeight: '100vh',
          }}
        >
          <Box
            component="img"
            sx={{
              width: '100%',
            }}
            src="../img/account-header.svg"
            alt=""
          ></Box>
          <Box>
            <Logo />
            <Typography className={classes.text} sx={{ paddingTop: '65px' }}>
              Glad you’re here!
            </Typography>
            <Typography className={classes.text} sx={{ marginBottom: '50px' }}>
              Hope, you’ll enjoy!
            </Typography>
            <Link href="/mailSignIn" underline="none">
              <Button className={classes.startButton} variant="contained">
                let’s start!
              </Button>
            </Link>
          </Box>
          <Box
            component="img"
            sx={{ width: '100%' }}
            src="../img/account-footer.svg"
            alt=""
          ></Box>
        </Box>
      ) : (
        <Box>Account was not confirmed</Box>
      )}
    </>
  )
}

export default DisplayResult

const useStyles = makeStyles()(() => {
  return {
    text: {
      fontSize: 40,
      lineHeight: '150%',
      fontWeight: 500,
      paddingLeft: '10%',
      paddingRight: '20%',
    },
    startButton: {
      width: '70%',
      marginLeft: '15%',
      textTransform: 'lowercase',
      backgroundColor: '#FB8F67',
      color: '#FFFFFF',
      height: 56,
      fontSize: 18,
      fontWeight: 600,
      borderRadius: 10,
    },
  }
})
