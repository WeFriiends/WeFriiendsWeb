import React, { useState } from 'react'
import { Box } from '@mui/material'
import StartPage from 'components/onboarding3/StartPage'
import { commonStyles } from 'components/onboarding3/CommonStyles'

const Onboarding = () => {
  const { classes } = commonStyles()

  return (
    <Box
      className="OnboardingContainer"
      display="flex"
      margin="auto"
      max-width={600}
      width="auto"
      sx={{
        textAlign: 'center',
        padding: '35px',
        alignItems: 'center',
      }}
    >
      <StartPage />
    </Box>
  )
}

export default Onboarding
