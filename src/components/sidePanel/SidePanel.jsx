import React, { useState } from "react";
import { Drawer, Box, Stack, Button, Divider } from "@mui/material";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import ChatHistory from "../chatHistory/ChatHistory";

import EditSquareIcon from "@mui/icons-material/EditSquare";
import SearchIcon from "@mui/icons-material/Search";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";
import { Tooltip } from "@mui/material";

import "./SidePanel.css";
import SearchChat from "../searchChat/SearchChat";

function SidePanel({ isCollapsed, setCollapsed, onNewChat }) {

  const [isSearchActive, setSearchActive] = useState(false);

  const toggleSearch = () => {
    setSearchActive(!isSearchActive);
  }

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      className="sidepanel-drawer"
      PaperProps={{
        className: isCollapsed
          ? "sidepanel-paper collapsed"
          : "sidepanel-paper",
      }}
    >
      <Box className="sidepanel-container">
        <Header collapsed={isCollapsed} setCollapsed={setCollapsed} />

        <Stack className="option-container">
          <Tooltip
            title="New chat"
            placement="right"
            arrow
            disableHoverListener={!isCollapsed}
            classes={{
              tooltip: "custom-tooltip",
              arrow: "custom-tooltip-arrow",
            }}
          >
            <Button
              startIcon={<EditSquareIcon />}
              variant="outlined"
              fullWidth
              className="button"
              onClick={onNewChat}
            >
              {!isCollapsed && "New chat"}
            </Button>
          </Tooltip>
          <Tooltip
            title="Search chats"
            placement="right"
            arrow
            disableHoverListener={!isCollapsed}
            classes={{
              tooltip: "custom-tooltip",
              arrow: "custom-tooltip-arrow",
            }}
          >
            <Button
              startIcon={<SearchIcon />}
              variant="outlined"
              fullWidth
              className="button"
              onClick={toggleSearch}
            >
              {!isCollapsed && "Search chats"}
            </Button>
          </Tooltip>
          <Tooltip
            title="Images"
            placement="right"
            arrow
            disableHoverListener={!isCollapsed}
            classes={{
              tooltip: "custom-tooltip",
              arrow: "custom-tooltip-arrow",
            }}
          >
            <Button
              startIcon={<CollectionsOutlinedIcon />}
              variant="outlined"
              fullWidth
              className="button"
            >
              {!isCollapsed && "Images"}
            </Button>
          </Tooltip>
          {!isCollapsed && (
            <Button
              startIcon={<AppsOutlinedIcon />}
              variant="outlined"
              fullWidth
              className="button"
            >
              Apps
            </Button>
          )}
          {!isCollapsed && (
            <Button
              startIcon={<TerminalOutlinedIcon />}
              variant="outlined"
              fullWidth
              className="button"
            >
              Codex
            </Button>
          )}

          {!isCollapsed && (
            <Button
              startIcon={<CreateNewFolderOutlinedIcon />}
              variant="outlined"
              fullWidth
              className="button"
            >
              Projects
            </Button>
          )}
        </Stack>

        {!isCollapsed && <ChatHistory />}

        <Divider className="divider" />

        <Footer collapsed={isCollapsed} />
      </Box>
      <SearchChat
        open={isSearchActive}
        onClose={() => setSearchActive(false)}
        onNewChat={onNewChat}
      />
    </Drawer>
  );
}

export default SidePanel;
