import React from 'react'
import SidePanel from '../components/sidePanel/SidePanel'
import ChatPanel from '../components/chatPanel/ChatPanel'
import './PageLayout.css'
import { Stack } from '@mui/material'

function PageLayout() {
  return (
    <Stack direction="row" className="main-container">
        <SidePanel />
        <ChatPanel />
    </Stack>
  )
}

export default PageLayout