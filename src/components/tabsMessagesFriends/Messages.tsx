import * as React from 'react'
import { Box, Typography, Avatar } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import messages from './messages.json'

const Messages = () => {
  const { classes } = useStyles()
  return (
    <>
      {messages.map((element) => (
        <>
          <Box className={classes.messageBlock} key={element.id}>
            <Avatar
              src={element.avatar}
              sx={{ width: 66, height: 66 }}
            ></Avatar>
            <Box className={classes.message}>
              <Typography className={classes.name}>
                {element.name} {element.lastname}, {element.age}
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
        </>
      ))}
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
