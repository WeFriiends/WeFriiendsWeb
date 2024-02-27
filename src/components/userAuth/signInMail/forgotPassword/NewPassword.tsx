import { Box } from '@mui/material'
import Logo from 'components/logo/Logo'
import { commonStyles } from 'styles/commonStyles'
import { useState } from 'react'
import InputEmail from './InputEmail'
import Result from './Result'

const NewPassword = () => {
  const commonClasses = commonStyles().classes

  const [success, setSuccess] = useState(false)

  const handleSuccessInput = (result: boolean): void => {
    setSuccess(result)
  }

  return (
    <Box className={commonClasses.mainBox}>
      <Logo />
      {!success ? (
        <InputEmail onSuccessInput={handleSuccessInput} />
      ) : (
        <Result />
      )}
    </Box>
  )
}

export default NewPassword
