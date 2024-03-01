import { Box, Typography } from '@mui/material'
import { commonStyles } from '../CommonStyles'

const ToFind: React.FC = () => {
  const { classes } = commonStyles()
  return (
    <Box className={classes.contentContainer}>
      <Box component="img" src="/img/find-friends.svg" alt="find-friends" />
      <Typography className={classes.text}>find friends in new city</Typography>
    </Box>
  )
}
export default ToFind
