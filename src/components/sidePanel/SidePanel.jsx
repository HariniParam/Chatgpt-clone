import React from "react";
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

import "./SidePanel.css";

function SidePanel() {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      className="sidepanel-drawer"
      PaperProps={{
        className: "sidepanel-paper",
      }}
    >
      <Box className="sidepanel-container">
        <Header />

        <Stack className="option-container">
          <Button
            startIcon={<EditSquareIcon />}
            variant="outlined"
            fullWidth
            className="button"
          >
            New chat
          </Button>
          <Button
            startIcon={<SearchIcon />}
            variant="outlined"
            fullWidth
            className="button"
          >
            Search chats
          </Button>
          <Button
            startIcon={<CollectionsOutlinedIcon />}
            variant="outlined"
            fullWidth
            className="button"
          >
            Images
          </Button>
          <Button
            startIcon={<AppsOutlinedIcon />}
            variant="outlined"
            fullWidth
            className="button"
          >
            Apps
          </Button>
          <Button
            startIcon={<TerminalOutlinedIcon />}
            variant="outlined"
            fullWidth
            className="button"
          >
            Codex
          </Button>
          <Button
            startIcon={<CreateNewFolderOutlinedIcon />}
            variant="outlined"
            fullWidth
            className="button"
          >
            Projects
          </Button>
        </Stack>

        <ChatHistory />

        <Divider className="divider" />

        <Footer />
      </Box>
    </Drawer>
  );
}

export default SidePanel;
