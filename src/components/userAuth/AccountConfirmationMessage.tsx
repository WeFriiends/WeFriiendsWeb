import { Box, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import theme from '../../styles/createTheme'
import Logo from 'components/logo/Logo'

const AccountConfirmationMessage = () => {
  const { classes } = useStyles()

  return (
    <Box className={classes.mainBox}>
      <Logo />
      <Box className={classes.textBox}>
        <Typography className={classes.title}>Just one more step!</Typography>
        <Box mb={5} mt={3}>
          <Typography variant="body1">
            We’ve sent an e-mail to confirm your account
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1">Please, check your inbox.</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default AccountConfirmationMessage

const useStyles = makeStyles()({
  mainBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 200,
  },
  textBox: {
    paddingTop: 80,
    textAlign: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 600,
    lineHeight: '40px',
    paddingTop: 80,
    color: theme.palette.primary.main,
    textAlign: 'center',
  },
})
