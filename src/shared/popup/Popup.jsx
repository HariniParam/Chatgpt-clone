import { React, useEffect, useRef } from "react";
import {
    Menu,
    MenuItem,
    Divider,
    ListItemIcon,
} from "@mui/material";

import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import "./Popup.css";

function Popup({ open, position, onClose }) {

    const popupRef = useRef(null);

    useEffect(() => {
        if (!open) return;
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                onClose();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open, onClose]);

    return (
        <Menu
            open={open}
            onClose={onClose}
            anchorReference="anchorPosition"
            anchorPosition={position}
            hideBackdrop
            disableAutoFocus
            disableEnforceFocus
            disableRestoreFocus

            slotProps={{
                root: {
                    sx: {
                        pointerEvents: "none",
                    },
                },
                paper: {
                    ref: popupRef,
                    sx: {
                        pointerEvents: "auto",
                    },
                },
            }}

            classes={{ paper: "popup-paper" }}
        >
            <MenuItem className="popup-item">
                <ListItemIcon className="popup-icon">
                    <FileUploadOutlinedIcon fontSize="small" />
                </ListItemIcon>
                Share
            </MenuItem>

            <MenuItem className="popup-item">
                <ListItemIcon className="popup-icon">
                    <GroupAddOutlinedIcon fontSize="small" />
                </ListItemIcon>
                Start a group chat
            </MenuItem>

            <MenuItem className="popup-item">
                <ListItemIcon className="popup-icon">
                    <EditOutlinedIcon fontSize="small" />
                </ListItemIcon>
                Rename
            </MenuItem>

            <Divider className="popup-divider" />

            <MenuItem className="popup-item">
                <ListItemIcon className="popup-icon">
                    <PushPinOutlinedIcon fontSize="small" />
                </ListItemIcon>
                Pin chat
            </MenuItem>

            <MenuItem className="popup-item">
                <ListItemIcon className="popup-icon">
                    <ArchiveOutlinedIcon fontSize="small" />
                </ListItemIcon>
                Archive
            </MenuItem>

            <MenuItem className="popup-item delete">
                <ListItemIcon className="popup-icon delete">
                    <DeleteOutlineOutlinedIcon fontSize="small" />
                </ListItemIcon>
                Delete
            </MenuItem>
        </Menu>
    );
}

export default Popup;