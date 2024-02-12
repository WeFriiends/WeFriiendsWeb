import React, { useState } from 'react'
import LogoFirstProfile from '../components/firstProfile/LogoFirstProfile'
import { Box } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import BackArrow from '../components/firstProfile/BackArrow'
import FirstProfileHeaders from '../components/firstProfile/FirstProfileHeaders'
import QuestionText from '../components/firstProfile/QuestionText'
import Steps from '../components/firstProfile/Steps'
import NextButton from '../components/firstProfile/NextButton'
import Pagination from '../common/Pagination'

const FirstProfile = () => {
  const [activeStep, setActiveStep] = useState<number>(0)
  const [isNextDisabled, setNextDisabled] = useState<boolean>(true)
  const { classes } = useStyles()

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1)
  }

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1)
    setNextDisabled(true)
  }

  return (
    <Box className={classes.position}>
      <LogoFirstProfile />
      <BackArrow handleBack={handleBack} activeStep={activeStep} />
      <FirstProfileHeaders activeStep={activeStep} />
      <QuestionText activeStep={activeStep} />
      <Steps setNextDisabled={setNextDisabled} activeStep={activeStep} />
      <NextButton handleNext={handleNext} isNextDisabled={isNextDisabled} />
      <Pagination activeStep={activeStep} steps={4} dotShape="circle" />
    </Box>
  )
}

export default FirstProfile

const useStyles = makeStyles()(() => {
  return {
    position: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  }
})
