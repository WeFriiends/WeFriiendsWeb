import Logo from 'components/logo/Logo'
import Menu from 'components/menu/Menu'
import { Box } from '@mui/material'
import AvatarWithName from 'components/avatarWithName/AvatarWithName'

const Header = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'end',
        justifyContent: 'space-around',
        marginBottom: '140px',
      }}
    >
      <Logo />
      <Menu />
      <AvatarWithName />
    </Box>
  )
}

export default Header
