import { VisibilityOff, Visibility } from '@mui/icons-material'
import {
  Box,
  Button,
  FormHelperText,
  FormLabel,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  TextField,
  Typography,
} from '@mui/material'

import Logo from 'components/logo/Logo'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { commonStyles } from 'styles/commonStyles'
import { makeStyles } from 'tss-react/mui'

const ResetPassword = () => {
  const commonClasses = commonStyles().classes
  const { classes } = useStyles()
  const { register, handleSubmit, watch } = useForm()
  const password = watch('password')
  const confirmPassword = watch('confirmPassword')
  const [showPassword, setShowPassword] = useState(false)
  const [passwordFocus, setPasswordFocus] = useState(false)

  const passwordRegex =
    /^(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/
  const confirmFieldValue = watch('confirmPassword', '')

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data))
  }
  return (
    <Box className={commonClasses.mainBox}>
      <Logo />
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
          onBlur={() => {
            setPasswordFocus(true)
          }}
        />
        {passwordFocus && !passwordRegex.test(password) && (
          <FormHelperText component="div" className={classes.errorBox}>
            Your Password must have:
            <List>
              {/.{8,}/.test(watch('password')) ? (
                <ListItem sx={{ color: '#1D878C', padding: 0 }}>
                  <Box component="img" src="/img/check.svg"></Box>&nbsp;8 or
                  more symbols
                </ListItem>
              ) : (
                <ListItem sx={{ color: '#F46B5D', padding: 0 }}>
                  - &nbsp;8 or more symbols
                </ListItem>
              )}
              {/[0-9]/.test(watch('password')) ? (
                <ListItem sx={{ color: '#1D878C', padding: 0 }}>
                  <Box component="img" src="/img/check.svg"></Box>&nbsp;1 or
                  more numbers
                </ListItem>
              ) : (
                <ListItem sx={{ color: '#F46B5D', padding: 0 }}>
                  - &nbsp;1 or more numbers
                </ListItem>
              )}
              {/[a-zA-Z]/.test(watch('password')) ? (
                <ListItem sx={{ color: '#1D878C', padding: 0 }}>
                  <Box component="img" src="/img/check.svg"></Box>&nbsp;1 or
                  more Latin letterss
                </ListItem>
              ) : (
                <ListItem sx={{ color: '#F46B5D', padding: 0 }}>
                  - &nbsp;1 or more Latin letters
                </ListItem>
              )}
              {/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(watch('password')) ? (
                <ListItem sx={{ color: '#1D878C', padding: 0 }}>
                  <Box component="img" src="/img/check.svg"></Box>&nbsp;1 or
                  more special characters
                </ListItem>
              ) : (
                <ListItem sx={{ color: '#F46B5D', padding: 0 }}>
                  - &nbsp;1 or more special characters
                </ListItem>
              )}
            </List>
          </FormHelperText>
        )}
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
        {confirmFieldValue.length > 0 &&
          watch('password') !== watch('confirmPassword') && (
            <Typography
              sx={{ color: '#F46B5D', fontSize: '12px', lineHeight: '22px' }}
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
  },
})
