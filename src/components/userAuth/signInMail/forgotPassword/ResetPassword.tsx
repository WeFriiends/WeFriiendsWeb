import { Box } from '@mui/material'
import Logo from 'components/logo/Logo'
import { useState } from 'react'
import { commonStyles } from 'styles/commonStyles'
import SuccesResetPassword from './SuccessResetPassword'
import PasswordForm from './PasswordForm'

const ResetPassword = () => {
  const commonClasses = commonStyles().classes
  const [success, setSuccess] = useState(false)

  const handleSuccessInput = (result: boolean): void => {
    setSuccess(result)
  }

  return (
    <Box className={commonClasses.mainBox}>
      <Logo />
      {!success ? (
        <PasswordForm onSuccessInput={handleSuccessInput} />
      ) : (
        <SuccesResetPassword />
      )}
    </Box>
  )
}
export default ResetPassword
