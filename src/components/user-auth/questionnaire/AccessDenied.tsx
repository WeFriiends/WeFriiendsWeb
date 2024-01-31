import { Box } from '@mui/material'
import { commonStyles } from 'styles/commonStyles'

const AccessDenied = () => {
  const { classes } = commonStyles()

  return (
    <Box className={classes.highlightText}>
      You have to allow WeFriiends to access your device location.
      <br /> Otherwise, we can’t find a friend for you.
    </Box>
  )
}

export default AccessDenied
