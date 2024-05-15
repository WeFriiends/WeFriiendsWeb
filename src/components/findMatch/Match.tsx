import {
  Box,
  Avatar,
  Typography,
  Button,
  Modal,
  IconButton,
} from '@mui/material'
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation'
import { makeStyles } from 'tss-react/mui'

interface MatchProps {
  onClose: () => void
  onChat: () => void
  friendsAvatar: string
  isMatchModalOpen: boolean
}

const Match: React.FC<MatchProps> = ({
  onClose,
  onChat,
  friendsAvatar,
  isMatchModalOpen,
}) => {
  const { classes } = useStyles()

  return (
    <>
      <Modal
        className={classes.modal}
        open={isMatchModalOpen}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.wrapper}>
          <IconButton
            aria-label="close modal"
            className={classes.closeButton}
            onClick={onClose}
          >
            <CancelPresentationIcon />
          </IconButton>
          <Box className={classes.matchContainer}>
            <Box className={classes.matchedAvatarsContainer}>
              <Avatar
                className={classes.matchedAvatar}
                src="/img/avatar_elena_musk.jpg"
              />
              <Avatar
                className={`${classes.matchedAvatar} ${classes.newMatchAvatar}`}
                src={friendsAvatar}
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
                onClick={onClose}
              >
                Later
              </Button>
              <Button
                className={`${classes.button} ${classes.chatButton}`}
                startIcon={<img alt="fb" src={'/img/chatIcon.png'} />}
                onClick={onChat}
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

const useStyles = makeStyles()(() => {
  return {
    closeButton: {
      height: 24,
      width: 24,
      position: 'absolute',
      transition: '0.5s',
      right: 23,
      top: 23,
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
      color: '#FB8F67',
      textAlign: 'center',
    },
    subTitle: {
      height: 49,
      fontSize: 14,
      lineHeight: '20px',
      color: '#000000',
      textAlign: 'center',
      fontWeight: 500,
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
      border: '1px solid #F1562A',
      borderRadius: 10,
      fontFamily: 'Inter',
      fontSize: 12,
      textTransform: 'none',
    },
    laterButton: {
      width: 124,
      height: 38,
      color: '#F1562A',
      fontWeight: 500,
      textDecoration: 'none',
      display: 'block',
      textAlign: 'center',
    },
    chatButton: {
      width: 124,
      height: 38,
      color: '#fff',
      backgroundColor: '#F46B5D',
      textDecoration: 'none',
      display: 'flex',
      '&: hover': {
        backgroundColor: '#FB8F67',
      },
    },
  }
})
