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
      <Typography variant="h2" className={classes.title}>
        Sorry!
        <br />
        There are no registered users in your area.
        <br />
        Try again later.
      </Typography>
      <Typography variant="h3" className={classes.subtitle}>
        You can invite someone to WeFriiends in order to help women find friends
        faster
      </Typography>
      <Box textAlign="center">
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
    title: {
      textAlign: 'center',
      paddingBottom: '80px',
      paddingTop: '50px',
      [theme.breakpoints.down('sm')]: {
        maxWidth: '290px',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    subtitle: {
      textAlign: 'center',
      paddingBottom: '35px',
      [theme.breakpoints.down('sm')]: {
        maxWidth: '290px',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    noticeButton: {
      height: '60px',
      width: '180px',
    },
  }
})
