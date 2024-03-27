import React from 'react'
import { Typography } from '@mui/material'
import Logo from 'common/Logo'

type OnboardingHeaderProps = {
  show: boolean
  heading1?: string
  heading2?: string
}
const OnboardingHeader: React.FC<OnboardingHeaderProps> = ({
  heading1,
  heading2,
}) => {
  return (
    <>
      <Typography variant="h2" className="heading" sx={{ color: '#333333' }}>
        {heading1 || ''}
      </Typography>

      <Logo />

      <Typography variant="h5">{heading2 || ''}</Typography>
    </>
  )
}
export default OnboardingHeader
