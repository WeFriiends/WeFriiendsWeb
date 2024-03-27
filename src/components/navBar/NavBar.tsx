import React from 'react'
import {
  Avatar,
  BottomNavigation,
  Box,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { useActivePage } from '../../context/activePageContext'
import { generateNavigationConfig } from '../../helpers/navigationConfigHelper'
import { renderNavigationItems } from '../../helpers/navigationRenderer'
import Logo from '../../common/Logo'

const NavBar = () => {
  const { classes } = useStyles()
  const { activePage, setNewActivePage } = useActivePage()
  const isMobile = useMediaQuery<boolean>('(max-width:1023px)')
  const navigationConfig = isMobile
    ? generateNavigationConfig('footer')
    : generateNavigationConfig('header')

  // We need to show active menu item from the first render of the app: to check the location path and to setActivePage

  return (
    <Box className={classes.header}>
      <Box className={classes.logo}>
        <Logo />
      </Box>
      <BottomNavigation
        value={activePage}
        onChange={(event, newValue) => setNewActivePage(newValue)}
        className={classes.navList}
      >
        {renderNavigationItems({
          activePage,
          setNewActivePage,
          navigationConfig,
        })}
      </BottomNavigation>
      <Box className={classes.userDetails}>
        <Avatar
          src="/img/avatar_elena.jpg"
          sx={{ width: 56, height: 56 }}
        ></Avatar>
        <Typography className={classes.name}>Elena S</Typography>
      </Box>
    </Box>
  )
}

export default NavBar
const useStyles = makeStyles()((theme) => {
  return {
    logo: {
      display: 'none',
      [theme.breakpoints.up('lg')]: {
        display: 'block',
      },
    },
    header: {
      bottom: 0,
      right: 0,
      left: 0,
      zIndex: 999,
      background: theme.palette.common.white,
      [theme.breakpoints.down('lg')]: {
        position: 'fixed',
        minHeight: 60,
        boxShadow: '0 0 7px 1px rgba(179, 179, 179, 0.14)',
      },
      [theme.breakpoints.up('lg')]: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '60px 0 40px',
      },
    },
    name: {
      fontSize: 32,
      fontWeight: 600,
      lineHeight: '40px',
      color: '#F1562A',
      paddingLeft: 35,
    },
    navList: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexGrow: 10,
      margin: '0 20px',
      [theme.breakpoints.up('lg')]: {
        maxWidth: 420,
        margin: '0 40px',
      },
    },
    userDetails: {
      display: 'none',
      [theme.breakpoints.up('lg')]: {
        display: 'flex',
        alignItems: 'center',
      },
    },
  }
})
