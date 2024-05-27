import React from 'react'
import { makeStyles } from 'tss-react/mui'
import theme from '../../styles/createTheme'

type IconLightningProps = {
  color?: string
}
const IconLightning: React.FC<IconLightningProps> = ({ color }) => {
  const { classes } = useStyles()
  color ??= theme.palette.primary.main

  return (
    <svg
      preserveAspectRatio="none"
      viewBox="0 0 30 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes.iconLightning}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.6705 0.057293C17.1042 0.210777 17.3773 0.640369 17.3321 1.09821L15.9405 15.2H28.3369C28.7046 15.2 29.0427 15.4018 29.2171 15.7255C29.3916 16.0491 29.3744 16.4424 29.1723 16.7496L14.1723 39.5496C13.9195 39.934 13.437 40.0962 13.0033 39.9427C12.5696 39.7892 12.2966 39.3596 12.3417 38.9018L13.7334 24.8H1.33692C0.969214 24.8 0.631174 24.5982 0.456683 24.2745C0.282193 23.9509 0.299403 23.5576 0.501498 23.2504L15.5015 0.450386C15.7544 0.0660405 16.2368 -0.0961912 16.6705 0.057293ZM3.19182 22.8H14.8369C15.1192 22.8 15.3884 22.9193 15.5779 23.1285C15.7675 23.3377 15.8598 23.6173 15.8321 23.8982L14.7303 35.0626L26.482 17.2H14.8369C14.5546 17.2 14.2855 17.0807 14.0959 16.8715C13.9063 16.6623 13.814 16.3827 13.8417 16.1018L14.9435 4.93745L3.19182 22.8Z"
        fill={color}
        className={classes.iconTransition}
      />
    </svg>
  )
}
export default IconLightning
const useStyles = makeStyles()(() => {
  return {
    iconLightning: {
      maxWidth: '100%',
      maxHeight: '100%',
    },
    iconTransition: {
      transition: 'color .3s, stroke .3s, fill .3s',
    },
  }
})
