import { Box, Avatar, Typography, Button } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import IconChat from '../../common/svg/IconChat'
import theme from '../../styles/createTheme'
import { CommonModal } from '../commonModal/CommonModal'

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
    <CommonModal
      isOpened={isMatchModalOpen}
      onClose={onClose}
      modalTitle={'modal-modal-title'}
      modalDescription={'modal-modal-description'}
    >
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
            disableFocusRipple={true}
            disableRipple={true}
          >
            Later
          </Button>
          <Button
            className={`${classes.button} ${classes.chatButton}`}
            startIcon={
              <IconChat
                color={theme.palette.common.white}
                width={22}
                height={22}
              />
            }
            disableFocusRipple
            disableRipple
            onClick={onChat}
          >
            Chat
          </Button>
        </Box>
      </Box>
    </CommonModal>
  )
}

export default Match

const useStyles = makeStyles()({
  title: {
    fontFamily: 'Inter',
    fontSize: 28,
    fontWeight: 500,
    lineHeight: '20px',
    color: theme.palette.primary.main,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 14,
    lineHeight: '20px',
    color: theme.palette.common.black,
    textAlign: 'center',
    fontWeight: 400,
  },
  matchContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: 40,
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 20,
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
})
