import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import Logo from 'components/logo/Logo'
import { Link } from 'react-router-dom'

const StartOnboarding = () => {
  const { classes } = useStyles()

  return (
    <Box className={classes.mainBox}>
      <Box>
        <Logo />

        <Typography className={classes.content}>
          Hello, dear! Let us help you to find new friends here!
        </Typography>
      </Box>
      <Box>
        {/* className={classes.groupBtn} */}
        {/* <Link to="/FindFriends"> */}
        <Button
          component={Link}
          to="/FindFriends"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.linkBtn}
        >
          start
        </Button>
        {/* </Link> */}
      </Box>
    </Box>
  )
}

export default StartOnboarding

const useStyles = makeStyles()((theme) => {
  return {
    mainBox: {
      display: 'grid',
      gridTemplateRows: '2fr 2fr 2fr 1fr',

      alignItems: 'center',
      marginLeft: 20,
      marginRight: 20,
      overflow: 'hidden',
      position: 'relative',
      [theme.breakpoints.up('sm')]: {
        width: 400,
        margin: '0 auto',
      },
    },

    title: {
      fontSize: 24,
      fontWeight: 500,
      lineHeight: '40px',
      paddingTop: 70,
      paddingBottom: 14,
      color: '#F46B5D',
      textAlign: 'center',
    },
    content: {
      fontFamily: 'Inter',
      fontSize: '40px',
      fontWeight: 500,
      lineHeight: '60px',
      letterSpacing: '0em',
      textAlign: 'center',
      paddingTop: 100,
    },

    linkBtn: {
      //width: '260px',
      height: '60px',
      padding: '18px 24px', // top right bottom left
      borderRadius: '10px',
      gap: '16px',
      backgroundColor: '#FB8F67',
      color: '#fff',
      '&:active, &:hover': {
        backgroundColor: '#FB8F67',
        transition: 'background-color 0.5s',
      },
    },
  }
})
