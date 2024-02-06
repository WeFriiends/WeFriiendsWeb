import Logo from 'components/logo/Logo'
import { Box, Button, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { commonStyles } from 'styles/commonStyles'

const EmailAlreadyUsed = () => {
  const { classes } = useStyles()
  const commonClasses = commonStyles().classes
  return (
    <Box className={classes.position}>
      <Logo />
      <Typography className={classes.title}>
        Emai is already registered. <br /> Please
      </Typography>
      <Button variant="contained">sing in</Button>
    </Box>
  )
}
export default EmailAlreadyUsed

const useStyles = makeStyles()(() => {
  return {
    position: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    title: {
      fontWeight: 600,
      fontSize: 22,
      lineHeight: '40px',
      color: '#F46B5D',
      textAlign: 'center',
      paddingTop: 144,
    },
  }
})
