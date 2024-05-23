export interface NavigationConfig {
  value: string
  Icon: React.FC<any>
  linkTo: string
  size: {
    xs: {
      width: number
      height: number
    }
    lg: {
      width: number
      height: number
    }
  }
}

export interface NavigationItem {
  value: string
  Icon: React.FC<any>
  linkTo: string
  size: {
    xs: {
      width: number
      height: number
    }
    lg: {
      width: number
      height: number
    }
  }
}

export interface NavigationProps {
  activePage: string
  navigationConfig: NavigationItem[]
}
