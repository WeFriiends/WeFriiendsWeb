import React, { FC } from 'react'
import { Typography, Box } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import theme from '../../styles/createTheme'
import { commonStyles } from '../../styles/commonStyles'

type ErrorPageProps = {
  code?: number
}
const ErrorPage: FC<ErrorPageProps> = ({ code }) => {
  const commonClasses = commonStyles().classes
  const { classes } = useStyles()

  return (
    <Box
      className={`${commonClasses.centeredContainer} ${classes.textWrapper}`}
    >
      {code === 500 && (
        <>
          <Typography variant="h1" className={classes.title}>
            Error
            <span className={classes.errorCode}>500</span>
          </Typography>
          <Typography variant="h3" className={classes.errorDescription}>
            Internal Server Error
          </Typography>
          <Typography variant="h3" className={classes.text1}>
            It seems like something went wrong
          </Typography>
          <img src="/img/error/error-500.svg" alt="Error 500 cartoon" />
          <Typography variant="h3" className={classes.text2}>
            Sorry about that.
            <br />
            We&apos;re trying our best to fix it!
          </Typography>
        </>
      )}
      {code === 400 && (
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
      )}
      {code === undefined && (
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
      )}
    </Box>
  )
}

export default ErrorPage

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
