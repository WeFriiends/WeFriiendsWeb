import React from 'react'

interface CarouselProps {
  components: { label: string; component: React.ReactElement }[]
  activeStep: number
}

const Carousel: React.FC<CarouselProps> = ({ components, activeStep }) => {
  if (activeStep < 0 || activeStep >= components.length) {
    return null
  }

  return (
    <>
      {components.map((step, index) => (
        <React.Fragment key={index}>
          {activeStep === index && step.component}
        </React.Fragment>
      ))}
    </>
  )
}

export default Carousel
