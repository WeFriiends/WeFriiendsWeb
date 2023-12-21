import React from 'react'
import { makeStyles } from 'tss-react/mui'

const Lightning = () => {
  const { classes } = useStyles()

  return (
    <img
      src="/img/whoLikesMe/who_liked_me_red.svg"
      alt="Lightning"
      className={classes.lightning}
    />
  )
}
export default Lightning
const useStyles = makeStyles()(() => {
  return {
    lightning: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '24px',
      height: '24px',
    },
  }
})
