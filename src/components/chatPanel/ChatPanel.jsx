import { React } from 'react'
import './ChatPanel.css'
import ChatHeader from '../chatHeader/ChatHeader'
import ChatPage from '../../Pages/chatPage/ChatPage'
import { Stack } from '@mui/material'

function ChatPanel({ collapsed, chatKey, isChatActive, setIsChatActive }) {

  return (
    <Stack direction="column" className={`chatpanel-container ${collapsed ? "expanded" : ""}`}>
      <ChatHeader isChatActive={isChatActive} />
      <ChatPage key={chatKey} setIsChatActive={setIsChatActive} />
    </Stack>
  )
}

export default ChatPanel