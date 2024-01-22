import React from 'react'
import { Box, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import Logo from 'components/logo/Logo'
import DotsMobileStepper from './DotsMobileStepper'

const ToVisit = () => {
  const { classes } = useStyles()

  return (
    <Box className={classes.mainBox}>
      <Box>
        <Logo />

        <img src="/img/yoga.svg" alt="yoga" className={classes.img} />
        <Typography className={classes.content}>
          find a friend <br />
          to visit yoga studio
        </Typography>
      </Box>

      <DotsMobileStepper
        //  basePath="/ToVisit"
        basePath="/ToFind"
        pageCount={5}
        page={1}
      />
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
