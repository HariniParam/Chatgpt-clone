import React from "react";
import { Box, List, ListItemButton, Typography } from "@mui/material";
import chatHistoryData from "../../data/chatHistoryData";
import "./ChatHistory.css";

function ChatHistory() {
  return (
    <Box className="chat-container">
      <Typography className="chat-title">Your chats</Typography>

      <List className="chat-list">
        {chatHistoryData.map((chat) => (
          <ListItemButton key={chat.id} className="chat-item" disableRipple>
            <Typography className="chat-text">{chat.title}</Typography>
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}

export default ChatHistory;
