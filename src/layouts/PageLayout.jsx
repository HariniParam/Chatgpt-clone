import React from 'react'
import SidePanel from '../components/sidePanel/SidePanel'
import ChatPanel from '../components/chatPanel/ChatPanel'
import './PageLayout.css'

function PageLayout() {
  return (
    <div className="main-container">
        <SidePanel />
        <ChatPanel />
    </div>
  )
}

export default PageLayout