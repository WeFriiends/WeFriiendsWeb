import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import {
  collection,
  doc,
  addDoc,
  deleteDoc,
  onSnapshot,
  orderBy,
  query,
  limitToLast,
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
  readStatus: boolean
}

interface ChatRoomProps {
  roomId: string
  userName: string // Add userName prop
}

const ChatRoom: React.FC<ChatRoomProps> = ({ roomId, userName }) => {
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState('')
  const messagesCollectionRef = collection(db, 'rooms', roomId, 'messages')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const q = query(
      messagesCollectionRef,
      orderBy('timestamp', 'asc'), // Sort by timestamp in descending order
      limitToLast(100) // Limit to the last 10 messages (adjust as needed)
    )
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messagesData: Message[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        sender: doc.data().sender,
        content: doc.data().content,
        timestamp: doc.data().timestamp,
        readStatus: doc.data().readStatus,
      }))
      setMessages(messagesData)
    })

    return () => unsubscribe()
  }, [])

  const handleSendMessage = async () => {
    if (newMessage.trim() !== '') {
      try {
        await addDoc(messagesCollectionRef, {
          sender: userName, // Use userName prop for sender
          content: newMessage,
          timestamp: Date.now(),
          readStatus: false,
        })
        setNewMessage('')
        setError(null) // Clear any previous error
      } catch (error: any) {
        console.error('Error sending message:', error)
        setError('Failed to send message. Please try again later.')
      }
    }
  }

  const handleDeleteMessage = async (messageId: string) => {
    try {
      await deleteDoc(doc(db, 'rooms', roomId, 'messages', messageId))
      setError(null) // Clear any previous error
    } catch (error: any) {
      console.error('Error deleting message:', error)
      setError('Failed to delete message. Please try again later.')
    }
  }

  return (
    <div>
      <h2>Chat Room: {roomId}</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            <strong>{message.sender}:</strong> {message.content}
            <button onClick={() => handleDeleteMessage(message.id)}>
              Delete
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