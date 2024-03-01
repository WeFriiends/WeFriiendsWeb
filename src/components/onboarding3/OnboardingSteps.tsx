import React from 'react'
import { Box, Button } from '@mui/material'
import FindFriends from './steps/FindFriends'
import ToVisit from './steps/ToVisit'
import ToFind from './steps/ToFind'
import ToWalkWith from './steps/ToWalkWith'
import ToLearn from './steps/ToLearn'
import YouCan from './steps/YouCan'
import ButtonToGo from './ButtonNav'
import Carousel from '../../common/Carousel'
import { commonStyles } from './CommonStyles'

import Pagination from '../../common/Pagination'

interface OnboardingStepsProps {
  activeStep: number
  handlClickPagination: (step: number) => void
  handleNext: () => void
  handleSkip: (length: number) => void
}

const OnboardingSteps: React.FC<OnboardingStepsProps> = ({
  activeStep,
  handlClickPagination,
  handleNext,
  handleSkip,
}) => {
  const { classes } = commonStyles()

  const components = [
    {
      label: 'FindFriends',
      component: <FindFriends />,
    },
    {
      label: 'ToVisit',
      component: <ToVisit />,
    },
    {
      label: 'ToFind',
      component: <ToFind />,
    },
    {
      label: 'ToWalkWith',
      component: <ToWalkWith />,
    },
    {
      label: 'ToLearn',
      component: <ToLearn />,
    },
    {
      label: 'YouCan',
      component: <YouCan />,
    },
  ]
  const arrLength = components.length

  return (
    <>
      <Carousel components={components} activeStep={activeStep} />

      {activeStep > 0 && (
        <Pagination
          key={components.map((c, i) => c.label)}
          //TODO: component.label can be passed as key
          activeStep={activeStep}
          dots={components.length}
          onChangeIndex={handlClickPagination}
        />
      )}

      {activeStep > 0 && activeStep < arrLength - 1 && (
        <Button
          onClick={() => handleSkip(arrLength)}
          sx={{
            padding: '0 3rem',
            position: 'absolute',
            left: '10%',
            bottom: 0,
          }}
        >
          skip
        </Button>
      )}

      {activeStep < arrLength - 1 && (
        <Button
          onClick={handleNext}
          sx={{
            padding: '0 3rem',
            position: 'absolute',
            right: '10%',
            bottom: 0,
          }}
        >
          next
        </Button>
      )}
    </>
  )
}

export default OnboardingSteps
