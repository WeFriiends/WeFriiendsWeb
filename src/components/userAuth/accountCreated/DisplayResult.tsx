import { FC } from 'react'
import { Box, Typography, Link, Button } from '@mui/material'
import Logo from 'components/logo/Logo'
import { makeStyles } from 'tss-react/mui'

type DisplayResultProps = {
  state: boolean
}

const DisplayResult: FC<DisplayResultProps> = ({ state }) => {
  const { classes } = useStyles()
  return (
    <>
      {state ? (
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
          <Box className={classes.mainBox}>
            <Logo />
            <Typography className={classes.text} sx={{ paddingTop: '65px' }}>
              Glad you’re here!
            </Typography>
            <Typography className={classes.text} sx={{ marginBottom: '50px' }}>
              Hope, you’ll enjoy!
            </Typography>
            <Link href="/authentication/email-sign-in" underline="none">
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

const useStyles = makeStyles()((theme) => {
  return {
    mainBox: {
      [theme.breakpoints.up('sm')]: {
        width: 500,
        margin: '0 auto',
      },
    },
    text: {
      fontSize: 40,
      lineHeight: '150%',
      fontWeight: 500,
      paddingLeft: '10%',
      paddingRight: '20%',
      [theme.breakpoints.up('sm')]: {
        textAlign: 'center',
        paddingLeft: 0,
        paddingRight: 0,
      },
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
