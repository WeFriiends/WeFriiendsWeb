import React from 'react'
import {
  Avatar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Typography,
} from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { useActivePage } from '../../context/activePageContext'
import { Link } from 'react-router-dom'

const Header = () => {
  const { classes } = useStyles()
  const { activePage, setNewActivePage } = useActivePage()
  return (
    <Box className={classes.headerStyle}>
      <Box>
        <Box
          component="img"
          src="/img/logo.svg"
          alt="logo"
          className={classes.logo}
        ></Box>
      </Box>
      <BottomNavigation
        value={activePage}
        onChange={(event, newValue) => setNewActivePage(newValue)}
      >
        <BottomNavigationAction
          value="nearme"
          icon={
            <Link to="/nearMe" style={{ textDecoration: 'none' }}>
              {activePage === 'nearme' ? (
                <img
                  src="/img/navigationIcons/near_me_red.svg"
                  width={38}
                  height={38}
                  alt="near_me"
                />
              ) : (
                <img
                  src="/img/navigationIcons/near_me.svg"
                  width={38}
                  height={38}
                  alt="near_me"
                />
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
                  width={27}
                  height={38}
                  alt="who_liked_you"
                />
              ) : (
                <img
                  src="img/navigationIcons/like_you.svg"
                  width={27}
                  height={38}
                  alt="who_liked_you"
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
                <img
                  src="img/navigationIcons/ii_red.svg"
                  width={24}
                  height={50}
                  alt="friends"
                />
              ) : (
                <img
                  src="img/navigationIcons/ii.svg"
                  width={39}
                  height={39}
                  alt="friends"
                />
              )}
            </Link>
          }
        />
        <BottomNavigationAction
          value="chat"
          icon={
            <Link to="/messages" style={{ textDecoration: 'none' }}>
              {activePage === 'friends' ? (
                <img
                  src="img/navigationIcons/chat_red.svg"
                  width={39}
                  height={39}
                  alt="friends"
                />
              ) : (
                <img
                  src="img/navigationIcons/chat.svg"
                  width={39}
                  height={39}
                  alt="friends"
                />
              )}
            </Link>
          }
        />
      </BottomNavigation>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          src="/img/avatar_elena.jpg"
          sx={{ width: 56, height: 56 }}
        ></Avatar>
        <Typography className={classes.name}>Elena S</Typography>
      </Box>
    </Box>
  )
}

export default Header
const useStyles = makeStyles()(() => {
  return {
    logo: {
      marginTop: '5vh',
      width: '257px',
      height: '47.4px',
    },
    headerStyle: {
      display: 'flex',
      alignItems: 'end',
      justifyContent: 'space-around',
      marginBottom: 40,
    },
    name: {
      fontSize: 32,
      fontWeight: 600,
      lineHeight: '40px',
      color: '#F1562A',
      paddingLeft: 35,
    },
  }
})
