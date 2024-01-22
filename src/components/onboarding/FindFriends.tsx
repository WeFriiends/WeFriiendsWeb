import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { Link } from 'react-router-dom'
import Logo from 'components/logo/Logo'

const FindFriends = () => {
  const { classes } = useStyles()
  // const navigate = useNavigate();

  return (
    <Box className={classes.mainBox}>
      <Typography variant="h1" className={classes.title}>
        This is
      </Typography>
      <Box>
        <Logo />

        <Typography variant="h2" className={classes.subtitle}>
          Here you can
        </Typography>
        <img
          src="/img/vector1.svg"
          alt="Vector 1"
          className={classes.vector1}
        />
        <Typography className={classes.content1}>
          look for friends in your local city
        </Typography>
        <img
          src="/img/vector2.svg"
          alt="Vector 2"
          className={classes.vector2}
        />
        <Typography className={classes.content2}>
          or all over the world
        </Typography>
        <img
          src="/img/vector3.svg"
          alt="Vector 3"
          className={classes.vector3}
        />
        <Typography className={classes.content3}>
          ready to relocate? great! find a friend in a city of relocation
        </Typography>
      </Box>
      {/* <Box> */}
      <Button
        component={Link}
        to="/StartOnboarding"
        style={{ left: '20px' }}
        // variant="contained"
        // color="primary"
        className={classes.root}
      >
        <img src="/img/arrow_back.svg" alt="Back Arrow" />
      </Button>
      <Button
        component={Link}
        to="/ToVisit"
        style={{ right: '20px', textTransform: 'none', color: '#444444' }}
        // variant="contained"
        // color="primary"
        className={classes.root}
        onClick={() => console.log('Button clicked')}
      >
        Next
      </Button>
    </Box>
  )
}

export default FindFriends

const useStyles = makeStyles()((theme) => {
  return {
    mainBox: {
      backgroundColor: '#FFF1EC',
      display: 'grid',
      gridTemplateRows: '0.5fr 2fr 0.5fr',
      width: '100vw',
      height: '100vh',
      alignItems: 'center',
      overflow: 'hidden',
      position: 'relative',
      margin: 0,
      [theme.breakpoints.up('sm')]: {
        width: 400,
        margin: '0 auto',
      },
    },
    title: {
      fontSize: '40px',
      fontWeight: 500,
      lineHeight: '60px',
      paddingTop: '73px',
      color: '#333333',
      textAlign: 'center',
    },
    subtitle: {
      fontWeight: 500,
      fontSize: '32px',
      lineHeight: '48px',
      textAlign: 'center',
      marginTop: '20px',
    },
    content1: {
      width: '254px',
      height: '74px',
      //top: '380px',
      left: '62px',
      fontFamily: 'Inter',
      fontSize: '26px',
      fontWeight: 500,
      lineHeight: '39px',
      marginTop: '46px',
      position: 'relative',
      zIndex: 1,
    },
    content2: {
      width: '250px',
      height: '34px',
      //top: '523px',
      left: '117px',
      fontFamily: 'Inter',
      fontSize: '26px',
      fontWeight: 500,
      lineHeight: '39px',
      marginTop: '64px',
      position: 'relative',
      zIndex: 5,
    },
    content3: {
      width: '305px',
      height: '108px',
      //top: '636px',
      left: '62px',
      fontFamily: 'Inter',
      fontSize: '26px',
      fontWeight: 500,
      lineHeight: '39px',
      marginTop: '73px',
      position: 'relative',
      zIndex: 5,
    },
    vector1: {
      width: '98.21px',
      height: '97.06px',
      position: 'absolute',
      top: '258.86px',
      left: '25px',
      transform: 'rotate(7.62deg)',
      marginTop: '60px',
      //zIndex: 1,
    },
    vector2: {
      width: '116px',
      height: '115px',
      position: 'absolute',
      top: '444px',
      left: '73px',
      transform: 'rotate(1.62deg)',
      //zIndex: 1,
    },
    vector3: {
      width: '122.64px',
      height: '121.21px',
      position: 'absolute',
      //top: '767.42px',
      left: '34px',
      marginTop: '73px',
      transform: 'rotate(359deg)',
    },
    root: {
      border: 'none',
      outline: 'none',
      width: '45px',
      height: '22px',
      position: 'absolute',
      bottom: '40px',
      // left: '320px',
    },
  }
})
