import React from "react";
import { Box, Stack, Button, IconButton } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "./Footer.css";

function Footer() {
  return (
    <Box className="footer-container">
      <Stack direction="row" spacing={1} className="footer-div">
        <IconButton disableRipple className="profile-btn">
          <AccountCircleOutlinedIcon className="profile-icon" />
        </IconButton>

        <Box className="footer-detail">
          <p className="footer-name">Harini P</p>
          <span className="footer-free">Free</span>
        </Box>
      </Stack>

      <Button variant="outlined" className="upgrade-btn" disableRipple>
        Upgrade
      </Button>
    </Box>
  );
}

export default Footer;
