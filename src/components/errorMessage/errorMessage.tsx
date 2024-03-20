import React from 'react'
import { Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import theme from '../../styles/createTheme'

type ErrorMessageProps = {
  errorHeading: string
  errorCode?: number
  errorDescription: string
  errorImgPath: string
  errorImgAlt: string
  errorText1: string
  errorText2?: React.ReactNode
}
const ErrorMessage: React.FC<ErrorMessageProps> = ({
  errorHeading,
  errorCode,
  errorDescription,
  errorImgPath,
  errorImgAlt,
  errorText1,
  errorText2,
}) => {
  const { classes } = useStyles()

  return (
    <>
      <Typography variant="h1" className={classes.title}>
        {errorHeading}
        <span className={classes.errorCode}>{errorCode}</span>
      </Typography>
      <Typography
        variant="h3"
        className={
          errorCode ? classes.errorDescription : classes.errorDescriptionNoCode
        }
      >
        {errorDescription}
      </Typography>
      <Typography variant="h3" className={classes.text1}>
        {errorText1}
      </Typography>
      <img src={errorImgPath} alt={errorImgAlt} />
      {errorText2 && (
        <Typography variant="h3" className={classes.text2}>
          {errorText2}
        </Typography>
      )}
    </>
  )
}

export default ErrorMessage

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
