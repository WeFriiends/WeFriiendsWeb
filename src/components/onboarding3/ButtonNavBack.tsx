import React from 'react'
import { Button, IconButton, Box } from '@mui/material'

interface ButtonNavBackProps {
  handleClick?: () => void
  display?: boolean
  disabled?: false
  className?: string
}
const ButtonNavBack: React.FC<ButtonNavBackProps> = ({
  handleClick,
  display,
  disabled,
  className,
}) => {
  if (!display) {
    return null
  }
  return (
    <IconButton onClick={handleClick}>
      <Box
        component="img"
        src="/img/back.svg"
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
export default ButtonNavBack
