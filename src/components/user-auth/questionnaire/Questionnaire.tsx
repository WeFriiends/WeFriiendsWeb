import React, { useState } from 'react'
import ProgressBar from './ProgressBar'
import Status from './Status'
import Logo from '../../logo/Logo'
import { Box } from '@mui/material'
import { commonStyles } from 'styles/commonStyles'

const RegistrationForm: React.FC = () => {
  const { classes } = commonStyles()

  const totalSteps = 3
  const [step, setStep] = useState<number>(1)
  const [formData, setFormData] = useState<any>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1)
  }

  const handlePrevStep = () => {
    setStep((prevStep) => prevStep - 1)
  }

  const handleFormDataChange = (data: any) => {
    setFormData((prevData: any) => ({ ...prevData, ...data }))
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Status formData={formData} onChange={handleFormDataChange} />
      //   case 2:
      //     return <Step2 formData={formData} onChange={handleFormDataChange} />
      //   case 3:
      //     return <Step3 formData={formData} />
      default:
        return null
    }
  }

  return (
    <Box className={classes.mainBox}>
      <Logo />
      {renderStep()}
      <Box className={classes.buttonGroup}>
        {step > 1 && <button onClick={handlePrevStep}>Previous</button>}
        {step < totalSteps && <button onClick={handleNextStep}>Next</button>}
      </Box>
      <ProgressBar totalSteps={totalSteps} currentStep={step} />
    </Box>
  )
}

export default RegistrationForm
