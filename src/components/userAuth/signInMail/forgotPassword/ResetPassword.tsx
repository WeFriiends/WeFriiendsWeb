import { VisibilityOff, Visibility } from '@mui/icons-material'
import {
  Box,
  Button,
  FormLabel,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material'

import Logo from 'components/logo/Logo'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { commonStyles } from 'styles/commonStyles'
import { makeStyles } from 'tss-react/mui'
import SuccesResetPassword from './SuccessResetPassword'
import PasswordHintColorAndIcon from './PasswordHintColorAndIcon'

const ResetPassword = () => {
  const commonClasses = commonStyles().classes
  const { classes } = useStyles()
  const { register, handleSubmit, watch } = useForm()
  const password = watch('password')
  const confirmPassword = watch('confirmPassword')
  const [showPassword, setShowPassword] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data))
    setSuccess(true)
  }

  return (
    <Box className={commonClasses.mainBox}>
      <Logo />
      {!success ? (
        <>
          <Typography variant="h1" className={commonClasses.title}>
            Reset your password
          </Typography>
          <form className={classes.formStyle} onSubmit={handleSubmit(onSubmit)}>
            <FormLabel className={classes.labelStyle} sx={{ marginTop: 2.5 }}>
              New Password
            </FormLabel>
            <TextField
              className={commonClasses.inputField}
              type={showPassword ? 'text' : 'password'}
              {...register('password')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleTogglePasswordVisibility}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <PasswordHintColorAndIcon password={password} />
            <FormLabel className={classes.labelStyle} sx={{ marginTop: 4 }}>
              One more time
            </FormLabel>
            <TextField
              type={showPassword ? 'text' : 'password'}
              className={commonClasses.inputField}
              {...register('confirmPassword')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleTogglePasswordVisibility}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {confirmPassword?.length > 0 &&
              watch('password') !== watch('confirmPassword') && (
                <Typography
                  sx={{
                    color: '#F46B5D',
                    fontSize: '12px',
                    lineHeight: '22px',
                  }}
                >
                  Must match the first password input field.
                </Typography>
              )}
            <Button
              fullWidth
              variant="contained"
              disableElevation
              disableRipple
              disabled={
                !password || !confirmPassword || password !== confirmPassword
              }
              className={commonClasses.submitButton}
              type="submit"
            >
              save
            </Button>
          </form>
        </>
      ) : (
        <SuccesResetPassword />
      )}
    </Box>
  )
}
export default ResetPassword

const useStyles = makeStyles()({
  formStyle: {
    display: 'flex',
    flexDirection: 'column',
  },
  labelStyle: {
    fontSize: 14,
    lineHeight: '22px',
    color: ' #444444',
  },
  errorBox: {
    boxShadow: '0px 0px 5px 0px #D9D9D9',
    borderRadius: 10,
    padding: '17px 0 20px 23px',
    marginTop: 20,
    fontWeight: 500,
  },
})
