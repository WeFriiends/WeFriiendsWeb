import { Box } from '@mui/material'
import Logo from 'components/logo/Logo'
import { commonStyles } from 'styles/commonStyles'

const NewPassword = () => {
  const commonClasses = commonStyles().classes
  return (
    <Box className={commonClasses.mainBox}>
      <Logo />
      <h3 className={commonClasses.title}>New Password</h3>
    </Box>
  )
}

export default NewPassword
