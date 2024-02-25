import React from 'react'
import { Typography } from '@mui/material'
import Logo from 'common/Logo'

type OnboardingHeaderProps = {
  show: boolean
  heading1?: string
  heading2?: string
}
const OnboardingHeader: React.FC<OnboardingHeaderProps> = ({
  show,
  heading1,
  heading2,
}) => {
  return show ? (
    <>
      <Typography variant="h3" className="heading">
        {heading1}
      </Typography>

      <Logo />

      <Typography variant="h4">{heading2}</Typography>
    </>
  ) : (
    <Logo />
  )
}
export default OnboardingHeader
