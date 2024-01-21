import React from 'react'
import { Box } from '@mui/material'
import { commonStyles } from 'styles/commonStyles'

interface ProgressBarProps {
  totalSteps: number
  currentStep: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  totalSteps,
  currentStep,
}) => {
  const { classes } = commonStyles()

  const indicators = Array.from({ length: totalSteps }, (_, index) => {
    const backgroundColor =
      index + 1 === currentStep
        ? classes.secondaryBgColor
        : classes.primaryBgColor

    return (
      <Box
        key={index}
        className={`${classes.progressCircle} ${backgroundColor}`}
      />
    )
  })

  return (
    <Box className={`${classes.flexContainer} ${classes.progressBarContainer}`}>
      {indicators}
    </Box>
  )
}

export default ProgressBar
