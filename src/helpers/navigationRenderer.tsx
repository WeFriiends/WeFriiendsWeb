import React from 'react'
import { Link } from 'react-router-dom'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import RenderIcon from './renderIcon'
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
      icon={renderLinkWithIcon(linkTo, iconProps, size, activePage === value)}
      onClick={() => setNewActivePage(value)}
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

  return (
    <Link to={`/user/${linkTo}`} style={{ textDecoration: 'none' }}>
      <RenderIcon {...renderProps} isActive={isActive} />
    </Link>
  )
}
