import React from 'react'
import { makeStyles } from 'tss-react/mui'
import theme from '../../styles/createTheme'

type IconProfileProps = {
  color?: string
}
const IconProfile: React.FC<IconProfileProps> = ({ color }) => {
  const { classes } = useStyles()
  color ??= theme.palette.primary.main

  return (
    <svg
      preserveAspectRatio="none"
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes.iconProfile}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.43773 13.4645C3.37541 12.5268 4.64718 12 5.97327 12H13.9733C15.2993 12 16.5711 12.5268 17.5088 13.4645C18.4465 14.4021 18.9733 15.6739 18.9733 17V19C18.9733 19.5523 18.5256 20 17.9733 20C17.421 20 16.9733 19.5523 16.9733 19V17C16.9733 16.2044 16.6572 15.4413 16.0946 14.8787C15.532 14.3161 14.7689 14 13.9733 14H5.97327C5.17762 14 4.41456 14.3161 3.85195 14.8787C3.28934 15.4413 2.97327 16.2044 2.97327 17V19C2.97327 19.5523 2.52555 20 1.97327 20C1.42098 20 0.973267 19.5523 0.973267 19V17C0.973267 15.6739 1.50005 14.4021 2.43773 13.4645Z"
        fill={color}
        className={classes.iconTransition}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.97327 2C8.31641 2 6.97327 3.34315 6.97327 5C6.97327 6.65685 8.31641 8 9.97327 8C11.6301 8 12.9733 6.65685 12.9733 5C12.9733 3.34315 11.6301 2 9.97327 2ZM4.97327 5C4.97327 2.23858 7.21184 0 9.97327 0C12.7347 0 14.9733 2.23858 14.9733 5C14.9733 7.76142 12.7347 10 9.97327 10C7.21184 10 4.97327 7.76142 4.97327 5Z"
        fill={color}
        className={classes.iconTransition}
      />
    </svg>
  )
}
export default IconProfile
const useStyles = makeStyles()(() => {
  return {
    iconProfile: {
      maxWidth: '100%',
      maxHeight: '100%',
    },
    iconTransition: {
      transition: 'color .3s, stroke .3s, fill .3s',
    },
  }
})
