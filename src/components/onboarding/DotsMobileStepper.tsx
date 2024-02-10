// import * as React from 'react'
// //import { useTheme } from '@mui/material/styles'
// //import { useNavigate } from 'react-router'
// //import MobileStepper from '@mui/material/MobileStepper'
// //import Button from '@mui/material/Button'
// import ToFind from './ToFind'
// import ToVisit from './ToVisit'
// import ToWalkWith from './ToWalkWith'
// import ToLearn from './ToLearn'
// import YouCan from './YouCan'
// import { Box } from '@mui/material'
// import Pagination from './Pagination'
// //import Carousel from './Carousel'

// const DotsMobileStepper = () => {
//   const components = [
//     {
//       label: 'ToVisit',
//       component: <ToVisit />,
//     },
//     {
//       label: 'ToFind',
//       component: <ToFind />,
//     },
//     {
//       label: 'ToWalkWith',
//       component: <ToWalkWith />,
//     },
//     {
//       label: 'ToLearn',
//       component: <ToLearn />,
//     },
//     {
//       label: 'YouCan',
//       component: <YouCan />,
//     },
//   ]
//   //const navigate = useNavigate()
//   const [activeStep, setActiveStep] = React.useState(0)
//   //const maxSteps = components.length

//   // const handleNext = () => {
//   //   setActiveStep((prevActiveStep) => prevActiveStep + 1)
//   // }
//   // const handleNext = () => {
//   //   const nextStep = activeStep + 1
//   //   //setActiveStep(nextStep)

//   //   // if (nextStep < components.length) {
//   //   //   //setActiveStep(nextStep)
//   //   //   navigate(`/${components[nextStep].label}`)
//   //   // }
//   //   setActiveStep(nextStep)
//   // }

//   // const handleGoBack = () => {
//   //   navigate('/YouCan')
//   // }
//   const handleChangeIndex = (index: number) => {
//     setActiveStep(index)
//   }

//   return (
//     <>
//       <Box sx={{ height: 255, maxWidth: 400, width: '100%', p: 2 }}>
//         {components[activeStep].component}
//       </Box>
//       <Pagination
//         index={activeStep}
//         dots={components.length}
//         onChangeIndex={handleChangeIndex}
//       />
//       {/* <Carousel items={components} showNext={true} showPrevious={true} /> */}
//     </>
//   )
// }
// export default DotsMobileStepper

// import * as React from 'react'
// import { Box } from '@mui/material'
// import Pagination from './Pagination'
// import Carousel from './Carousel'
// import ToFind from './ToFind'
// import ToVisit from './ToVisit'
// import ToWalkWith from './ToWalkWith'
// import ToLearn from './ToLearn'
// import YouCan from './YouCan'

// const DotsMobileStepper = () => {
//   const components = [
//     {
//       label: 'ToVisit',
//       component: <ToVisit />,
//     },
//     {
//       label: 'ToFind',
//       component: <ToFind />,
//     },
//     {
//       label: 'ToWalkWith',
//       component: <ToWalkWith />,
//     },
//     {
//       label: 'ToLearn',
//       component: <ToLearn />,
//     },
//     {
//       label: 'YouCan',
//       component: <YouCan />,
//     },
//   ]

//   const [activeStep, setActiveStep] = React.useState(0)

//   const handleChangeIndex = (index: number) => {
//     setActiveStep(index)
//   }

//   const handleNext = () => {
//     const nextStep = activeStep + 1
//     setActiveStep(nextStep < components.length ? nextStep : activeStep)
//   }

//   const handleSkip = () => {
//     const lastStep = components.length - 1
//     setActiveStep(lastStep)
//   }
//   const handlePrevious = () => {
//     const prevStep = activeStep - 1
//     setActiveStep(prevStep >= 0 ? prevStep : activeStep)
//   }

//   return (
//     <>
//       <Box sx={{ height: 255, maxWidth: 400, width: '100%', p: 2 }}>
//         {components[activeStep].component}

//         <Pagination
//           index={activeStep}
//           dots={components.length}
//           onChangeIndex={handleChangeIndex}
//         />
//         <Carousel
//           onSkip={handleSkip}
//           onNext={handleNext}
//           onPrevious={handlePrevious}
//           showSkip={true}
//           showNext={true}
//           showPrevious={false}
//         />
//         {/* <Carousel
//           onNext={handleNext}
//           onSkip={handleSkip}
//           // onPrevious={handlePrevious}
//         /> */}
//       </Box>
//     </>
//   )
// }

// export default DotsMobileStepper
