import React from 'react'
import { makeStyles } from 'tss-react/mui'
import theme from '../styles/createTheme'

type IconNearMeProps = {
  color?: string
}
const IconNearMe: React.FC<IconNearMeProps> = ({ color }) => {
  const { classes } = useStyles()
  color ??= theme.palette.primary.main

  return (
    <svg
      preserveAspectRatio="none"
      viewBox="0 0 33 37"
      fill="none"
      className={classes.iconNearMe}
    >
      <path
        d="M31.04 15.25C31.04 26.3334 16.1797 35.8334 16.1797 35.8334C16.1797 35.8334 1.31934 26.3334 1.31934 15.25C1.31934 11.4707 2.88497 7.84613 5.67183 5.17374C8.45868 2.50134 12.2385 1 16.1797 1C20.1209 1 23.9007 2.50134 26.6875 5.17374C29.4744 7.84613 31.04 11.4707 31.04 15.25Z"
        stroke={color}
        className={classes.iconTransition}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.18 20C18.9157 20 21.1335 17.8734 21.1335 15.25C21.1335 12.6267 18.9157 10.5 16.18 10.5C13.4443 10.5 11.2266 12.6267 11.2266 15.25C11.2266 17.8734 13.4443 20 16.18 20Z"
        stroke={color}
        className={classes.iconTransition}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export default IconNearMe
const useStyles = makeStyles()(() => {
  return {
    iconNearMe: {
      maxWidth: '100%',
      maxHeight: '100%',
    },
    iconTransition: {
      transition: 'color 0.3s, stroke 0.3s',
    },
  }
})
