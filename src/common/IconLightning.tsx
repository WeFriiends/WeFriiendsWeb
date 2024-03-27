import React from 'react'
import { makeStyles } from 'tss-react/mui'
import theme from '../styles/createTheme'

type LightningProps = {
  color?: string
}
const IconLightning: React.FC<LightningProps> = ({ color }) => {
  const { classes } = useStyles()
  color ??= theme.palette.primary.main

  return (
    <svg
      preserveAspectRatio="none"
      viewBox="0 0 32 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes.IconLightning}
    >
      <path
        d="M17.6667 1.32422L1 21.1242H16L14.3333 34.3242L31 14.5242H16L17.6667 1.32422Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export default IconLightning
const useStyles = makeStyles()(() => {
  return {
    IconLightning: {
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }
})
