import React from 'react'
import { Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

interface FirstProfileHeadersProps {
  activeStep: number
}
const FirstProfileHeaders: React.FC<FirstProfileHeadersProps> = ({
  activeStep,
}) => {
  const { classes } = useStyles()
  return (
    <Typography className={classes.firstProfileHeaderStyle}>
      {activeStep === 0 && 'Name'}
      {activeStep === 1 && 'Date of Birth'}
      {activeStep === 2 && 'More about you'}
      {activeStep === 3 && 'What are you looking for?'}
    </Typography>
  )
}

export default FirstProfileHeaders

const useStyles = makeStyles()(() => {
  return {
    firstProfileHeaderStyle: {
      color: '#F46B5D',
      marginTop: '1rem',
      fontFamily: 'Inter',
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: '2rem',
    },
  }
})
