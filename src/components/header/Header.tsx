import Logo from 'components/logo/Logo'
import Menu from 'components/menu/Menu'
import { Box } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import AvatarWithName from 'components/avatarWithName/AvatarWithName'

const Header = () => {
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
