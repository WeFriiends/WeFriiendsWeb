import { Box, Typography } from '@mui/material'
import Logo from 'components/logo/Logo'
import { commonStyles } from 'styles/commonStyles'
import { makeStyles } from 'tss-react/mui'
import theme from 'styles/createTheme'

const CheckEmail = () => {
  const commonClasses = commonStyles().classes
  const { classes } = useStyles()

  return (
    <Box className={commonClasses.mainBox}>
      <Logo />
      <Typography variant="h1" className={classes.title}>
        Please, check your e-mail to proceed
      </Typography>
      <img
        src="/img/check_email.jpg"
        alt="check your email"
        className={classes.image}
      />
    </Box>
  )
}
export default CheckEmail

const useStyles = makeStyles()({
  title: {
    margin: '60px 26px 50px',
  },
  image: {
    width: 330,
    [theme.breakpoints.up('lg')]: {
      width: 460,
    },
  },
})
