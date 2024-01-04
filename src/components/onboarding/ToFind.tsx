import React from 'react'
import { Box, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
//import { Link } from 'react-router-dom'
import IconButton from '@mui/material/IconButton'
import { useNavigate } from 'react-router'
import Logo from 'components/logo/Logo'
import DotsMobileStepper from './DotsMobileStepper'

// interface ToFindProps {
//   onNext: () => void
// }

// const ToFind: React.FC<ToFindProps> = ({ onNext }) => {
const ToFind = () => {
  // ({ onNext }: { onNext: () => void }) => {
  //const slides = [1, 2, 3, 4]
  const { classes } = useStyles()
  const navigate = useNavigate()
  const handleGoBack = () => {
    navigate(-1)
  }
  //const navigate = useNavigate()
  // const handleNext = () => {
  //   navigate('/ToVisit')
  // }
  // const handleSkip = () => {
  //   navigate('/FindFriends')
  //   // Ваш код для обработки нажатия на кнопку Skip
  // }
  return (
    <Box className={classes.mainBox}>
      <Box>
        <Logo />
        <IconButton className={classes.iconButton} onClick={handleGoBack}>
          <img src={require('./Images/back.png')} alt="back" />
        </IconButton>
        <img
          src={require('./Images/find-friends.png')}
          alt="find-friends"
          className={classes.img}
          //className={classes.checkImg}
          // style={{ width: '20px', height: '20px', marginLeft: '10px' }}
        />
        <Typography className={classes.content}>
          find a friends in new city
        </Typography>
      </Box>
      {/* <Button
        component={Link}
        to="/ToWalkWith"
        // fullWidth
        variant="contained"
        color="primary"
        className={classes.linkBtn}
      >
        Next
      </Button> */}
      <Box>
        <DotsMobileStepper
        // steps={4}
        //slides={slides}
        // onNext={handleNext}
        // onSkip={handleSkip}
        />
        {/* <Button
          component={Link}
          to="/FindFriends"
          // fullWidth
          variant="contained"
          color="primary"
          className={classes.linkBtn}
        >
          <img
            src={require('./Images/arrow_back.png')}
            alt="check"
            //className={classes.checkImg}
            // style={{ width: '20px', height: '20px', marginLeft: '10px' }}
          />
        </Button>
        <Button
          // fullWidth
          variant="contained"
          color="primary"
          className={classes.linkBtn}
        >
          Next
        </Button>
        <FotoCarousel /> */}
        {/* <ProgressLineWithCells /> */}
      </Box>
    </Box>
  )
}

export default ToFind

const useStyles = makeStyles()((theme) => {
  return {
    // body: {
    //   overflow: 'hidden',
    // },
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
    iconButton: {
      position: 'relative',
      width: '45px',
      height: '45px',
      top: '-145px',
      left: '173px',
    },
    img: {
      position: 'relative',
      // width: '272.9px',
      // height: '354px',
      top: '165px',
      left: '59px',
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
    },

    linkBtn: {
      padding: '18px 24px',
      borderRadius: '10px',

      backgroundColor: '#fff',
      color: '#333333',
      '&:active, &:hover': {
        backgroundColor: '#FB8F67',
        transition: 'background-color 0.5s',
        color: '#fff',
      },
    },
  }
})
