import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Box,
  Button,
  FormLabel,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material'
import { commonStyles } from 'styles/commonStyles'
import { makeStyles } from 'tss-react/mui'
import PasswordHintColorAndIcon from './PasswordHintColorAndIcon'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

const PasswordForm = ({
  onSuccessInput,
}: {
  onSuccessInput: (result: boolean) => void
}) => {
  const commonClasses = commonStyles().classes
  const { classes } = useStyles()
  const { register, handleSubmit, watch } = useForm()
  const password = watch('password')
  const confirmPassword = watch('confirmPassword')
  const [showPassword, setShowPassword] = useState(false)

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const onSubmit = () => {
    onSuccessInput(true)
  }

  return (
    <Box>
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
    </Box>
  )
}

export default PasswordForm
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
