import { Box, Typography } from '@mui/material'
import { commonStyles } from '../CommonStyles'

const ToVisit: React.FC = () => {
  const { classes } = commonStyles()
  return (
    <Box className={classes.contentContainer}>
      <Box component="img" src="/img/yoga.svg" alt="yoga" />
      <Typography className={classes.text}>
        find a friend to visit yoga studio
      </Typography>
    </Box>
  )
}
export default ToVisit
