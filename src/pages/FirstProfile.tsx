import React, { useState } from 'react'
import { Box } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import BackArrow from '../components/firstProfile/BackArrow'
import FirstProfileHeaders from '../components/firstProfile/FirstProfileHeaders'
import QuestionText from '../components/firstProfile/QuestionText'
import Steps from '../components/firstProfile/Steps'
import NextButton from '../components/firstProfile/NextButton'
import Pagination from '../common/Pagination'
import Logo from 'common/Logo'

const FirstProfile = () => {
  const [activeStep, setActiveStep] = useState<number>(0)
  //TODO: define another logic for disabling next button
  const [isNextDisabled, setNextDisabled] = useState<boolean>(false)
  const { classes } = useStyles()

  //TODO: move logic with setting active step, prev/next, click pagination - to hook
  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1)
  }

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1)
    setNextDisabled(true)
  }

  const handleClickPagination = (index: number) => {
    setActiveStep(index)
  }
  return (
    <Box className={classes.position}>
      <Logo />
      <BackArrow handleBack={handleBack} activeStep={activeStep} />
      {/* <FirstProfileHeaders activeStep={activeStep} />
      <QuestionText activeStep={activeStep} /> */}
      <Steps
        setNextDisabled={setNextDisabled}
        activeStep={activeStep}
        handleClickPagination={handleClickPagination}
      />
      <NextButton handleNext={handleNext} isNextDisabled={isNextDisabled} />
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
