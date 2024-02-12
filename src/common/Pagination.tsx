import React from 'react'
import { StepLabel, Stepper } from '@mui/material'
import Box from '@mui/material/Box'
import { makeStyles } from 'tss-react/mui'

interface StepperProps {
  activeStep: number
  steps: number
  dotShape?: 'circle' | 'rectangle'
  activeColor?: string
  inactiveColor?: string
}

const Pagination: React.FC<StepperProps> = ({
  activeStep,
  steps,
  dotShape = 'circle',
  activeColor = '#176C70',
  inactiveColor = '#F46B5D',
}) => {
  const { classes } = useStyles()

  const getDotStyle = (index: number) => {
    if (dotShape === 'circle') {
      return {
        width: '8px',
        height: '8px',
        borderRadius: '50%',
      }
    } else if (dotShape === 'rectangle') {
      return {
        width: '12px',
        height: '4px',
        borderRadius: '2px',
      }
    }
    return {}
  }

  return (
    <Stepper activeStep={activeStep} className={classes.stepperPosition}>
      {[...Array(steps).keys()].map((step) => (
        <StepLabel key={step}>
          <Box
            sx={{
              backgroundColor:
                activeStep === step ? activeColor : inactiveColor,
              ...getDotStyle(step),
              marginLeft: '.5rem',
            }}
            className={classes.stepperDotStyle}
          />
        </StepLabel>
      ))}
    </Stepper>
  )
}

export default Pagination

const useStyles = makeStyles()(() => {
  return {
    stepperDotStyle: {
      display: 'inline-block',
    },
    stepperPosition: {
      marginTop: '3.31rem',
    },
  }
})
