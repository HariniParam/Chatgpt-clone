import { React, useState } from "react";
import { Box, IconButton, List, ListItemButton, Typography } from "@mui/material";
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import chatHistoryData from "../../data/chatHistoryData";
import "./ChatHistory.css";
import Popup from "../../shared/popup/Popup";

function ChatHistory() {

  const [menuPosition, setMenuPosition] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleHistory = () => {
    setIsExpanded(!isExpanded);
  };

  const handleOpenMenu = (event) => {
    event.preventDefault();

    setMenuPosition({
      top: event.clientY,
      left: event.clientX,
    });
  };

  const handleCloseMenu = () => {
    setMenuPosition(null);
  };

  return (
    <Box className="chat-container">
      <ListItemButton className="chat-history-header" onClick={handleToggleHistory}>
        <Typography className="chat-title">Your chats</Typography>
        <ArrowDropDownIcon
          className={`dropdown-arrow ${isExpanded ? "open" : ""}`}
        />
      </ListItemButton>

      {isExpanded && (<List className="chat-list">
        {chatHistoryData.map((chat) => (
          <ListItemButton key={chat.id} className="chat-item" disableRipple>
            <Typography className="chat-text">{chat.title}</Typography>
            <IconButton className="more-option" onClick={handleOpenMenu}><MoreHorizOutlinedIcon fontSize="small" /></IconButton>
          </ListItemButton>
        ))}
      </List>)}

      <Popup
        open={Boolean(menuPosition)}
        position={menuPosition}
        onClose={handleCloseMenu}
      />
    </Box>
  );
}

export default ChatHistory;
