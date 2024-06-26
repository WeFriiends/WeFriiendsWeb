import React from 'react'
import { Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import theme from '../../styles/createTheme'

const Error400 = () => {
  const { classes } = useStyles()

  return (
    <>
      <Typography variant="h1" className={classes.title}>
        Error
        <span className={classes.errorCode}>400</span>
      </Typography>
      <Typography variant="h3" className={classes.errorDescription}>
        Bad Request
      </Typography>
      <Typography variant="h3" className={classes.text1}>
        Your request could use a quick coffee break.
      </Typography>
      <img src="/img/error/error-400.svg" alt="Error 400 cartoon" />
      <Typography variant="h3" className={classes.text2}>
        Take a sip, make fixes, and resend!
      </Typography>
    </>
  )
}

export default Error400

const useStyles = makeStyles()(() => ({
  textWrapper: {
    textAlign: 'center',
    maxWidth: 274,
    [theme.breakpoints.up('lg')]: {
      maxWidth: 530,
    },
  },
  title: {
    lineHeight: 1,
    paddingTop: 150,
    paddingBottom: 0,
    color: theme.palette.primary.light,
  },
  errorCode: {
    fontSize: 60,
    display: 'block',
    color: theme.palette.primary.main,
    paddingTop: 10,
  },
  errorDescription: {
    lineHeight: '26px',
    margin: '10px 0 70px',
    color: theme.palette.primary.light,
  },
  text1: {
    marginBottom: 15,
  },
  text2: {
    marginTop: 15,
  },
}))
