import { Button, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { commonStyles } from 'styles/commonStyles'

const Result = () => {
  const { classes } = useStyles()
  const commonClasses = commonStyles().classes
  return (
    <>
      <Typography variant="h1" className={commonClasses.title}>
        Request new password
      </Typography>
      <Typography className={classes.description}>
        We&#39;ll send you a link to reset your password if this email is
        registered with us.
      </Typography>
      <Typography className={classes.description}>
        If you did not receive the email, please also check your spam folder.
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
  )
}

export default Result

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
})