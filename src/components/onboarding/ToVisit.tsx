import React from 'react'
import { Box, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
//import { Link, useParams } from 'react-router-dom'

//import { Link } from 'react-router-dom'
// import ClearIcon from '@mui/icons-material/Clear'
// import IconButton from '@mui/material/IconButton'
//import { useHistory } from 'react-router-dom'
//import { useNavigate } from 'react-router'
import Logo from 'components/logo/Logo'
import DotsMobileStepper from './DotsMobileStepper'

const ToVisit = () => {
  const { classes } = useStyles()
  //const { step } = useParams()
  //const navigate = useNavigate()
  // const handleNext = () => {
  //   navigate('/ToVisit')
  // }
  // const handleSkip = () => {
  //   navigate('/FindFriends')

  return (
    <Box className={classes.mainBox}>
      <Box>
        <Logo />

        <img
          src={require('./Images/yoga.png')}
          alt="yoga"
          className={classes.img}
          // style={{ width: '20px', height: '20px', marginLeft: '10px' }}
        />
        <Typography className={classes.content}>
          find a friend <br />
          to visit yoga studio
        </Typography>
      </Box>
      {/* <Button
        component={Link}
        to="/ToFind"
        // fullWidth
        variant="contained"
        color="primary"
        className={classes.linkBtn}
      >
        Next
      </Button> */}
      {/* <DotsMobileStepper
      // sx={{
      //   backgroundColor: classes.dotsMobileStepper.backgroundColor,
      // }}
      // style={{ right: '20px', textTransform: 'none', color: '#444444' }}
      //style={{ backgroundColor: '#FFF1EC' }} // Применяем фоновый цвет из mainBox
      //sx={{ backgroundColor: '#FFF1EC' }}
      //steps={4}
      //slides={slides}
      // onNext={handleNext}
      // onSkip={handleSkip}
      //onNext={handleNext}
      /> */}
      {/* <MySlider slides={slides} /> */}
      {/* </Box> */}
    </Box>
  )
}

export default ToVisit

const useStyles = makeStyles()((theme) => {
  return {
    body: {
      backgroundColor: '#FFF1EC',
      margin: 0,
    },

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
    content: {
      position: 'relative',
      fontFamily: 'Inter',
      fontSize: '26px',
      fontWeight: 500,
      lineHeight: '39px',
      //letterSpacing: '0em',
      textAlign: 'center',
      width: '267px',
      height: '325px',
      top: '200px',
      left: '62px',
      //paddingTop: 100,
    },
    img: {
      position: 'relative',
      // width: '272.9px',
      // height: '354px',
      top: '165px',
      left: '59px',
    },
  }
})
