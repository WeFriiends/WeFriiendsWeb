import React from 'react'
import { Button, IconButton, Box } from '@mui/material'

interface ButtonToGoProps {
  label?: string
  handleGo?: () => void
  show?: boolean
  iconButton?: boolean
  disabled?: false
  className?: string
}
const ButtonToGo: React.FC<ButtonToGoProps> = ({
  label,
  handleGo,
  show,
  iconButton,
  disabled,
  className,
}) => {
  if (!handleGo || !show) return null

  return !iconButton ? (
    <Button
      onClick={handleGo}
      disabled={disabled}
      sx={{ padding: '0 3rem' }}
      className={className}
    >
      {label}
    </Button>
  ) : (
    <IconButton onClick={handleGo}>
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
export default ButtonToGo
