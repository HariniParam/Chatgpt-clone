import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  IconButton,
  TextField,
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EditSquareIcon from "@mui/icons-material/EditSquare";

import chatHistoryData from "../../data/chatHistoryData";
import "./SearchChat.css";

function SearchChat({ open, onClose, onNewChat }) {
  const [query, setQuery] = useState("");

  const handleNewChatClick = () => {
    onNewChat();
    onClose();
  };

  const filteredChats =
    query === ""
      ? chatHistoryData
      : chatHistoryData.filter(chat =>
        chat.title.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      PaperProps={{ className: "search-dialog" }}
      BackdropProps={{ className: "search-backdrop" }}
    >
      <DialogContent className="search-content">

        <Box className="search-header">
          <TextField
            autoFocus
            fullWidth
            placeholder="Search chats..."
            variant="standard"
            InputProps={{ disableUnderline: true }}
            className="search-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <IconButton onClick={onClose} sx={{ color: "white" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider />

        <Box className="search-body">

          <List>
            <ListItem className="new-chat" onClick={handleNewChatClick}>
              <EditSquareIcon fontSize="small" />
              <ListItemText primary="New chat" />
            </ListItem>
          </List>

          <Typography className="section-title">Today</Typography>

          <List>
            {filteredChats.slice(0, 4).map(chat => (
              <ListItem key={chat.id} button className="chat-row">
                <ListItemText primary={chat.title} />
              </ListItem>
            ))}
          </List>

          <Typography className="section-title">Previous 7 Days</Typography>

          <List>
            {filteredChats.slice(4, 8).map(chat => (
              <ListItem key={chat.id} button className="chat-row">
                <ListItemText primary={chat.title} />
              </ListItem>
            ))}
          </List>

        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default SearchChat;