import React from 'react'
import { Box, Button } from '@mui/material'
import FindFriends from './FindFriends'
import ToVisit from './steps/ToVisit'
import ToFind from './steps/ToFind'
import ToWalkWith from './steps/ToWalkWith'
import ToLearn from './steps/ToLearn'
import YouCan from './steps/YouCan'
import ButtonToGo from './ButtonNavBack'
import GenericCarousel from '../../common/Carousel'
import { commonStyles } from './CommonStyles'

import Pagination from '../../common/Pagination'
import { carouselData } from './onboardingCarouselData'
import useHandleCarousel from 'hooks/useHandleCarousel'

const OnboardingCarousel = () => {
  const { classes } = commonStyles()
  const {
    activeStep,
    handleBack,
    handleNext,
    handleSkip,
    handleClickPagination,
  } = useHandleCarousel()
  const carouselDataLength = carouselData.length

  return (
    <>
      <GenericCarousel
        items={carouselData}
        renderItem={(item) => (
          <div>
            <img src={item.imageUrl} alt="" />
            <p>{item.text}</p>
          </div>
        )}
        activeStep={activeStep}
      />

      <Pagination
        key={carouselData.map((c) => c.imageUrl)}
        activeStep={activeStep}
        dots={carouselData.length}
        onChangeIndex={handleClickPagination}
      />
      <Button
        //TODO: generic button with label
        onClick={() => handleSkip(carouselDataLength)}
        sx={{
          padding: '0 3rem',
          position: 'absolute',
          left: '5vw',
          bottom: 58,
          color: 'grey',
          textTransform: 'none',
        }}
      >
        Skip
      </Button>

      {activeStep < carouselDataLength - 1 && (
        <Button
          onClick={handleNext}
          sx={{
            padding: '0 3rem',
            position: 'absolute',
            right: '5vw',
            bottom: 58,
            color: 'grey',
            textTransform: 'none',
          }}
        >
          Next
        </Button>
      )}
    </>
  )
}

export default OnboardingCarousel
