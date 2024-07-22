import React from 'react'
import { Box, Button } from '@mui/material'
import GenericCarousel from '../../common/components/Carousel'
import { commonStyles } from 'styles/commonStyles'
import Pagination from 'common/components/Pagination'
import useHandleCarousel from 'hooks/useHandleCarousel'
import NameInput from './NameInput'
import DateOfBirthPicker from './DateOfBirthPicker'

const carouselData = [
  {
    component: <NameInput />,
    label: 'NameInput',
  },
  {
    component: <DateOfBirthPicker />,
    label: 'DateOfBirthPicker',
  },
]
const ProfileCarousel = () => {
  const { classes } = commonStyles()
  const { activeStep, handleBack, handleNext, handleClickPagination } =
    useHandleCarousel()
  const carouselDataLength = carouselData.length

  return (
    <>
      <GenericCarousel
        items={carouselData}
        renderItem={(item) => item.component}
        activeStep={activeStep}
      />

      <Pagination
        key={carouselData.map((c) => c.label)}
        activeStep={activeStep}
        dots={carouselData.length}
        onChangeIndex={handleClickPagination}
      />

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

export default ProfileCarousel
