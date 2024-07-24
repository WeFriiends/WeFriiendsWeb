import { useState } from 'react'
import {
  Box,
  Typography,
  Button,
  TextareaAutosize,
  Avatar,
} from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import Messages from 'components/tabsMessagesFriends/Messages'
import theme from './../styles/createTheme'
import ChatMenu from 'components/chat/ChatMenu'
import { UserChatProfile } from 'types/UserProfileData'

const MessagesPage = () => {
  const { classes } = useStyles()
  const [selectedChat, setSelectedChat] = useState<UserChatProfile | null>(null)

  const handleClick = (user: UserChatProfile) => {
    setSelectedChat(user)
  }
  return (
    <Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '389px 575px',
        }}
      >
        <Messages onClick={handleClick} />
        <Box>
          {selectedChat && (
            <Box className={classes.header}>
              <Box className={classes.userInHeader}>
                <Avatar
                  src={selectedChat.avatar}
                  sx={{ width: 50, height: 50 }}
                />
                <Typography
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                    fontSize: 20,
                  }}
                >
                  {selectedChat.firstName} {selectedChat.lastName},{' '}
                  {selectedChat.age}
                </Typography>
              </Box>

              <ChatMenu />
            </Box>
          )}
          <Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                paddingTop: '44px',
              }}
            >
              <Typography className={classes.startChattingText}>
                Connect with others by sharing your thoughts or experiences.
              </Typography>
              <Typography className={classes.startChattingText}>
                Start chatting now!
              </Typography>
            </Box>
            <Box className={classes.iconsSection}>
              <img src="/img/messages/friendly.svg" alt="friendly" />
              <img src="/img/messages/hospitable.svg" alt="hospitable" />
              <img src="/img/messages/happy.svg" alt="happy" />
              <img src="/img/messages/love.svg" alt="love" />
            </Box>
          </Box>
          <Box className={classes.sendMessageSection}>
            <TextareaAutosize
              placeholder="Type a message"
              className={classes.textArea}
            />
            <img src="/img/messages/lol.svg" alt="lol" />
            <Button className={classes.sendBtn} variant="outlined">
              Send
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default MessagesPage

const useStyles = makeStyles()({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: -78,
    paddingLeft: 22,
  },
  userInHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: 15,
  },
  startChattingText: {
    maxWidth: '315px',
    margin: '0 auto',
    color: theme.palette.primary.light,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 600,
    lineHeight: '22px',
  },
  iconsSection: {
    display: 'flex',
    gap: 16,
    justifyContent: 'center',
    paddingTop: 35,
  },
  sendMessageSection: {
    display: 'flex',
    gap: 20,
    position: 'fixed',
    bottom: 0,
    padding: '0 0 40px 15px',
    alignItems: 'end',
  },
  textArea: {
    width: 328,
    backgroundColor: ' #EEEEEE',
    fontFamily: 'Inter',
    fontSize: 14,
    lineHeight: 1.3,
    fontWeight: 400,
    padding: '15px 18px',
    border: 'none',
    borderRadius: 10,
    outline: 'none',
  },
  sendBtn: {
    border: '2px solid  #F1562A',
    borderRadius: 10,
    padding: '6px 40.5px',
    textTransform: 'lowercase',
    fontSize: 16,
    lineHeight: 1.5,
    fontWeight: 600,
  },
})
