import React from 'react'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import { Link } from 'react-router-dom'
import { NavigationProps } from '../../common/types/navigationTypes'
import theme from '../../styles/createTheme'

export const NavigationItems = ({
  activePage,
  navigationConfig,
}: NavigationProps) => {
  return navigationConfig.map(({ value, Icon, linkTo, size }) => (
    <BottomNavigationAction
      key={value}
      value={value}
      component={Link}
      to={linkTo}
      icon={
        <Icon
          color={
            activePage === value
              ? theme.palette.primary.main
              : theme.colorNavIcon
          }
        />
      }
      sx={{
        width: { xs: size.xs.width, lg: size.lg.width },
        height: { xs: size.xs.height, lg: size.lg.height },
      }}
      disableRipple
      disableTouchRipple
    />
  ))
}
