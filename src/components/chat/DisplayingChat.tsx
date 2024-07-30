import { Box, Typography } from '@mui/material'

const DisplayingChat = (data: any) => {
  return (
    <Box>
      {data.data.map((element: any) => (
        <Box key={element.chat_id}>
          {element.messages.map((message: any) => (
            <Box key={message.message_id}>
              <Typography>{message.timestamp} </Typography>
              <Typography> {message.message}</Typography>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  )
}

export default DisplayingChat
