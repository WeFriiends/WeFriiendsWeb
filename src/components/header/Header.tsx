import { Box } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import AvatarWithName from '../avatarWithName/AvatarWithName'
import Menu from '../menu/Menu'
import Logo from '../logo/Logo'

function Header() {
  const { classes } = useStyles()
  return (
    <Box className={classes.headerStyle}>
      <Logo />
      <Menu />
      <AvatarWithName />
    </Box>
  )
}

export default Header

const useStyles = makeStyles()(() => {
  return {
    headerStyle: {
      display: 'flex',
      alignItems: 'end',
      justifyContent: 'space-around',
      marginBottom: 140,
    },
  }
})
