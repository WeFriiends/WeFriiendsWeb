import React from 'react'
import { Box, Typography, Button, Modal, Icon } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
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
    <Modal
      className={classes.modal}
      open={true}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={classes.wrapper}>
        <IconButton
          disableRipple={true}
          disableFocusRipple={true}
          aria-label="close modal"
          className={classes.closeButton}
          onClick={handleGoBack}
        >
          <Icon>
            <img src="/img/icon-close-modal.svg" alt="Close" />
          </Icon>
        </IconButton>
        <Box className={classes.reportContainer}>
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
              Select the reason for the complaint – we will definitely take
              action
            </Typography>
          </Box>
          <Box className={classes.shadowBox}>
            <Link
              to="report/reportComment/Spam"
              style={{ textDecoration: 'none' }}
            >
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
      </Box>
    </Modal>
  )
}

export default Report

const useStyles = makeStyles()(() => {
  return {
    closeButton: {
      height: 24,
      width: 24,
      padding: 0,
      position: 'absolute',
      transition: '0.3s',
      right: 15,
      top: 15,
      minWidth: 0,
      '&: hover': {
        transform: 'scale(105%)',
        cursor: 'pointer',
      },
    },
    modal: {
      height: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& :focus': {
        outline: 'none',
      },
    },
    wrapper: {
      position: 'relative',
      width: 390,
      height: 606,
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: '10px',
    },
    reportContainer: {
      padding: 15,
      display: 'grid',
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
  }
})
