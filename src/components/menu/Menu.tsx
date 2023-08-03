import { BottomNavigation, BottomNavigationAction } from '@mui/material'

const Menu = () => {
  return (
    <BottomNavigation>
      <BottomNavigationAction icon={<img src="/img/near_me.svg" />} />
      <BottomNavigationAction icon={<img src="/img/like_you.svg" />} />
      <BottomNavigationAction icon={<img src="/img/ii.svg" />} />
      <BottomNavigationAction icon={<img src="/img/chat.svg" />} />
    </BottomNavigation>
  )
}

export default Menu
