import React, { useState, useRef, useEffect } from "react";
import {
    Box,
    Typography,
    TextField,
    InputAdornment,
    IconButton,
    Divider,
} from "@mui/material";
import "./ChatPage.css";
import AddIcon from "@mui/icons-material/Add";
import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Tooltip } from "@mui/material";

function ChatPage({ setIsChatActive }) {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [addMenuOpen, setAddMenuOpen] = useState(false);
    const addBtnRef = useRef(null);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (addBtnRef.current && !addBtnRef.current.contains(event.target)) {
                setAddMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleInput = () => {
        if (!input.trim()) return;
        setIsChatActive(true);
        const userInput = { role: "user", text: input };
        const botResponse = { role: "bot", text: `${input}`.repeat(10) };
        setInput("");
        setMessages((prev) => [...prev, userInput, botResponse]);
    };
    const isChatActive = messages.length > 0;

    const renderBotActions = () => (
        <Box className="bot-actions">
            <Tooltip title="Copy" arrow classes={{
                tooltip: "custom-tooltip",
                arrow: "custom-tooltip-arrow",
            }}>
                <IconButton size="small"><ContentCopyOutlinedIcon fontSize="inherit" /></IconButton>
            </Tooltip>
            <Tooltip title="Good response" arrow classes={{
                tooltip: "custom-tooltip",
                arrow: "custom-tooltip-arrow",
            }}>
                <IconButton size="small"><ThumbUpOutlinedIcon fontSize="inherit" /></IconButton>
            </Tooltip>
            <Tooltip title="Bad response" arrow classes={{
                tooltip: "custom-tooltip",
                arrow: "custom-tooltip-arrow",
            }}>
                <IconButton size="small"><ThumbDownOutlinedIcon fontSize="inherit" /></IconButton>
            </Tooltip>
            <Tooltip title="Share" arrow classes={{
                tooltip: "custom-tooltip",
                arrow: "custom-tooltip-arrow",
            }}>
                <IconButton size="small"><ShareOutlinedIcon fontSize="inherit" /></IconButton>
            </Tooltip>
            <Tooltip title="Regenerate" arrow classes={{
                tooltip: "custom-tooltip",
                arrow: "custom-tooltip-arrow",
            }}>
                <IconButton size="small"><ReplayOutlinedIcon fontSize="inherit" /></IconButton>
            </Tooltip>
            <Tooltip title="More" arrow classes={{
                tooltip: "custom-tooltip",
                arrow: "custom-tooltip-arrow",
            }}>
                <IconButton size="small"><MoreHorizOutlinedIcon fontSize="inherit" /></IconButton>
            </Tooltip>
        </Box>
    );

    return (
        <Box className={`chat-page-container ${isChatActive ? "active" : ""}`}>
            {!isChatActive && (
                <Typography variant="h4">What are you working on?</Typography>
            )}

            {isChatActive && (
                <Box className="messages-container">
                    {messages.map((msg, index) => (
                        <Box key={index} className={`message-wrapper ${msg.role}`}>
                            <Box className={`message-bubble ${msg.role}`}>
                                {msg.text}
                            </Box>
                            {msg.role === "bot" && renderBotActions()}
                        </Box>
                    ))}
                    <div ref={messagesEndRef} />
                </Box>
            )}

            <Box className="input-wrapper" style={{ position: 'relative', width: '50%' }}>
                {addMenuOpen && (
                    <Box className="add-menu-dropdown">
                        <Box className="menu-item-large">
                            <CloudUploadOutlinedIcon className="menu-icon" />
                            <Box>
                                <Typography className="menu-text-primary">Upgrade to Go for more uploads</Typography>
                                <Typography className="menu-text-secondary">Or wait 16 hours to upload again</Typography>
                            </Box>
                        </Box>
                        <Divider />
                        <Box className="menu-item"><ImageOutlinedIcon className="menu-icon" /> Create image</Box>
                        <Box className="menu-item"><LightbulbOutlinedIcon className="menu-icon" /> Thinking</Box>
                        <Box className="menu-item"><SearchOutlinedIcon className="menu-icon" /> Deep research</Box>
                        <Box className="menu-item"><ShoppingBagOutlinedIcon className="menu-icon" /> Shopping research</Box>
                        <Box className="menu-divider" />
                        <Box className="menu-item space-between">
                            <Box sx={{ display: 'flex', alignItems: 'center' }}><MoreHorizIcon className="menu-icon" /> More</Box>
                            <ChevronRightIcon sx={{ fontSize: 18 }} />
                        </Box>
                    </Box>
                )}
            </Box>

            <TextField
                placeholder="Ask anything"
                variant="outlined"
                className="chat-input"
                multiline
                minRows={1}
                maxRows={5}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleInput();
                    }
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Tooltip
                                title="Add files and more"
                                placement="bottom"
                                arrow
                                classes={{
                                    tooltip: "custom-tooltip",
                                    arrow: "custom-tooltip-arrow",
                                }}
                            >
                                <IconButton ref={addBtnRef} className="input-icon" onClick={() => setAddMenuOpen(!addMenuOpen)}>
                                    <AddIcon />
                                </IconButton>
                            </Tooltip>

                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment position="end">
                            <Tooltip
                                title="Dictate"
                                placement="bottom"
                                arrow
                                classes={{
                                    tooltip: "custom-tooltip",
                                    arrow: "custom-tooltip-arrow",
                                }}
                            ><IconButton className="input-icon">
                                    <MicNoneOutlinedIcon />
                                </IconButton></Tooltip>
                            <Tooltip
                                title="Use voice"
                                placement="bottom"
                                arrow
                                classes={{
                                    tooltip: "custom-tooltip",
                                    arrow: "custom-tooltip-arrow",
                                }}><IconButton className="input-icon bg-fill" onClick={handleInput}>
                                    {input ? <ArrowUpwardOutlinedIcon /> : <GraphicEqIcon />}
                                </IconButton></Tooltip>

                        </InputAdornment>
                    ),
                }}
            />
        </Box>
    );
}

export default ChatPage;
