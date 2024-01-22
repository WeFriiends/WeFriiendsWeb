import React, { useState } from 'react'
import ProgressBar from './ProgressBar'
import Status from './Status'
import Logo from '../../logo/Logo'
import { Box, Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { commonStyles } from 'styles/commonStyles'
import Geolocation from './Geolocation'

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
      case 2:
        return <Geolocation />
      default:
        return null
    }
  }

  return (
    <Box className={classes.gridContainer}>
      <Logo />

      {step > 1 && (
        <Box className={classes.buttonPrevContainer}>
          <Button className={classes.buttonPrev} onClick={handlePrevStep}>
            <ArrowBackIcon className={classes.backArrow} />
          </Button>
        </Box>
      )}

      {renderStep()}

      {step < totalSteps && (
        <Button className={classes.buttonNext} onClick={handleNextStep}>
          Next
        </Button>
      )}

      <ProgressBar totalSteps={totalSteps} currentStep={step} />
    </Box>
  )
}

export default RegistrationForm
