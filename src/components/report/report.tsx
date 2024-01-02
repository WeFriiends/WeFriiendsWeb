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
      <IconButton className={classes.iconButton} onClick={handleGoBack}>
        <ClearIcon className={classes.closeIcon} />
      </IconButton>
      <img
        src="/img/report/alert-circle.png"
        alt="Alert circle"
        className={classes.imgAlert}
      />

      <Box>
        <Typography variant="h1" className={classes.title}>
          Report
        </Typography>
        <Typography className={classes.content}>
          Select the reason for the complaint – we will definitely take action
        </Typography>
      </Box>
      <Box className={classes.shadowBox}>
        <Link to="report/reportComment/Spam" style={{ textDecoration: 'none' }}>
          <Button fullWidth className={classes.linkBtn}>
            Spam
          </Button>
        </Link>
        <Link
          to="report/reportComment/Report abuse"
          style={{ textDecoration: 'none' }}
        >
          <Button fullWidth className={classes.linkBtn}>
            Report abuse
          </Button>
        </Link>
        <Link
          to="report/reportComment/Inappropriate photos"
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
    // body: {
    //   overflow: 'hidden',
    // },
    mainBox: {
      display: 'grid',
      //gridTemplateRows: '1fr 2fr 2fr 1fr',
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
    shadowBox: {
      borderRadius: 10,
      boxShadow: '0 0 7px 1px rgba(179, 179, 179, 0.14)',
      padding: '20px ',
      background: '#fff',
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
      paddingBottom: 15,
      fontSize: 14,
      textAlign: 'center',
    },
    imgAlert: {
      display: 'block',
      marginTop: '80px',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '31px',
      height: '31px',
      flexShrink: 0,
      strokeWidth: '2px',
      stroke: 'var(--red, #F1562A)',
    },

    linkBtn: {
      display: 'block',
      borderRadius: 10,
      fontSize: 14,
      height: '50px',
      padding: '0 14px',
      '&:active, &:hover': {
        backgroundColor: '#FB8F67',
        transition: 'background-color 0.5s',
        color: '#fff',
      },
      flexShrink: 0,
      paddingTop: 10,
      paddingBottom: 10,
      background: '#FFF',
      boxShadow: '0px 0px 7px 1px rgba(179, 179, 179, 0.14)',
      textAlign: 'left',
      textTransform: 'none',
      color: '#000',
      marginBottom: 5,
    },
    iconButton: {
      width: '24px',
      height: '24px',
      flexShrink: 0,
      position: 'absolute',
      top: '30px',
      right: '0',
      borderRadius: '0',
      border: '1px solid #ccc',
    },
    closeIcon: {
      fontSize: '16px',
    },
  }
})
