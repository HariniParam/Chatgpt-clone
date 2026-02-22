import React from "react";
import { Box, IconButton } from "@mui/material";
import ViewSidebarIcon from "@mui/icons-material/ViewSidebar";
import chatgptIcon from "../../assets/chatgpt.svg";
import "./Header.css";

function Header() {
  return (
    <Box className="header-container">
      <IconButton className="header-icon-btn">
        <img src={chatgptIcon} alt="ChatGPT logo" className="chatgpt-logo" />
      </IconButton>

      <IconButton className="header-icon-btn">
        <ViewSidebarIcon />
      </IconButton>
    </Box>
  );
}

export default Header;
