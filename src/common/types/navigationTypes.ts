export interface CommonConfig {
  isActive: boolean
  imagePath: string
  alt: string
}

export interface NavigationConfig {
  value: string
  iconProps: CommonConfig
  linkTo: string
  size: {
    width: number
    height: number
  }
}

export interface NavigationItem {
  value: string
  iconProps: CommonConfig | RenderIconProps
  linkTo: string
  size: {
    width: number
    height: number
  }
}

export interface RenderIconProps {
  isActive: boolean
  imagePath: string
  alt: string
  width: number
  height: number
}

export interface NavigationProps {
  activePage: string
  setNewActivePage: (newValue: string) => void
  navigationConfig: NavigationItem[]
}
