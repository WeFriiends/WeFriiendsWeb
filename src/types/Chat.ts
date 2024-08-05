export interface Chat {
  chat_id: string
  user_id: string
  friend_id: string
  messages: Message[]
}

export interface Message {
  message_id: string
  sender_id: string
  timestamp: string
  message: string
  read_status: boolean
}
