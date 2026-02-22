import React from 'react'
import './ChatPanel.css'
import ChatHeader from '../chatHeader/ChatHeader'
import ChatPage from '../../Pages/chatPage/ChatPage'
import { Stack } from '@mui/material'

function ChatPanel() {
  return (
    <Stack direction="column" className='chatpanel-container'>
        <ChatHeader />
        <ChatPage />
    </Stack>
  )
}

export default ChatPanel