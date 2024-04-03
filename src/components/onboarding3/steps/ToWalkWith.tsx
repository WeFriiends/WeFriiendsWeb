import { Box, Typography } from '@mui/material'
import { commonStyles } from '../CommonStyles'

const ToWalkWith: React.FC = () => {
  const { classes } = commonStyles()
  return (
    <Box className={classes.contentContainer}>
      <Box component="img" src="/img/person.svg" alt="person" />
      <Typography className={classes.text}>
        find a perfect person to walk with
      </Typography>
    </Box>
  )
}
export default ToWalkWith
