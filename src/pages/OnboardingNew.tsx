import React, { useState } from 'react'

import { Box } from '@mui/material'
import OnboardingHeader from 'components/onboardingNew/OnboardingHeader'
import { commonStyles } from '../components/onboardingNew/CommonStyles'
import { renderSteps } from 'components/onboardingNew/PresentationSteps'
import Carousel from '../common/Carousel'
import { onboardingTexts } from '../components/onboardingNew/onboardingTexts'
import ButtonToGo from 'components/onboardingNew/ButtonNav'
import Pagination from 'components/onboardingNew/Pagination'

export default function Onboarding() {
  const [activeStep, setActiveStep] = useState<number>(0)
  const elements = onboardingTexts()

  const handleBack = () => {
    setActiveStep(activeStep > 0 ? activeStep - 1 : activeStep)
  }

  const handleNext = () => {
    setActiveStep(activeStep < elements.length ? activeStep + 1 : activeStep)
  }
  const handleSkip = () => {
    setActiveStep(elements.length - 1)
  }

  const handleClickPagination = (index: number) => {
    setActiveStep(index)
  }

  const { classes } = commonStyles()

  return (
    <Box
      sx={{
        textAlign: 'center',

        height: '100%',
        // width: '100%',
        // margin: '30px auto',
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'space-between',
        // backgroundColor:
        //   activeStep === 0 ? `backgroundColor: '#FFF1EC'` : `pink`,
      }}
    >
      <Box
        sx={{
          // textAlign: 'center',
          // p: '2',
          // height: '100%',
          width: '50%',
          margin: ' auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: activeStep === 0 ? `backgroundColor: ''` : `#FFF1EC`,
        }}
      >
        <OnboardingHeader
          heading1={elements[activeStep]?.heading1}
          heading2={elements[activeStep]?.heading2}
          show={activeStep === 1}
        />

        <ButtonToGo iconButton show={activeStep > 1} handleGo={handleBack} />

        <Carousel
          activeStep={activeStep}
          components={renderSteps(handleNext, elements)}
        />
        <Box display="flex" justifyContent="space-between">
          <ButtonToGo
            show={activeStep > 0 && activeStep < elements.length - 1}
            label={activeStep > 1 ? 'skip' : 'previous'}
            handleGo={activeStep > 1 ? handleSkip : handleBack}
            className={`${classes.leftButton} `}
          />
          {activeStep >= 2 && (
            <Pagination
              dots={elements.length}
              index={activeStep}
              onChangeIndex={handleClickPagination}
            />
          )}

          <ButtonToGo
            show={activeStep < elements.length - 1}
            label={activeStep > 0 ? 'next' : 'start'}
            handleGo={handleNext}
            className={
              activeStep === 0
                ? `${classes.linkBtnSecondary} `
                : `${classes.rightButton} `
            }
          />
        </Box>
      </Box>
    </Box>
  )
}
