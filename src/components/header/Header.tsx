import React from 'react'
import { Avatar, BottomNavigation, Box, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { useActivePage } from '../../context/activePageContext'
import { generateNavigationConfig } from '../../helpers/navigationConfigHelper'
import { renderNavigationItems } from '../../helpers/navigationRenderer'
const Header = () => {
  const { classes } = useStyles()
  const { activePage, setNewActivePage } = useActivePage()
  const navigationConfig = generateNavigationConfig('header')

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
        {renderNavigationItems({
          activePage,
          setNewActivePage,
          navigationConfig,
        })}
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
