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
import { makeStyles } from 'tss-react/mui'
import theme from '../../../styles/createTheme'
import {
  Avatar,
  Box,
  Button,
  TextareaAutosize,
  Typography,
} from '@mui/material'
import ChatMenu from '../../chat/ChatMenu'

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

const ChatRoomStyled: React.FC<ChatRoomProps> = ({ roomId, userName }) => {
  const { classes } = useStyles()
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
  }, [messagesCollectionRef])

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
    <>
      <Box>
        <Box className={classes.header}>
          <Box className={classes.userInHeader}>
            <Avatar
              src={'/img/photo_Elena.jpg'}
              sx={{ width: 50, height: 50 }}
            />
            <Typography
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 600,
                fontSize: 20,
              }}
            >
              {roomId}, {userName} {' is chatting'}
            </Typography>
          </Box>
          <ChatMenu />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '20px',
          }}
        >
          <Box className={classes.messagesArea}>
            {messages.map((message: Message) => (
              <Box
                key={message.id}
                sx={{
                  alignSelf:
                    message.sender === userName ? 'flex-end' : 'flex-start',
                  backgroundColor:
                    message.sender === userName ? '#FEDED2' : '#EEEEEE',
                }}
                className={classes.message}
              >
                <Typography className={classes.messageAuthor}>
                  {message.sender}
                  {': '}
                </Typography>
                <Typography className={classes.messageText}>
                  {message.content}
                </Typography>
                <Typography
                  className={classes.messageDate}
                  sx={{
                    textAlign: message.sender === userName ? 'right' : 'left',
                  }}
                >
                  {new Date(message.timestamp).toLocaleString([], {
                    year: 'numeric',
                    month: 'numeric',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </Typography>
                <Button
                  variant="text"
                  onClick={() => handleDeleteMessage(message.id)}
                >
                  Delete
                </Button>
              </Box>
            ))}
          </Box>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <Box className={classes.sendMessageSection}>
            <TextareaAutosize
              minRows={1}
              maxRows={10}
              placeholder={`Type a message as ${userName}`}
              className={classes.textArea}
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              // onChange={handleInputChange}
            />
            <img src="/img/messages/lol.svg" alt="lol" />
            <Button
              onClick={handleSendMessage}
              className={classes.sendBtn}
              variant="outlined"
            >
              Send
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default ChatRoomStyled

const useStyles = makeStyles()({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 22,
  },
  userInHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: 15,
  },
  messagesArea: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginTop: 31,
    padding: '13px 22px 12px',
    overflow: 'auto',
  },
  message: {
    maxWidth: '85%',
    padding: '12px',
    borderRadius: '10px',
  },
  messageAuthor: {
    fontSize: '11px',
    lineHeight: '18.2px',
    color: theme.palette.text.primary,
  },
  messageText: {
    fontSize: '14px',
    lineHeight: '18.2px',
    color: theme.palette.text.primary,
  },
  messageDate: {
    fontSize: '12px',
    lineHeight: '15.6px',
    color: 'rgba(68, 68, 68, 0.8)',
    marginTop: 5,
  },
  sendMessageSection: {
    display: 'flex',
    gap: 20,
    bottom: 0,
    padding: '0 0 40px 15px',
    alignItems: 'end',
  },
  textArea: {
    width: 328,
    backgroundColor: ' #EEEEEE',
    color: theme.palette.text.primary,
    fontFamily: 'Inter',
    fontSize: 14,
    lineHeight: 1.3,
    fontWeight: 400,
    padding: '15px 18px',
    border: 'none',
    borderRadius: 10,
    outline: 'none',
  },
  sendBtn: {
    border: '2px solid  #F1562A',
    borderRadius: 10,
    padding: '6px 40.5px',
    textTransform: 'lowercase',
    fontSize: 16,
    lineHeight: 1.5,
    fontWeight: 600,
  },
})
