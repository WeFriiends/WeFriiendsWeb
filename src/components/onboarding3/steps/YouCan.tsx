import { Box, Typography } from '@mui/material'
import { commonStyles } from '../CommonStyles'

const YouCan: React.FC = () => {
  const { classes } = commonStyles()
  return (
    <Box className={classes.contentContainer}>
      <Box component="img" src="/img/you-can.svg" alt="you-can" />
      <Typography className={classes.text}>Find emotional support</Typography>
    </Box>
  )
}
export default YouCan
