import React from 'react'
import { makeStyles } from 'tss-react/mui'
import theme from '../styles/createTheme'

type IconProfileProps = {
  color?: string
}
const IconProfile: React.FC<IconProfileProps> = ({ color }) => {
  const { classes } = useStyles()
  color ??= theme.palette.primary.main

  return (
    <svg
      preserveAspectRatio="none"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes.iconProfile}
    >
      <g>
        <path
          d="M20.9731 21V19C20.9731 17.9391 20.5517 16.9217 19.8016 16.1716C19.0514 15.4214 18.034 15 16.9731 15H8.97314C7.91228 15 6.89486 15.4214 6.14472 16.1716C5.39457 16.9217 4.97314 17.9391 4.97314 19V21"
          stroke={color}
          className={classes.iconTransition}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.9731 11C15.1823 11 16.9731 9.20914 16.9731 7C16.9731 4.79086 15.1823 3 12.9731 3C10.764 3 8.97314 4.79086 8.97314 7C8.97314 9.20914 10.764 11 12.9731 11Z"
          stroke={color}
          className={classes.iconTransition}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
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
      transition: 'color 0.3s, stroke 0.3s',
    },
  }
})
