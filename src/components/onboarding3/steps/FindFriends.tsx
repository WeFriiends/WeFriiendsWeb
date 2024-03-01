import { Box, Typography } from '@mui/material'
import { commonStyles } from '../CommonStyles'

const FindFriends: React.FC = () => {
  const { classes } = commonStyles()
  return (
    <Box className={classes.contentContainer}>
      <Box className={classes.multiRowContainer} sx={{ left: 0 }}>
        <img src="/img/vector1.svg" alt="Vector1" />
        <Typography
          className={classes.text}
          sx={{
            position: 'relative',
            right: '15%',
            top: '15%',
          }}
        >
          look for friends in your local city
        </Typography>
      </Box>
      <Box className={classes.multiRowContainer} sx={{ left: '15%' }}>
        <img src="/img/vector2.svg" alt="vector2" />
        <Typography
          className={classes.text}
          sx={{
            position: 'relative',
            right: '15%',
            top: '15%',
          }}
        >
          or all over the world
        </Typography>
      </Box>
      <Box className={classes.multiRowContainer} sx={{ left: 0 }}>
        <img src="/img/vector3.svg" alt="vector3" />
        <Typography
          className={classes.text}
          sx={{
            position: 'relative',
            right: '15%',
            top: '15%',
          }}
        >
          ready to relocate? great! find a friend in a city of relocation
        </Typography>
      </Box>
    </Box>
  )
}
export default FindFriends
