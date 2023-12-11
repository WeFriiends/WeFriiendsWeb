import React from 'react'
import { Link } from 'react-router-dom'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import RenderIcon from './renderIcon'

interface NavigationItem {
  value: string
  iconProps: any // Adjust the type according to your needs
  linkTo: string
  size: { width: number; height: number }
}

interface NavigationProps {
  activePage: string
  setNewActivePage: (newValue: string) => void
  navigationConfig: NavigationItem[]
}

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
  iconProps: any,
  size: any,
  isActive: boolean
) => (
  <Link to={linkTo} style={{ textDecoration: 'none' }}>
    <RenderIcon
      {...iconProps}
      width={size.width}
      height={size.height}
      isActive={isActive}
    />
  </Link>
)
