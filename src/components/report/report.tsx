import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import ClearIcon from '@mui/icons-material/Clear'
import IconButton from '@mui/material/IconButton'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'

const Report = () => {
  const { classes } = useStyles()
  const navigate = useNavigate()
  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <Box className={classes.mainBox}>
      <IconButton
        className={classes.iconButton}
        onClick={handleGoBack}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[600],
          borderRadius: '0',
          border: '1px solid #ccc',
        }}
      >
        <ClearIcon
          className={classes.closeIcon}
          sx={{
            position: 'absolute',
            width: 16,
            height: 16,
            stroke: (theme) => theme.palette.grey[600],
            strokeWidth: 1,
          }}
        />
      </IconButton>
      <img
        src={require('./Images/alert-circle.png')}
        alt="Alert circle"
        className={classes.imgAlert}
      />

      {/* <img
        src={'./components/Report/Images/alert-circle.png'}
        alt=""
        className={classes.imgAlert}
      /> */}
      <Box>
        <Typography variant="h1" className={classes.title}>
          Report
        </Typography>
        <Typography className={classes.content}>
          Select the reason for the complaint – we will definitely take action
        </Typography>
      </Box>
      <Box className={classes.shadowBox}>
        <Link to="/reportComment/Spam" style={{ textDecoration: 'none' }}>
          <Button fullWidth className={classes.linkBtn}>
            Spam
          </Button>
        </Link>
        <Link
          to="/reportComment/Report abuse"
          style={{ textDecoration: 'none' }}
        >
          <Button fullWidth className={classes.linkBtn}>
            Report abuse
          </Button>
        </Link>
        <Link
          to="/reportComment/Inappropriate photos"
          style={{ textDecoration: 'none' }}
        >
          <Button fullWidth className={classes.linkBtn}>
            Inappropriate photos
          </Button>
        </Link>
        <Link to="/reportComment/Other" style={{ textDecoration: 'none' }}>
          <Button fullWidth className={classes.linkBtn}>
            Other
          </Button>
        </Link>
      </Box>
    </Box>
  )
}

export default Report

const useStyles = makeStyles()((theme) => {
  return {
    // typography: {
    //   fontFamily: ['Inter', 'sans-serif'].join(','),
    // },
    mainBox: {
      display: 'grid',
      gridTemplateRows: '1fr 2fr 2fr 1fr',
      alignItems: 'center',
      marginLeft: 20,
      marginRight: 20,
      overflow: 'hidden',
      [theme.breakpoints.up('sm')]: {
        width: 400,
        margin: '0 auto',
      },
    },
    shadowBox: {
      borderRadius: 10,
      boxShadow: '0 0 7px 1px rgba(179, 179, 179, 0.14)',
      padding: '30px 20px',
      background: '#fff',
    },

    title: {
      fontSize: 24,
      fontWeight: 500,
      lineHeight: '40px',
      paddingTop: 10,
      paddingBottom: 14,
      color: '#F46B5D',
      textAlign: 'center',
    },
    content: {
      paddingBottom: 15,
      fontSize: 14,
      textAlign: 'center',
    },
    imgAlert: {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '25.833px',
      height: '25.833px',
      flexShrink: 0,
      strokeWidth: '2px',
      stroke: 'var(--red, #F1562A)',
    },

    linkBtn: {
      // textDecoration: 'none',
      // backgroundColor: '#FFFFFFD',
      display: 'block',
      borderRadius: 10,
      fontSize: 14,
      padding: '0 14px',
      '&:active, &:hover': {
        backgroundColor: '#FB8F67',
        transition: 'background-color 0.5s',
        color: '#fff',
      },
      flexShrink: 0,
      paddingTop: 18,
      paddingBottom: 18,
      background: '#FFF',
      boxShadow: '0px 0px 7px 1px rgba(179, 179, 179, 0.14)',
      textAlign: 'left',
      textTransform: 'none',
      color: '#000',
      marginBottom: 8,
    },
    iconButton: {
      width: '24px',
      height: '24px',
      flexShrink: 0,
      // right: '0',
      // position: 'absolute',
      // top: '20px',
      right: '20%',
      borderRadius: '0',
      border: '1px solid #ccc',
    },
    closeIcon: {
      fontSize: '16px',
    },
  }
})
