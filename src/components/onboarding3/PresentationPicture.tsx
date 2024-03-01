import React from 'react'

interface PresentationPictureProps {
  activeStep: number
}

const PresentationPicture: React.FC<PresentationPictureProps> = ({
  activeStep,
}) => {
  const path = () => {
    if (activeStep === 1) {
      return 'yoga'
    } else if (activeStep === 2) {
      return 'find-friends'
    } else if (activeStep === 4) {
      return 'person'
    } else if (activeStep === 5) {
      return 'learn-together'
    } else if (activeStep === 6) {
      return 'you-can'
    }
  }
  return <img src={`/img/${path()}.svg`} alt={path()} />
}

export default PresentationPicture
