import React from "react";
import { Box, Button, IconButton, Stack } from "@mui/material";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import "./ChatHeader.css";

function ChatHeader() {
  return (
    <Box className="chat-header">
      <Button
        endIcon={<KeyboardArrowDownOutlinedIcon />}
        variant="outlined"
        className="gpt-btn"
      >
        ChatGPT
      </Button>

      <Button
        startIcon={<AutoAwesomeOutlinedIcon />}
        variant="outlined"
        className="rounded-btn"
      >
        Get Plus
      </Button>
      <Stack direction="row" spacing={1}>
        <IconButton className="rounded-icon">
          <PersonAddAlt1OutlinedIcon />
        </IconButton>

        <IconButton className="rounded-icon">
          <ChatBubbleOutlineOutlinedIcon />
        </IconButton>
      </Stack>
    </Box>
  );
}

export default ChatHeader;
