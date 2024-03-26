import * as React from 'react'
import { Box, Typography, Avatar } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
// import messages from './messages.json'
import messages from './messagesEmpty.json'
import { UserMessage } from 'types/Message'
import NoNewMatches from './NoNewMatches'

const Messages = () => {
  const { classes } = useStyles()
  const userMessages: UserMessage[] = messages
  return (
    <>
      {userMessages.length == 0 ? (
        <NoNewMatches text="You don’t have any messages. You need to find friends first!" />
      ) : (
        <>
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
        </>
      )}
    </>
  )
}

export default Messages

const useStyles = makeStyles()(() => {
  return {
    messageBlock: {
      display: 'grid',
      gridTemplateColumns: '0.5fr 5fr 0.5fr',
      alignItems: 'center',
      paddingBottom: 30,
      paddingRight: 30,
    },
    message: {
      paddingLeft: 16,
      paddingRight: 31,
    },
    messageQuantity: {
      borderRadius: '50%',
      background: '#FB8F67',
      width: 35,
      height: 35,
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
    },
    line: {
      borderTop: '1px solid #EEE',
      paddingBottom: 30,
    },
  }
})
