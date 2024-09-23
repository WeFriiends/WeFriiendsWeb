import { useState } from 'react'

const useHandleCarousel = () => {
  const [activeStep, setActiveStep] = useState<number>(0)

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

  return {
    activeStep,
    handleBack,
    handleNext,
    handleSkip,
    handleClickPagination,
  }
}

export default useHandleCarousel
