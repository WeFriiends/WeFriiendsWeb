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

  const indicators = Array.from({ length: totalSteps }, (_, index) => (
    <Box
      key={index}
      className={classes.progressCircle}
      style={{
        backgroundColor:
          index + 1 === currentStep
            ? classes.primaryBgColor
            : classes.secondaryBgColor,
      }}
    />
  ))

  return (
    <Box
      style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
    >
      {indicators}
    </Box>
  )
}

export default ProgressBar
