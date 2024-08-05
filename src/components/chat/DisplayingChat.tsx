import { Box, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import theme from './../../styles/createTheme'

const DisplayingChat = (data: any) => {
  const { classes } = useStyles()
  return (
    <Box>
      {data.data.map((element: any) => (
        <Box key={element.chat_id} className={classes.messagesArea}>
          {element.messages.map((message: any) => (
            <Box
              key={message.message_id}
              sx={{
                alignSelf:
                  message.sender_id === element.user_id
                    ? 'flex-end'
                    : 'flex-start',
                backgroundColor:
                  message.sender_id === element.user_id ? '#FEDED2' : '#EEEEEE',
              }}
              className={classes.message}
            >
              <Typography className={classes.messageText}>
                {message.message}
              </Typography>
              <Typography
                className={classes.messageDate}
                sx={{
                  textAlign:
                    message.sender_id === element.user_id ? 'right' : 'left',
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
    marginTop: 44,
    padding: '0 0 12px 22px',
    maxHeight: '60vh',
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
