import React from 'react'
import { Box, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import IconButton from '@mui/material/IconButton'
import { useNavigate } from 'react-router-dom'
import Logo from 'components/logo/Logo'
import DotsMobileStepper from './DotsMobileStepper'

const ToWalkWith = () => {
  const { classes } = useStyles()
  const navigate = useNavigate()
  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <Box className={classes.mainBox}>
      <Box>
        <Logo />
        <IconButton className={classes.iconButton} onClick={handleGoBack}>
          <img src="/img/back.svg" alt="back" />
        </IconButton>
        <img src="/img/person.svg" alt="person" className={classes.img} />
        <Typography className={classes.content}>
          find a perfect <br />
          person to walk with
        </Typography>
      </Box>

      <DotsMobileStepper
        //basePath="/ToWalk"
        basePath="/ToLearn"
        pageCount={5}
        page={3}
      />
    </Box>
  )
}

export default ToWalkWith

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
      // width: '260px',
      // height: '60px',
      // position: 'absolute',
      // top: '612px',
      // left: '65px',
      padding: '18px 24px', // top right bottom left
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
