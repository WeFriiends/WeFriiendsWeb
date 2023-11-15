import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import Paper from '@mui/material/Paper'

const FooterAppBar = () => {
  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation>
        <BottomNavigationAction
          label="Recents"
          icon={<img src="/img/nearBy/near_me.svg" />}
        />
        <BottomNavigationAction
          label="Favorites"
          icon={<img src="img/nearBy/like_you.svg" />}
        />
        <BottomNavigationAction
          label="Archive"
          icon={<img src="img/nearBy/ii.svg" />}
        />
        <BottomNavigationAction
          label="Archive"
          icon={<img src="img/nearBy/chat.svg" />}
        />
        <BottomNavigationAction
          label="Archive"
          icon={<img src="img/nearBy/profile.svg" />}
        />
      </BottomNavigation>
    </Paper>
  )
}

export default FooterAppBar
