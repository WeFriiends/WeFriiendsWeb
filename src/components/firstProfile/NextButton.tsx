import React from 'react'
import { Button } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

interface NextButtonProps {
  handleNext: () => void
  isNextDisabled: boolean
}
const NextButton: React.FC<NextButtonProps> = ({
  handleNext,
  isNextDisabled,
}) => {
  const { classes } = useStyles()
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleNext}
      disabled={isNextDisabled}
      sx={{
        backgroundColor: isNextDisabled ? '#FFFFFF' : '#FB8F67',
        color: isNextDisabled ? '#FB8F67' : '#FFFFFF',
        border: `2px solid ${isNextDisabled ? '#FB8F67' : '#FFFFFF'}`,
      }}
      className={classes.nextButtonStyle}
    >
      Next
    </Button>
  )
}

export default NextButton

const useStyles = makeStyles()(() => {
  return {
    nextButtonStyle: {
      width: '21.875rem',
      height: '3.75rem',
      borderRadius: '0.625rem',
      fontSize: '1.125rem',
      fontWeight: '600',
      fontFamily: 'Inter',
      marginTop: '3.31rem',
      fontStyle: 'normal',
      textTransform: 'capitalize',
    },
  }
})
