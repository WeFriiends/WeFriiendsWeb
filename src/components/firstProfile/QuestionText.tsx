import React from 'react'
import { Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

interface QuestionTextProps {
  activeStep: number
}

const QuestionText: React.FC<QuestionTextProps> = ({ activeStep }) => {
  const { classes } = useStyles()
  return (
    <Typography className={classes.firstProfileQuestionStyle}>
      {activeStep === 0 && 'Enter your name:'}
      {activeStep === 1 && 'Enter your date of birth:'}
      {activeStep === 2 && 'What is your gender?'}
      {activeStep === 3 && 'Enter what you are looking for:'}
    </Typography>
  )
}

export default QuestionText

const useStyles = makeStyles()(() => {
  return {
    firstProfileQuestionStyle: {
      paddingTop: '2.2rem',
      color: '#444',
      fontSize: '1.125rem',
      fontFamily: 'Inter',
      fontWeight: '500',
    },
  }
})
