import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { commonStyles } from '../../styles/commonStyles'
import { makeStyles } from 'tss-react/mui'
import theme from '../../styles/createTheme'
import { Link } from 'react-router-dom'

const NoticeNoUsers = () => {
  const commonClasses = commonStyles().classes
  const { classes } = useStyles()

  return (
    <>
      <Box
        className={`${commonClasses.centeredContainer} ${classes.textWrapper}`}
      >
        <Typography variant="h2" className={classes.title}>
          Sorry!
          <br />
          There are no registered users in your area.
          <br />
          Try again later.
        </Typography>
        <Typography variant="h3" className={classes.subtitle}>
          You can invite someone to WeFriiends in order to help women find
          friends faster
        </Typography>
        <Button
          href="#invite"
          className={`${commonClasses.submitButton} ${classes.noticeButton}`}
          component={Link}
          to="/invite"
          disableElevation
          disableRipple
        >
          go!
        </Button>
      </Box>
    </>
  )
}

export default NoticeNoUsers

const useStyles = makeStyles()(() => {
  return {
    textWrapper: {
      textAlign: 'center',
      maxWidth: '290px',
      [theme.breakpoints.up('lg')]: {
        maxWidth: '530px',
      },
    },
    title: {
      paddingBottom: '80px',
      paddingTop: '50px',
    },
    subtitle: {
      paddingBottom: '30px',
    },
    noticeButton: {
      height: '60px',
      width: '180px',
      marginTop: 0, // should be 0 rather in common styles?
    },
  }
})
