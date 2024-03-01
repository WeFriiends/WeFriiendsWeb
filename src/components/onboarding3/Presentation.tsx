import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography, Button, Grid } from '@mui/material'
import ButtonToGo from './ButtonNav'
import { commonStyles } from './CommonStyles'
import OnboardingSteps from './OnboardingSteps'
import OnboardingHeader from './OnboardingHeader'
// import withProfileComponentHOC from '../OnboardingHOC'

const Presentation: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0)

  //   const handleMove = (dir: string) => {
  //     if (dir === 'back') {
  //       setActiveStep((prevStep) => prevStep - 1)
  //     } else if (dir === 'next') {
  //       setActiveStep((prevStep) => prevStep + 1)
  //     } else if (dir === 'skip') {
  //       setActiveStep(elements.length - 1)
  //       console.log('last step')
  //     }
  //   }
  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1)
  }

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1)
  }
  const handleSkip = (length: number) => {
    setActiveStep(length - 1)
  }
  const handleClickPagination = (step: number) => {
    setActiveStep(step)
  }

  const { classes } = commonStyles()

  const heading1 = activeStep === 0 ? 'This is' : ''
  const heading2 = activeStep === 0 ? 'Here you can' : ''
  return (
    <Box
      className="presentationPage"
      sx={{
        margin: 'auto',
        width: '940px',
        height: '70%',
        minHeight: '960px',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#FFF1EC',
      }}
    >
      <Box
        className="presentationContrainer"
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          alignContent: 'space-evenly',
          justifyContent: 'space-between',
          flexGrow: 1,
        }}
      >
        <OnboardingHeader show={true} heading1={heading1} heading2={heading2} />

        <ButtonToGo iconButton show={activeStep > 0} handleGo={handleBack} />

        <Box sx={{ marginBlock: '25px' }}>
          <OnboardingSteps
            activeStep={activeStep}
            handlClickPagination={handleClickPagination}
            handleNext={handleNext}
            handleSkip={handleSkip}
          />
        </Box>
        {activeStep === 0 && (
          <Button
            component={Link}
            to="../onboarding2"
            sx={{
              padding: '0 3rem',
              position: 'absolute',
              left: '10%',
              bottom: 0,
            }}
          >
            previous
          </Button>
        )}
      </Box>
    </Box>
  )
}
export default Presentation
