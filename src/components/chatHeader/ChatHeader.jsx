import { React, useState, useRef, useEffect } from "react";
import { Box, Button, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import CheckIcon from '@mui/icons-material/Check';
import Popup from "../../shared/popup/Popup";
import "./ChatHeader.css";

function ChatHeader({ isChatActive }) {
  const [menuPosition, setMenuPosition] = useState(null);
  const [modelDropdownOpen, setModelDropdownOpen] = useState(false);
  const buttonRef = useRef(null);

  const handleOpenMenu = (event) => {
    event.preventDefault();
    setMenuPosition({
      top: event.clientY + 20,
      left: event.clientX,
    });
  };

  const handleCloseMenu = () => {
    setMenuPosition(null);
  };

  const handleToggleModelDropdown = () => {
    setModelDropdownOpen(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setModelDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Box className="chat-header">
      <Box style={{ position: "relative" }}>
      <Button
        endIcon={<KeyboardArrowDownOutlinedIcon />}
        variant="outlined"
        className="gpt-btn"
        ref={buttonRef}
        onClick={handleToggleModelDropdown}
      >
        ChatGPT
      </Button>
      {modelDropdownOpen && (
          <Box className="model-dropdown-card">
            <Box className="dropdown-item">
              <Box className="item-icon-wrapper">
                <AutoAwesomeOutlinedIcon sx={{ fontSize: 20 }} />
              </Box>
              <Box className="item-text-content">
                <Typography className="item-title">ChatGPT Plus</Typography>
                <Typography className="item-desc">Our smartest model & more</Typography>
              </Box>
              <Button className="upgrade-pill-btn">Upgrade</Button>
            </Box>

            <Box className="dropdown-item">
              <Box className="item-icon-wrapper">
                <ChangeHistoryIcon sx={{ fontSize: 20, transform: 'rotate(180deg)' }} />
              </Box>
              <Box className="item-text-content">
                <Typography className="item-title">ChatGPT</Typography>
                <Typography className="item-desc">Great for everyday tasks</Typography>
              </Box>
              <CheckIcon className="check-icon" sx={{ fontSize: 20 }} />
            </Box>
          </Box>
        )}
      </Box>
      <Button
        startIcon={<AutoAwesomeOutlinedIcon />}
        variant="outlined"
        className="rounded-btn"
      >
        Get Plus
      </Button>

      <Stack direction="row" spacing={1}>
        {!isChatActive ? (
          <>
            <Tooltip title="Start a group chat" placement="bottom" arrow classes={{ tooltip: "custom-tooltip", arrow: "custom-tooltip-arrow" }}>
              <IconButton className="rounded-icon">
                <PersonAddAlt1OutlinedIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Turn on temporary chat" placement="bottom" arrow classes={{ tooltip: "custom-tooltip", arrow: "custom-tooltip-arrow" }}>
              <IconButton className="rounded-icon">
                <ChatBubbleOutlineOutlinedIcon />
              </IconButton>
            </Tooltip>
          </>
        ) : (
          <>
            <Button startIcon={<FileUploadOutlinedIcon />} variant="outlined" className="button">
              Share
            </Button>
            <IconButton className="rounded-icon" onClick={handleOpenMenu}>
              <MoreHorizOutlinedIcon />
            </IconButton>
          </>
        )}
      </Stack>

      <Popup open={Boolean(menuPosition)} position={menuPosition} onClose={handleCloseMenu} />
    </Box>
  );
}

export default ChatHeader;