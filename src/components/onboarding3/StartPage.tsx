import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import OnboardingHeader from './OnboardingHeader'
import { commonStyles } from './CommonStyles'
// import withProfileComponentHOC from '../OnboardingHOC'

const startOnboarding: React.FC = () => {
  const { classes } = commonStyles()
  return (
    <Box
      className="firstPageContentContainer"
      flexGrow={1}
      marginInline="auto"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        height: 600,
        maxWidth: '70%',
        padding: '0 15%',
      }}
    >
      <OnboardingHeader show={false} />
      <Typography marginBlock={20} className={classes.text}>
        Hello, dear! Let us help you to find new friends here!
      </Typography>
      <Button
        component={Link}
        to="../presentation"
        className={`${classes.linkBtnSecondary} ${classes.textLow} `}
        sx={{
          padding: '0 0.5rem',
          fontSize: '30px',
          width: '80%',
          maxWidth: '60%',
          flexShrink: 0,
          flexGrow: 0,
        }}
      >
        start
      </Button>
    </Box>
  )
}
export default startOnboarding
