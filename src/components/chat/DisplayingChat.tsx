import { Box } from '@mui/material'

const DisplayingChat = (data: any) => {
  return (
    <Box>
      {data.data.map((element: any) => (
        <Box key={element.chat_id}>
          {element.messages.map((message: any) => (
            <Box key={message.message_id}> {message.message}</Box>
          ))}
        </Box>
      ))}
    </Box>
  )
}

export default DisplayingChat
