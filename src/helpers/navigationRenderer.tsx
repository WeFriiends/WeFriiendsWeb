import React from 'react'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import RenderIcon from './renderIcon'
import { Link } from 'react-router-dom'
import {
  NavigationProps,
  RenderIconProps,
  CommonConfig,
} from '../common/types/navigationTypes'

export const renderNavigationItems = ({
  activePage,
  setNewActivePage,
  navigationConfig,
}: NavigationProps) => {
  return navigationConfig.map(({ value, iconProps, linkTo, size }) => (
    <BottomNavigationAction
      key={value}
      value={value}
      component={Link}
      to={linkTo}
      icon={renderLinkWithIcon(linkTo, iconProps, size, activePage === value)}
      onClick={() => setNewActivePage(value)}
      disableRipple={true}
      disableTouchRipple={true}
    />
  ))
}

const renderLinkWithIcon = (
  linkTo: string,
  iconProps: RenderIconProps | CommonConfig,
  size: { width: number; height: number } | undefined,
  isActive: boolean
) => {
  const renderProps: RenderIconProps =
    'width' in iconProps
      ? (iconProps as RenderIconProps)
      : {
          isActive: iconProps.isActive,
          imagePath: iconProps.imagePath,
          alt: iconProps.alt,
          width: size?.width || 0,
          height: size?.height || 0,
        }

  return <RenderIcon {...renderProps} isActive={isActive} />
}
