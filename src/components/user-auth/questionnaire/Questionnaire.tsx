import React, { useState } from 'react'
import ProgressBar from './ProgressBar'
import Status from './Status'
import Logo from '../../logo/Logo'
import { Box, Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { commonStyles } from 'styles/commonStyles'
import Geolocation from './Geolocation'
import { makeStyles } from 'tss-react/mui'

const Questionnaire: React.FC = () => {
  const { classes } = commonStyles()
  const { classes: styles } = useStyles()

  const totalSteps = 3
  const [step, setStep] = useState<number>(1)

  // TODO: replace any with interface when all pages are ready
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
    <Box sx={{ display: 'grid', placeItems: 'center' }}>
      <Box className={styles.gridContainer}>
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
    </Box>
  )
}

export default Questionnaire

const useStyles = makeStyles()(() => {
  return {
    gridContainer: {
      display: 'grid',
      gap: '2rem',
      placeItems: 'center',
      width: 'clamp(300px, 90%, 400px)',
    },
  }
})
