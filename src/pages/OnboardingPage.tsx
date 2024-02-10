import * as React from 'react'
// import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material'

import PageComponent from 'components/onboarding/PageComponent'
import { onboardingTexts } from '../components/onboarding/onboardingTexts'
import OnboardingPresentation from 'components/onboarding/OnboardingPresentation'
import Carousel from 'components/onboarding/Carousel'

export default function Onboarding() {
  const [activeStep, setActiveStep] = React.useState(-1)
  const elements = onboardingTexts()
  const text = 'Hello, dear! Let us help you to find new friends here!'

  const handleNext = () => {
    const nextStep = activeStep + 1
    setActiveStep(nextStep < elements.length ? nextStep : activeStep)
  }

  const handleSkip = () => {
    const lastStep = elements.length - 1
    setActiveStep(lastStep)
  }

  const handlePrevious = () => {
    console.log(activeStep)
    const prevStep = activeStep - 1
    setActiveStep(prevStep >= -1 ? prevStep : activeStep)
  }

  const handleChangeIndex = (index: number) => {
    setActiveStep(index)
  }

  return activeStep < 0 ? (
    <Box sx={{ textAlign: 'center', height: '100%', width: '100%', p: 2 }}>
      <PageComponent content={text} isFirst goForward={handleNext} />
    </Box>
  ) : (
    <Box sx={{ textAlign: 'center', height: '100%', width: '100%', p: 2 }}>
      <OnboardingPresentation
        contents={elements[activeStep]}
        index={activeStep}
        onChangeIndex={setActiveStep}
      >
        <>
          <Carousel
            onSkip={handleSkip}
            onNext={handleNext}
            onPrevious={handlePrevious}
            withPagination={activeStep > 0}
            showSkip={activeStep > 0}
            showNext={true}
            showPrevious={activeStep === 0}
            elements={elements}
            activeStep={activeStep}
            handleChangeIndex={handleChangeIndex}
          />
        </>
      </OnboardingPresentation>
    </Box>
  )
}
