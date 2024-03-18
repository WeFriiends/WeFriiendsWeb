import { Box, Button, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { commonStyles } from 'styles/commonStyles'
import { useNavigate } from 'react-router-dom'

const SuccesResetPassword = () => {
  const { classes } = useStyles()
  const commonClasses = commonStyles().classes
  const navigate = useNavigate()

  const navigateToSignIn = () => {
    navigate('/authentication/email-sign-in')
  }

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Typography className={classes.headerText}>
        Password has been successfully changed. Please
      </Typography>
      <Button
        variant="contained"
        className={`${commonClasses.submitButton} ${classes.signInBtn}`}
        onClick={navigateToSignIn}
      >
        sing in
      </Button>
    </Box>
  )
}
export default SuccesResetPassword

const useStyles = makeStyles()({
  headerText: {
    fontWeight: 600,
    fontSize: 22,
    lineHeight: '40px',
    color: '#F46B5D',
    textAlign: 'center',
    paddingTop: 144,
  },
  signInBtn: {
    width: '70%',
    marginTop: 30,
  },
})
