import { Box, CircularProgress } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

const Loader = () => {
  const { classes } = useStyles()

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <CircularProgress className={classes.circularProgress} />
    </Box>
  )
}

export default Loader

const useStyles = makeStyles()(() => ({
  circularProgress: {
    color: '#FB8F67',
    position: 'absolute',
    top: '50%',
  },
}))
