import React from 'react'
import { makeStyles } from 'tss-react/mui'
import theme from '../styles/createTheme'

type IconLightningProps = {
  color?: string
}
const IconLightning: React.FC<IconLightningProps> = ({ color }) => {
  const { classes } = useStyles()
  color ??= theme.palette.primary.main

  return (
    <svg
      preserveAspectRatio="none"
      viewBox="0 0 32 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes.iconLightning}
    >
      <path
        d="M17.537 1L1.89453 23.8H15.9727L14.4085 39.0001L30.051 16.2H15.9727L17.537 1Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
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
      transition: 'color 0.3s, stroke 0.3s',
    },
  }
})
