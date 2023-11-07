import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import Paper from '@mui/material/Paper'
import { Link } from 'react-router-dom'
import { useActivePage } from '../../context/activePageContext'

const FooterAppBar: React.FC = () => {
  const { activePage, setNewActivePage } = useActivePage()

  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        value={activePage}
        onChange={(event, newValue) => setNewActivePage(newValue)}
      >
        <BottomNavigationAction
          value="nearme"
          icon={
            <Link to="/nearMe" style={{ textDecoration: 'none' }}>
              {activePage === 'nearme' ? (
                <img src="/img/navigationIcons/near_me_red.svg" alt="near_me" />
              ) : (
                <img src="/img/navigationIcons/near_me.svg" alt="near_me" />
              )}
            </Link>
          }
        />
        <BottomNavigationAction
          value="wholikedyou"
          icon={
            <Link to="/whoLikedYou" style={{ textDecoration: 'none' }}>
              {activePage === 'wholikedyou' ? (
                <img
                  src="img/navigationIcons/like_you_red.svg"
                  alt="who_liked_me"
                />
              ) : (
                <img
                  src="img/navigationIcons/like_you.svg"
                  alt="who_liked_me"
                />
              )}
            </Link>
          }
        />
        <BottomNavigationAction
          value="friends"
          icon={
            <Link to="/messages" style={{ textDecoration: 'none' }}>
              {activePage === 'friends' ? (
                <img src="img/navigationIcons/ii_red.svg" alt="friends" />
              ) : (
                <img src="img/navigationIcons/ii.svg" alt="friends" />
              )}
            </Link>
          }
        />
        <BottomNavigationAction
          value="chat"
          icon={
            <Link to="/messages" style={{ textDecoration: 'none' }}>
              {activePage === 'chat' ? (
                <img src="img/navigationIcons/chat_red.svg" alt="chat" />
              ) : (
                <img src="img/navigationIcons/chat.svg" alt="chat" />
              )}
            </Link>
          }
        />
        <BottomNavigationAction
          value="profile"
          icon={
            activePage === 'profile' ? (
              <img src="img/navigationIcons/profile_red.svg" alt="profile" />
            ) : (
              <img src="img/navigationIcons/profile.svg" alt="profile" />
            )
          }
        />
      </BottomNavigation>
    </Paper>
  )
}

export default FooterAppBar
