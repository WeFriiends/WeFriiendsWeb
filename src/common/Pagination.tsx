// import React from 'react'
// import { StepLabel, Stepper } from '@mui/material'
// import Box from '@mui/material/Box'
// import { makeStyles } from 'tss-react/mui'

// interface StepperProps {
//   activeStep: number
//   steps: number
//   dotShape?: 'circle' | 'rectangle'
//   activeColor?: string
//   inactiveColor?: string
// }

// const Pagination: React.FC<StepperProps> = ({
//   activeStep,
//   steps,
//   dotShape = 'circle',
//   activeColor = '#176C70',
//   inactiveColor = '#F46B5D',
// }) => {
//   const { classes } = useStyles()

//   const getDotStyle = (index: number) => {
//     if (dotShape === 'circle') {
//       return {
//         width: '8px',
//         height: '8px',
//         borderRadius: '50%',
//       }
//     } else if (dotShape === 'rectangle') {
//       return {
//         width: '12px',
//         height: '4px',
//         borderRadius: '2px',
//       }
//     }
//     return {}
//   }

//   return (
//     <Stepper activeStep={activeStep} className={classes.stepperPosition}>
//       {[...Array(steps).keys()].map((step) => (
//         <StepLabel key={step}>
//           <Box
//             sx={{
//               backgroundColor:
//                 activeStep === step ? activeColor : inactiveColor,
//               ...getDotStyle(step),
//               marginLeft: '.5rem',
//             }}
//             className={classes.stepperDotStyle}
//           />
//         </StepLabel>
//       ))}
//     </Stepper>
//   )
// }

// export default Pagination

// const useStyles = makeStyles()(() => {
//   return {
//     stepperDotStyle: {
//       display: 'inline-block',
//     },
//     stepperPosition: {
//       marginTop: '3.31rem',
//     },
//   }
// })

import { Box } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import classnames from 'classnames'
import { grey, red } from '@mui/material/colors'

const styles = {
  root: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    display: 'flex',
    flexDirection: 'row',
  },
}

const PaginationDot = ({ active, index, onClick }: any) => {
  const { classes } = useStyles()
  const handleClick = (event: any) => {
    onClick(event, index)
  }

  return (
    <Box
      onClick={handleClick}
      className={classnames({
        [classes.progressCircle]: true,
        [classes.active]: active,
        [classes.inActive]: !active,
      })}
    />
  )
}

const Pagination = ({ dots, activeStep, onChangeIndex }: any) => {
  const { classes } = useStyles()

  const handleClick = (event: any, index: number) => {
    onChangeIndex(index)
  }

  const children = []

  for (let i = 0; i < dots; i += 1) {
    children.push(
      <PaginationDot
        //should have as key smth else
        key={i}
        index={i}
        active={i === activeStep}
        onClick={handleClick}
      />
    )
  }

  return (
    <Box className={`${classes.flexContainer} ${classes.progressBarContainer}`}>
      {children}
    </Box>
  )
}

export default Pagination

const useStyles = makeStyles()((theme) => ({
  flexContainer: {},
  progressBarContainer: {},

  active: {
    backgroundColor: red[500],
  },
  inActive: {
    backgroundColor: grey[500],
  },
  progressCircle: {
    width: '10px',
    aspectRatio: 1,
    borderRadius: '50%',
  },
}))
