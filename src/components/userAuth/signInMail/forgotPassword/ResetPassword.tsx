import { Box, Typography } from '@mui/material'
import Logo from 'components/logo/Logo'
import { commonStyles } from 'styles/commonStyles'

const ResetPassword = () => {
  const commonClasses = commonStyles().classes
  return (
    <Box className={commonClasses.mainBox}>
      <Logo />
      <Typography variant="h1" className={commonClasses.title}>
        Reset your password
      </Typography>
    </Box>
  )
}
export default ResetPassword
