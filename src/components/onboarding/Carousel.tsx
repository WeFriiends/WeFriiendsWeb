import React from 'react'
import { Box, Button } from '@mui/material'
import Pagination from './Pagination'

interface CarouselProps {
  onSkip?: () => void
  onNext?: () => void
  onPrevious?: () => void
  withPagination: boolean
  children?: JSX.Element
  showNext?: boolean
  showPrevious?: boolean
  showSkip?: boolean
  activeStep?: number
  elements: any[]
  handleChangeIndex: (index: number) => void
}

const Carousel: React.FC<CarouselProps> = ({
  onSkip,
  onNext,
  onPrevious,
  withPagination,
  children,
  showNext = true,
  showPrevious = true,
  showSkip = true,
  activeStep,
  elements,
  handleChangeIndex,
}) => {
  const renderButton = (
    label: string,
    onClick?: () => void,
    show = true,
    disabled = false
  ) => {
    if (!onClick || !show) return null

    return (
      <Button onClick={onClick} disabled={disabled}>
        {label}
      </Button>
    )
  }

  return (
    <Box id="carousel" margin="auto" alignSelf="end">
      <Box display="flex">
        {renderButton('Previous', onPrevious, showPrevious)}
        {renderButton('Skip', onSkip, showSkip)}
        <Pagination
          index={activeStep}
          dots={elements.length}
          onChangeIndex={handleChangeIndex}
          onNext={onNext}
          onPrevious={onPrevious}
          toShow={withPagination}
        />
        {children}
        {renderButton('Next', onNext, showNext)}
      </Box>
    </Box>
  )
}

export default Carousel
