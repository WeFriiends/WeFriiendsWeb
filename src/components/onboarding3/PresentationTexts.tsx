import React from 'react'
import { Typography } from '@mui/material'

interface PresentationTextProps {
  activeStep: number
}

const PresentationText: React.FC<PresentationTextProps> = ({ activeStep }) => {
  return (
    <Typography
      sx={{
        paddingTop: '2.2rem',
        fontSize: '1.125rem',
        fontFamily: 'Inter',
        fontWeight: '500',
      }}
    >
      {activeStep === 1 && 'find a friend to visit yoga studio'}
      {activeStep === 2 && 'find friends in new city'}
      {activeStep === 4 && 'find a perfect person to walk with'}
      {activeStep === 5 && 'find someone to learn language with'}
      {activeStep === 6 && 'Find emotional support'}
    </Typography>
  )
}

export default PresentationText
