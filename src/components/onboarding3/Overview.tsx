import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography, Button, Grid } from '@mui/material'
import ButtonToGo from './ButtonNavBack'
import { commonStyles } from './CommonStyles'
import OnboardingCarousel from './OnboardingCarousel'
import OnboardingHeader from './OnboardingHeader'
import FindFriends from './FindFriends'

const Presentation: React.FC = () => {
  const { classes } = commonStyles()

  return (
    <Box
      className="presentationPage"
      sx={{
        margin: 'auto',
        width: '100%',
        // height: '70%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#FFF1EC',
      }}
    >
      <Box
        className="presentationContainer"
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          alignContent: 'space-evenly',
          justifyContent: 'space-between',
          flexGrow: 1,
        }}
      >
        <OnboardingHeader heading1={'This is'} heading2={'Here you can'} />
        <FindFriends />
        {/* <ButtonToGo display handleClick={handleBack} /> */}
        {/* <Box sx={{ marginBlock: '50px' }}>
          <OnboardingCarousel
            activeStep={activeStep}
            handlClickPagination={handleClickPagination}
            handleNext={handleNext}
            handleSkip={handleSkip}
          />
        </Box> */}

        {/* TODO: generic Link button */}
        <Button
          component={Link}
          to="/onboarding/start-page"
          sx={{
            padding: '0 3rem',
            position: 'absolute',
            left: '10%',
            bottom: 58,
          }}
        >
          <img src="/img/arrow_back.svg" alt="arrow_back" />
        </Button>
        <Button
          component={Link}
          to="/onboarding/carousel"
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
      </Box>
    </Box>
  )
}
export default Presentation
