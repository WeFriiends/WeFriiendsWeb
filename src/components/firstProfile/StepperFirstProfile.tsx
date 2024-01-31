import React from 'react'
import { StepLabel, Stepper } from '@mui/material'
import Box from '@mui/material/Box'
import { makeStyles } from 'tss-react/mui'

interface StepperFirstProfileProps {
  activeStep: number
}
const StepperFirstProfile: React.FC<StepperFirstProfileProps> = ({
  activeStep,
}) => {
  const { classes } = useStyles()
  return (
    <Stepper activeStep={activeStep} className={classes.stepperPosition}>
      {[1, 2, 3, 4].map((step, index) => (
        <StepLabel key={index}>
          <Box
            sx={{
              backgroundColor: activeStep === index ? '#176C70' : '#F46B5D',
            }}
            className={classes.firstProfileStepperStyle}
          />
        </StepLabel>
      ))}
    </Stepper>
  )
}

export default StepperFirstProfile

const useStyles = makeStyles()(() => {
  return {
    firstProfileStepperStyle: {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      marginLeft: '.5rem',
    },
    stepperPosition: {
      marginTop: '3.31rem',
    },
  }
})
