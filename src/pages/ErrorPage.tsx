import React from 'react'
import { Box } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import theme from '../styles/createTheme'
import { commonStyles } from '../styles/commonStyles'
import Error400 from '../components/errorContent/Error400'
import Error500 from '../components/errorContent/Error500'
import Error from '../components/errorContent/Error'

type ErrorPageProps = {
  code?: number
}
const ErrorPage: React.FC<ErrorPageProps> = ({ code }) => {
  const commonClasses = commonStyles().classes
  const { classes } = useStyles()

  return (
    <Box
      className={`${commonClasses.centeredContainer} ${classes.textWrapper}`}
    >
      {code === 400 && <Error400 />}
      {code === 500 && <Error500 />}
      {code === undefined && <Error />}
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
