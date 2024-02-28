import { Box, Button, FormLabel, TextField, Typography } from '@mui/material'
import Logo from 'components/logo/Logo'
import { commonStyles } from 'styles/commonStyles'
import { makeStyles } from 'tss-react/mui'

const ResetPassword = () => {
  const commonClasses = commonStyles().classes
  const { classes } = useStyles()
  return (
    <Box className={commonClasses.mainBox}>
      <Logo />
      <Typography variant="h1" className={commonClasses.title}>
        Reset your password
      </Typography>
      <form className={classes.formStyle}>
        <FormLabel className={classes.labelStyle} sx={{ marginTop: 2.5 }}>
          New Password
        </FormLabel>
        <TextField className={commonClasses.inputField} />
        <FormLabel className={classes.labelStyle} sx={{ marginTop: 4 }}>
          One more time
        </FormLabel>
        <TextField className={commonClasses.inputField} />
        <Button
          fullWidth
          variant="contained"
          disableElevation
          disableRipple
          disabled
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
