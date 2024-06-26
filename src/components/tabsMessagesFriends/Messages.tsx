import * as React from 'react'
import { Box, Typography, Avatar } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import messages from './messages.json'
// import messages from './messagesEmpty.json'
import { UserMessage } from 'types/Message'
import NoNewMatches from './NoNewMatchesOrMessages'

const Messages = () => {
  const { classes } = useStyles()
  const userMessages: UserMessage[] = messages

  if (userMessages.length == 0) {
    return (
      <NoNewMatches text="You don’t have any messages. You need to find friends first!" />
    )
  }
  return (
    <Box sx={{ maxHeight: 'calc(100vh - 233px)', overflow: 'auto' }}>
      {userMessages.map((element) => (
        <Box key={element.id}>
          <Box className={classes.messageBlock}>
            <Avatar
              src={element.avatar}
              sx={{ width: 66, height: 66 }}
            ></Avatar>
            <Box className={classes.message}>
              <Typography className={classes.name}>
                {element.firstName} {element.lastName}, {element.age}
              </Typography>
              <Typography className={classes.textMessage}>
                {element.message}
              </Typography>
            </Box>
            {element.messageCount === '0' ? null : (
              <Box className={classes.messageQuantity}>
                {element.messageCount}
              </Box>
            )}
          </Box>
          <Box className={classes.line}></Box>
        </Box>
      ))}
    </Box>
  )
}

export default Messages

const useStyles = makeStyles()(() => {
  return {
    messageBlock: {
      display: 'grid',
      gridTemplateColumns: '0.5fr 5fr 0.5fr',
      alignItems: 'center',
      paddingBottom: 26,
      paddingRight: 20,
    },
    message: {
      paddingLeft: 15,
      paddingRight: 19,
    },
    messageQuantity: {
      borderRadius: '50%',
      background: '#FB8F67',
      width: 30,
      height: 30,
      color: '#FFFFFF',
      fontSize: 16,
      lineHeight: '22px',
      fontWeight: 600,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    name: {
      fontSize: 20,
      fontWeight: 600,
      lineHeight: '40px',
    },
    textMessage: {
      fontSize: 14,
      lineHeight: '22px',
      width: 220,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    line: {
      borderTop: '1px solid #EEE',
      paddingBottom: 30,
    },
  }
})
