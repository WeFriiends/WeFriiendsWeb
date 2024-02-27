import { Box, Button, Typography } from '@mui/material'
import Logo from 'components/logo/Logo'
import { commonStyles } from 'styles/commonStyles'
import { makeStyles } from 'tss-react/mui'
import { useState } from 'react'
import InputEmail from './InputEmail'

const NewPassword = () => {
  const commonClasses = commonStyles().classes
  const { classes } = useStyles()
  const [success, setSuccess] = useState(false)

  const handleSuccessInput = (result: boolean): void => {
    setSuccess(result)
  }

  return (
    <Box className={commonClasses.mainBox}>
      <Logo />
      {!success ? (
        <InputEmail onSuccessInput={handleSuccessInput} />
      ) : (
        <>
          <Typography variant="h1" className={commonClasses.title}>
            Request new password
          </Typography>
          <Typography className={classes.description}>
            We&#39;ll send you a link to reset your password if this email is
            registered with us.
          </Typography>
          <Typography className={classes.description}>
            If you did not receive the email, please also check your spam
            folder.
          </Typography>
          <Button
            fullWidth
            variant="contained"
            disableElevation
            disableRipple
            className={commonClasses.submitButton}
          >
            ok
          </Button>
        </>
      )}
    </Box>
  )
}

export default NewPassword

const useStyles = makeStyles()({
  description: {
    marginTop: 30,
    marginBottom: 15,
    fontSize: 14,
    lineHeight: '18px',
    color: '#444444',
    '&:nth-of-type(2)': {
      marginTop: 15,
    },
  },
  formStyle: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputField: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none',
      },
    },
  },
  errorMessage: {
    fontSize: 12,
    lineHeight: '22px',
    color: '#1D878C',
  },
})
