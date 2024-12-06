import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import {
  collection,
  doc,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  onSnapshot,
  orderBy,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

interface Message {
  id: string
  sender: string
  content: string
  timestamp: Date
}

interface ChatRoomProps {
  roomId: string
  userName: string // Add userName prop
}

const ChatRoom: React.FC<ChatRoomProps> = ({ roomId, userName }) => {
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState('')

  const messagesCollectionRef = collection(db, 'rooms', roomId, 'messages')

  useEffect(() => {
    const unsubscribe = onSnapshot(messagesCollectionRef, (snapshot) => {
      const messagesData: Message[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        sender: doc.data().sender,
        content: doc.data().content,
        timestamp: doc.data().timestamp,
      }))
      setMessages(messagesData)
    })

    return () => unsubscribe()
  }, [])

  const handleSendMessage = async () => {
    if (newMessage.trim() !== '') {
      await addDoc(messagesCollectionRef, {
        id: Date.now(),
        sender: userName, // Use userName prop for sender
        content: newMessage,
        timestamp: Date.now(),
        readStatus: false,
      })
      setNewMessage('')
    }
  }

  const handleDeleteMessage = async (messageId: string) => {
    await deleteDoc(doc(db, 'rooms', roomId, 'messages', messageId))
  }

  const handleEditMessage = async (messageId: string, newContent: string) => {
    await updateDoc(doc(db, 'rooms', roomId, 'messages', messageId), {
      content: newContent,
    })
  }

  return (
    <div>
      <h2>Chat Room: {roomId}</h2>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            <strong>{message.sender}:</strong> {message.content}
            <button onClick={() => handleDeleteMessage(message.id)}>
              Delete
            </button>
            <button
              onClick={() => handleEditMessage(message.id, 'Edited message')}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  )
}

export default ChatRoom
