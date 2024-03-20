import React from 'react'
import { Box } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import theme from '../styles/createTheme'
import { commonStyles } from '../styles/commonStyles'
import ErrorMessage from '../components/errorMessage/errorMessage'

type ErrorPageProps = {
  code?: number
}
const ErrorPage: React.FC<ErrorPageProps> = ({ code }) => {
  const commonClasses = commonStyles().classes
  const { classes } = useStyles()

  const errorTexts = {
    backendError: {
      errorHeading: 'Error',
      errorCode: 500,
      errorDescription: 'Internal Server Error',
      errorImgPath: '/img/error/error-500.svg',
      errorImgAlt: 'Error 500 cartoon',
      errorText1: 'It seems like something went wrong',
      errorText2: (
        <>
          Sorry about that. <br />
          We&apos;re trying our best to fix it!
        </>
      ),
    },
    frontendError: {
      errorHeading: 'Error',
      errorCode: 400,
      errorDescription: 'Bad Request',
      errorImgPath: '/img/error/error-400.svg',
      errorImgAlt: 'Error 400 cartoon',
      errorText1: 'Your request could use a quick coffee break.',
      errorText2: <>Take a sip, make fixes, and resend!</>,
    },
    commonError: {
      errorHeading: 'Error',
      errorDescription: 'Unable to access the network',
      errorImgPath: '/img/error/error.svg',
      errorImgAlt: 'Error cartoon',
      errorText1: 'Please, check internet connection',
    },
  }

  return (
    <Box
      className={`${commonClasses.centeredContainer} ${classes.textWrapper}`}
    >
      {code === 400 && <ErrorMessage {...errorTexts.frontendError} />}
      {code === 500 && <ErrorMessage {...errorTexts.backendError} />}
      {code === undefined && <ErrorMessage {...errorTexts.commonError} />}
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
}))
