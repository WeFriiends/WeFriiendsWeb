import * as React from 'react'
//import { useTheme } from '@mui/material/styles'
import { useNavigate } from 'react-router'
import MobileStepper from '@mui/material/MobileStepper'
import Button from '@mui/material/Button'
import ToFind from './ToFind'
import ToVisit from './ToVisit'
import ToWalkWith from './ToWalkWith'
import ToLearn from './ToLearn'
import YouCan from './YouCan'
import { Box } from '@mui/material'
import Pagination from './Pagination'

const DotsMobileStepper = () => {
  //const theme = useTheme()
  const components = [
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
  const navigate = useNavigate()
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = components.length

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1)
  // }
  const handleNext = () => {
    const nextStep = activeStep + 1
    //setActiveStep(nextStep)

    // if (nextStep < components.length) {
    //   //setActiveStep(nextStep)
    //   navigate(`/${components[nextStep].label}`)
    // }
    setActiveStep(nextStep)
  }

  const handleGoBack = () => {
    navigate('/YouCan')
  }
  const handleChangeIndex = (index: number) => {
    setActiveStep(index)
  }

  return (
    <>
      <Box sx={{ height: 255, maxWidth: 400, width: '100%', p: 2 }}>
        {components[activeStep].component}
      </Box>
      {/* <MobileStepper
        // variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        //style={style}
        sx={{
          maxWidth: 400,
          backgroundColor: '#FFF1EC',
          '& .MuiMobileStepper-dots': {
            display: 'flex',
            justifyContent: 'center',
            '& .MuiMobileStepper-dot': {
              width: '32px',
              height: '4px',
              margin: '0 5px',
              backgroundColor: '#F46B5D', // Цвет неактивного пунктира
              borderRadius: '2px',

              transition: 'background-color 0.3s ease',
            },
            '& .MuiMobileStepper-dotActive': {
              backgroundColor: '#1D878C',
            },
          },
        }}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === components.length - 1}
            style={{
              textTransform: 'none',
              color: '#444444',
              lineHeight: '22px',
              fontSize: '15px',
            }}
          >
            Next
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleGoBack}
            disabled={activeStep === components.length - 1}
            style={{
              textTransform: 'none',
              color: ' #AFB1B6',
              lineHeight: '22px',
              fontSize: '15px',
            }}
          >
            Skip
          </Button>
        }
      /> */}
      <Pagination
        index={activeStep}
        dots={components.length}
        onChangeIndex={handleChangeIndex}
      />
    </>
  )
}
export default DotsMobileStepper
