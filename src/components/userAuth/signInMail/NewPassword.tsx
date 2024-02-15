import { Box, Button, TextField, Typography } from '@mui/material'
import Logo from 'components/logo/Logo'
import { commonStyles } from 'styles/commonStyles'
import { makeStyles } from 'tss-react/mui'

const NewPassword = () => {
  const commonClasses = commonStyles().classes
  const { classes } = useStyles()
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
      <form className={classes.formStyle}>
        <TextField
          sx={{ backgroundColor: '#FFF1EC', borderRadius: 2.5 }}
          type="email"
          id="email"
          className={classes.inputField}
        />
        <Button
          fullWidth
          variant="contained"
          disableElevation
          disableRipple
          disabled
          className={commonClasses.submitButton}
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
