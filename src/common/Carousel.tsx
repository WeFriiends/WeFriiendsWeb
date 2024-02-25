import React from 'react'

interface CarouselProps {
  components: { label: string; component: React.ReactElement }[]
  activeStep: number
}

const Carousel: React.FC<CarouselProps> = ({ components, activeStep }) => {
  //TODO: test cases in IF condition
  if (activeStep < 0 || activeStep >= components.length) {
    return null
  }

  return <>{components[activeStep].component}</>
}

export default Carousel