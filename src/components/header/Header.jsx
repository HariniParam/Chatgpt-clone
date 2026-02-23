import React from "react";
import { Box, IconButton } from "@mui/material";
import ViewSidebarIcon from "@mui/icons-material/ViewSidebar";
import chatgptIcon from "../../assets/chatgpt.svg";
import { Tooltip } from "@mui/material";
import "./Header.css";

function Header({ collapsed, setCollapsed }) {
  return (
    <Box className="header-container">
      {!collapsed && (<IconButton className="header-icon-btn">
        <img src={chatgptIcon} alt="ChatGPT logo" className="chatgpt-logo" />
      </IconButton>)}
      <Tooltip
        title={collapsed ? "Open sidebar" : "Close sidebar"}
        placement="right"
        arrow
        classes={{
          tooltip: "custom-tooltip",
          arrow: "custom-tooltip-arrow",
        }}
      >
        <IconButton className="header-icon-btn" onClick={() => setCollapsed(!collapsed)}>
          <ViewSidebarIcon />
        </IconButton></Tooltip>
    </Box>
  );
}

export default Header;
