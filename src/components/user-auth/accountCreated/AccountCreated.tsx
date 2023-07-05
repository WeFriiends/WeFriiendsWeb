import { useEffect, useState } from 'react'
import Logo from '../../logo/Logo'
import accountConfirmation from '../../../actions/accountConfirmation'
import { Box, Button, Typography, Link } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { useParams } from 'react-router-dom'

const AccountCreated = () => {
  const { classes } = useStyles()
  const [success, setSuccess] = useState(false as boolean)
  const { confirmationCode } = useParams()

  useEffect(() => {
    async function fetchData() {
      // It is assumed that the link will look like this http://localhost:3000/registration/glad-screen/2de95be7-9450-4c3a-80c8-e32584c90315 where 2de95be7-9450-4c3a-80c8-e32584c90315 is confirmationCode
      const result = await accountConfirmation(confirmationCode)
      setSuccess(result)
    }
    fetchData()
  }, [confirmationCode])

  return (
    <>
      {success ? (
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
        <Box>Something went wrong</Box>
      )}
    </>
  )
}

export default AccountCreated

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
