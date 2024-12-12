import React from 'react'
import FirestoreChat from './firestoreChat/FirestoreChat'
import FirestoreChatStyled from './firestoreChat/FirestoreChatStyled'
import { Box } from '@mui/material'

const FirestoreChatExamplePage = () => {
  return (
    <>
      <Box
        sx={{
          margin: 5,
          display: 'grid',
          gridTemplateColumns: '575px 575px',
          gap: 50,
        }}
      >
        <FirestoreChat userName="Marina" roomId="room1" />
        <FirestoreChat userName="Svitlana" roomId="room1" />
      </Box>
      <hr />
      <Box
        sx={{
          m: 5,
          display: 'grid',
          gridTemplateColumns: '575px 575px',
          gap: 50,
        }}
      >
        <FirestoreChatStyled userName="Olga" roomId="room2" />
        <FirestoreChatStyled userName="Marina" roomId="room2" />
      </Box>
    </>
  )
}

export default FirestoreChatExamplePage
