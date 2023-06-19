import { useEffect, useState } from 'react'
import Logo from '../../logo/logo'
import accountConfirmation from '../../../actions/accountConfirmation'
import { Box, Button, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

const AccountCreated = () => {
  const { classes } = useStyles()
  const [success, setSuccess] = useState(false as boolean | undefined)

  useEffect(() => {
    async function fetchData() {
      const { location } = document
      // It is assumed that the link will look like this http://localhost:3000/account?code=1dfsdfsfd where 1dfsdfsfd is confirmationCode
      const confirmationCode = location.search.substring(6)
      const result = await accountConfirmation(confirmationCode)
      setSuccess(result)
    }
    if (success === undefined) {
      fetchData()
    }
  })

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
            <Button className={classes.startButton} variant="contained">
              let’s start!
            </Button>
          </Box>
          <Box
            component="img"
            sx={{ width: '100%' }}
            src="../img/account-footer.svg"
            alt=""
          ></Box>
        </Box>
      ) : (
        <Box>Error</Box>
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
