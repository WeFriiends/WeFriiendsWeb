import { Box } from '@mui/material'
import ChatComponent from './ChatComponent'
import React from 'react'
import ChatComponentStyled from './ChatComponentStyled'

const ChatExamplePage = () => {
  return (
    <>
      <Box
        sx={{
          m: 5,
          display: 'grid',
          gridTemplateColumns: '575px 575px',
          gap: 50,
        }}
      >
        <ChatComponentStyled roomId="room2" userName="Olga Zavizionnaya" />
        <ChatComponentStyled roomId="room2" userName="Svitlana Golubieva" />
      </Box>

      <hr />
      <ChatComponent roomId="room1" userName="Natalia Doudkina" />
      <ChatComponent roomId="room1" userName="Kateryna Shvets" />
    </>
  )
}

export default ChatExamplePage
