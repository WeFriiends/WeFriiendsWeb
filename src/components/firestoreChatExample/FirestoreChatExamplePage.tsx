import React from 'react'
import FirestoreChat from './FirestoreChat'

const FirestoreChatExamplePage = () => {
  return (
    <>
      <FirestoreChat userName="Marina" roomId="room1" />
      <FirestoreChat userName="Svitlana" roomId="room1" />
      <FirestoreChat userName="Marina" roomId="room2" />
    </>
  )
}

export default FirestoreChatExamplePage
