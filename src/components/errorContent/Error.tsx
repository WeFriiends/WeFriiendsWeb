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
      </Typography>
      <Typography variant="h3" className={classes.errorDescriptionNoCode}>
        Unable to access the network
      </Typography>
      <Typography variant="h3" className={classes.text1}>
        Please, check internet connection
      </Typography>
      <img src="/img/error/error.svg" alt="Error cartoon" />
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
  errorDescriptionNoCode: {
    fontSize: 24,
    lineHeight: '30px',
    color: theme.palette.primary.light,
    margin: '46px 0 70px',
  },
  text1: {
    marginBottom: 15,
  },
  text2: {
    marginTop: 15,
  },
}))
