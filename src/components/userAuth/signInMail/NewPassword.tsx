import { Box, Button, TextField, Typography } from '@mui/material'
import Logo from 'components/logo/Logo'
import { commonStyles } from 'styles/commonStyles'
import { makeStyles } from 'tss-react/mui'
import { useForm } from 'react-hook-form'

const NewPassword = () => {
  const commonClasses = commonStyles().classes
  const { classes } = useStyles()
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: '',
    },
  })

  const onSubmit = (data: { email: string }) => {
    alert(JSON.stringify(data))
  }
  return (
    <Box className={commonClasses.mainBox}>
      <Logo />
      <Typography variant="h1" className={commonClasses.title}>
        New Password
      </Typography>
      <Typography className={classes.description}>
        Enter your login email below. We will send you an email with a link to
        reset your password.
      </Typography>
      <form className={classes.formStyle} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register('email')}
          sx={{ backgroundColor: '#FFF1EC', borderRadius: 2.5 }}
          className={classes.inputField}
        />
        <Button
          fullWidth
          variant="contained"
          disableElevation
          disableRipple
          className={commonClasses.submitButton}
          type="submit"
        >
          send
        </Button>
      </form>
    </Box>
  )
}

export default NewPassword

const useStyles = makeStyles()({
  description: {
    marginTop: 30,
    marginBottom: 15,
    color: '#444444',
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
})
