import { Avatar, Typography, Box } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

const AvatarWithName = () => {
  const { classes } = useStyles()
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Avatar
        src="/img/avatar_elena.jpg"
        sx={{ width: 56, height: 56 }}
      ></Avatar>
      <Typography className={classes.name}>Elena S</Typography>
    </Box>
  )
}

export default AvatarWithName

const useStyles = makeStyles()(() => {
  return {
    name: {
      fontSize: 32,
      fontWeight: 600,
      lineHeight: '40px',
      color: '#F1562A',
      paddingLeft: 35,
    },
  }
})
