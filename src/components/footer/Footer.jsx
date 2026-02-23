import React from "react";
import { Box, Stack, Button, IconButton } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Tooltip } from "@mui/material";
import "./Footer.css";

function Footer({ collapsed }) {
  return (
    <Box className={`footer-container ${collapsed ? "collapsed" : ""}`}>
      <Stack direction="row" spacing={1} className="footer-div">
        <Tooltip
          title="Harini P"
          placement="right"
          arrow
          classes={{
            tooltip: "custom-tooltip",
            arrow: "custom-tooltip-arrow",
          }}><IconButton disableRipple className="profile-btn">
            <AccountCircleOutlinedIcon className="profile-icon" />
          </IconButton></Tooltip>


        {!collapsed && (<Box className="footer-detail">
          <p className="footer-name">Harini P</p>
          <span className="footer-free">Free</span>
        </Box>)}
      </Stack>

      {!collapsed && (
        <Button variant="outlined" className="upgrade-btn">
          Upgrade
        </Button>
      )}
    </Box>
  );
}

export default Footer;
