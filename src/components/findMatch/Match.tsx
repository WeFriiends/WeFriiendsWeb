import {
  Box,
  Avatar,
  Typography,
  Button,
  Modal,
  IconButton,
} from '@mui/material'
import IconCloseModal from '../../common/IconCloseModal'
import { makeStyles } from 'tss-react/mui'
import { useState } from 'react'
import IconChat from '../../common/IconChat'
import theme from '../../styles/createTheme'

const Match = () => {
  const [open, setOpen] = useState(true)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const { classes } = useStyles()

  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.wrapper}>
          <IconButton
            disableRipple={true}
            disableFocusRipple={true}
            aria-label="close modal"
            className={classes.closeButton}
            onClick={handleClose}
          >
            <IconCloseModal />
          </IconButton>
          <Box className={classes.matchContainer}>
            <Box className={classes.matchedAvatarsContainer}>
              <Avatar
                className={classes.matchedAvatar}
                src="/img/avatar_elena_musk.jpg"
              />
              <Avatar
                className={`${classes.matchedAvatar} ${classes.newMatchAvatar}`}
                src="/img/avatar_stacy.jpg"
              />
            </Box>
            <Box className={classes.info}>
              <Typography variant="h1" className={classes.title}>
                Wow! It’s a Match!
              </Typography>
              <Typography className={classes.subTitle}>
                Anna was waiting for it for
                <br />
                soooo looong...
                <br />
                Hurry up to say hello to her!
              </Typography>
            </Box>
            <Box className={classes.buttonsContainer}>
              <Button
                className={`${classes.button} ${classes.laterButton}`}
                onClick={handleClose}
                disableFocusRipple={true}
                disableRipple={true}
              >
                Later
              </Button>
              <Button
                className={`${classes.button} ${classes.chatButton}`}
                startIcon={<IconChat color={theme.palette.common.white} />}
                href="/messages"
                disableFocusRipple={true}
                disableRipple={true}
              >
                Chat
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  )
}

export default Match

const useStyles = makeStyles()((theme) => {
  return {
    closeButton: {
      height: 24,
      width: 24,
      padding: 0,
      position: 'absolute',
      transition: '0.3s',
      right: 25,
      top: 25,
      minWidth: 0,
      '&: hover': {
        transform: 'scale(105%)',
        cursor: 'pointer',
      },
    },
    modal: {
      height: '100vh',
      width: '100vw',
      backgroundColor: '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& :focus': {
        outline: 'none',
      },
    },
    wrapper: {
      position: 'relative',
      Width: 390,
      height: 606,
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    title: {
      fontFamily: 'Inter',
      fontSize: 28,
      fontWeight: 500,
      lineHeight: '20px',
      color: theme.palette.primary.main,
      textAlign: 'center',
    },
    subTitle: {
      height: 49,
      fontSize: 14,
      lineHeight: '20px',
      color: theme.palette.common.black,
      textAlign: 'center',
      fontWeight: 400,
    },
    matchContainer: {
      height: 350,
      padding: '15px 60px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: '#fff',
    },
    newMatchAvatar: {
      marginLeft: -15,
    },
    matchedAvatarsContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'end',
      justifyContent: 'space-around',
    },
    matchedAvatar: {
      width: 81,
      height: 81,
      border: '2px solid ' + theme.palette.common.white,
    },
    info: {
      height: 91,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    buttonsContainer: {
      width: 263,
      display: 'flex',
      justifyContent: 'space-between',
    },
    button: {
      borderRadius: 10,
      fontSize: 12,
      textTransform: 'none',
      fontWeight: 700,
      boxShadow: '0 0 7px 1px rgba(179, 179, 179, 0.14)',
    },
    laterButton: {
      width: 124,
      height: 38,
      color: theme.palette.primary.main,
      fontWeight: 500,
      textDecoration: 'none',
      display: 'block',
      textAlign: 'center',
      border: '1px solid ' + theme.palette.primary.main,
      '&:hover': {
        background: theme.palette.common.white,
      },
    },
    chatButton: {
      width: 124,
      height: 38,
      color: '#fff',
      backgroundColor: '#F46B5D',
      textDecoration: 'none',
      display: 'flex',
      '&:hover': {
        background: theme.palette.primary.main,
      },
    },
  }
})
