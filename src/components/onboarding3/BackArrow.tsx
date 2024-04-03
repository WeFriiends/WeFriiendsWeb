import React from 'react'
import { IconButton, Box } from '@mui/material'

interface BackArrowProps {
  handleBack: () => void
  activeStep: number
}

const BackArrow: React.FC<BackArrowProps> = ({ handleBack, activeStep }) => {
  return (
    <IconButton onClick={handleBack} disabled={activeStep === 0}  sx={{
      '&:hover': {
        backgroundColor: 'transparent',
      }
    }} >
      <Box
        component="img"
        src="/img/firstProfile/back.svg"
        alt="arrow_back"
        style={{
          width: '2.8125rem',
          height: '2.8125rem',
          marginTop: '1rem',
        }}
      ></Box>
    </IconButton>
  )
}

export default BackArrow
