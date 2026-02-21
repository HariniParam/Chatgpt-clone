import React from 'react'
import chatHistoryData from '../../data/chatHistoryData'
import './ChatHistory.css'

function ChatHistory() {
  return (
    <div className='chat-container'>
      <p className='chat-title'>Your chats</p>
      <div className='chat-list'>
        {chatHistoryData.map((chat)=>(
            <div key={chat.id} className="chat-item">
                <span className='chat-text'>{chat.title}</span>
            </div>
        ))}
      </div>
    </div>
  )
}

export default ChatHistory