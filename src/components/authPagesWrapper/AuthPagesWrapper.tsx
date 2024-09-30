import { Box } from '@mui/material'
import Logo from '../logo/Logo'
import { makeStyles } from 'tss-react/mui'
import theme from '../../styles/createTheme'
import React, { ReactNode } from 'react'

type AuthPagesWrapperProps = {
  children: ReactNode
}

const AuthPagesWrapper: React.FC<AuthPagesWrapperProps> = ({ children }) => {
  const { classes } = useStyles()
  return (
    <Box className={classes.authWrapper}>
      <Box className={classes.authContent}>
        <Logo />
        {children}
      </Box>
    </Box>
  )
}
export default AuthPagesWrapper

const useStyles = makeStyles()({
  authWrapper: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  authContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 20px',
    padding: '50px 0',
    [theme.breakpoints.up(390)]: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 350,
      margin: '0 auto',
      maxHeight: '100%',
      minHeight: 650,
    },
    '@media (max-height: 750px)': {
      position: 'static',
      transform: 'none',
    },
  },
})
