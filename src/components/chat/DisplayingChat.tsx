import { Box, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import theme from './../../styles/createTheme'
import { Chat, Message } from 'types/Chat'

const DisplayingChat = ({ data, userId }: { data: Chat; userId: string }) => {
  const { classes } = useStyles()

  return (
    <Box className={classes.messagesArea}>
      {data.messages.map((message: Message) => (
        <Box
          key={message.message_id}
          sx={{
            alignSelf: message.sender_id === userId ? 'flex-end' : 'flex-start',
            backgroundColor:
              message.sender_id === userId ? '#FEDED2' : '#EEEEEE',
          }}
          className={classes.message}
        >
          <Typography className={classes.messageText}>
            {message.message}
          </Typography>
          <Typography
            className={classes.messageDate}
            sx={{
              textAlign: message.sender_id === userId ? 'right' : 'left',
            }}
          >
            {new Date(message.timestamp).toLocaleString([], {
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })}
          </Typography>
        </Box>
      ))}
    </Box>
  )
}

export default DisplayingChat

const useStyles = makeStyles()({
  messagesArea: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginTop: 31,
    padding: '13px 22px 12px',
    maxHeight: 'calc(100vh - 378px)',
    overflow: 'auto',
  },
  message: {
    maxWidth: '85%',
    padding: '10px',
    borderRadius: '10px',
  },
  messageText: {
    fontSize: '14px',
    lineHeight: '18.2px',
    color: theme.palette.text.primary,
  },
  messageDate: {
    fontSize: '12px',
    lineHeight: '15.6px',
    color: theme.palette.text.primary,
    marginTop: 5,
  },
})
