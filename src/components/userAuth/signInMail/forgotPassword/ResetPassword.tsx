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

const ResetPassword = () => {
  const commonClasses = commonStyles().classes
  const { classes } = useStyles()
  const { register, handleSubmit, watch } = useForm()
  const inputPassword = watch('password')
  const inputConfirmPassword = watch('confirmPassword')
  const [showPassword, setShowPassword] = useState(false)

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
        />
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
        <Button
          fullWidth
          variant="contained"
          disableElevation
          disableRipple
          disabled={!inputPassword || !inputConfirmPassword}
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
})
