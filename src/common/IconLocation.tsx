import React from 'react'
import { makeStyles } from 'tss-react/mui'
import theme from '../styles/createTheme'

const IconLocation = () => {
  const { classes } = useStyles()

  return (
    <svg
      width="10"
      height="11"
      viewBox="0 0 10 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes.iconLocation}
    >
      <path
        d="M8.93806 4.88895C8.93806 7.86812 5.1077 10.4217 5.1077 10.4217C5.1077 10.4217 1.27734 7.86812 1.27734 4.88895C1.27734 3.87308 1.6809 2.89881 2.39923 2.18048C3.11756 1.46215 4.09183 1.05859 5.1077 1.05859C6.12357 1.05859 7.09784 1.46215 7.81617 2.18048C8.5345 2.89881 8.93806 3.87308 8.93806 4.88895Z"
        stroke={theme.palette.text.primary}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.10686 6.16295C5.81201 6.16295 6.38365 5.59131 6.38365 4.88616C6.38365 4.18101 5.81201 3.60938 5.10686 3.60938C4.40171 3.60938 3.83008 4.18101 3.83008 4.88616C3.83008 5.59131 4.40171 6.16295 5.10686 6.16295Z"
        stroke={theme.palette.text.primary}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export default IconLocation
const useStyles = makeStyles()(() => {
  return {
    iconLocation: {
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }
})
