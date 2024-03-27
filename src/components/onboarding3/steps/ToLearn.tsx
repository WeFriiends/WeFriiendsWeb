import { Box, Typography } from '@mui/material'
import { commonStyles } from '../CommonStyles'

const ToLearn: React.FC = () => {
  const { classes } = commonStyles()
  return (
    <Box className={classes.contentContainer}>
      <Box component="img" src="/img/learn-together.svg" alt="learn-together" />
      <Typography className={classes.text}>
        find someone to learn language with
      </Typography>
    </Box>
  )
}
export default ToLearn
