import { Box, Button, TextField, Typography } from '@mui/material'
import { commonStyles } from 'styles/commonStyles'
import { makeStyles } from 'tss-react/mui'
import { useForm } from 'react-hook-form'

type FormData = {
  email: string
}
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const InputEmail = ({
  onSuccessInput,
}: {
  onSuccessInput: (result: boolean) => void
}) => {
  const commonClasses = commonStyles().classes
  const { classes } = useStyles()
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: '',
    },
  })

  const inputEmail = watch('email')
  const onSubmit = () => {
    onSuccessInput(true)
  }
  return (
    <Box>
      <Typography variant="h1" className={commonClasses.title}>
        New Password
      </Typography>
      <Typography className={classes.description}>
        Enter your login email below. <br /> We will send you an email with a
        link to reset your password.
      </Typography>
      <form className={classes.formStyle} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: EMAIL_REGEX,
              message: 'Invalid email address',
            },
          })}
          sx={{ backgroundColor: '#FFF1EC', borderRadius: 2.5 }}
          className={classes.inputField}
        />
        {errors.email && (
          <Typography className={classes.errorMessage}>
            {errors.email.message}
          </Typography>
        )}
        <Button
          fullWidth
          variant="contained"
          disableElevation
          disableRipple
          disabled={!inputEmail}
          className={commonClasses.submitButton}
          type="submit"
        >
          send
        </Button>
      </form>
    </Box>
  )
}

export default InputEmail

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
