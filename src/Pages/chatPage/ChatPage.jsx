import React, { useState, useRef, useEffect } from "react";
import {
    Box,
    Typography,
    TextField,
    InputAdornment,
    IconButton,
} from "@mui/material";
import "./ChatPage.css";
import AddIcon from "@mui/icons-material/Add";
import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";

function ChatPage() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleInput = () => {
        if (!input.trim()) return;
        const userInput = { role: "user", text: input };
        const botResponse = { role: "bot", text: `${input}`.repeat(10) };
        setInput("");
        setMessages((prev) => [...prev, userInput, botResponse]);
    };
    const isChatActive = messages.length > 0;

    return (
        <Box className={`chat-page-container ${isChatActive ? "active" : ""}`}>
            {!isChatActive && (
                <Typography variant="h4">What are you working on?</Typography>
            )}

            {isChatActive && (
                <Box className="messages-container">
                    {messages.map((msg, index) => (
                        <Box key={index} className={`message-bubble ${msg.role}`}>
                            {msg.text}
                        </Box>
                    ))}
                    <div ref={messagesEndRef} />
                </Box>
            )}

            <TextField
                placeholder="Ask anything"
                variant="outlined"
                className="chat-input"
                multiline
                minRows={1}
                maxRows={5}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key == "Enter" && handleInput()}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <IconButton className="input-icon">
                                <AddIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton className="input-icon">
                                <MicNoneOutlinedIcon />
                            </IconButton>
                            <IconButton className="input-icon bg-fill" onClick={handleInput}>
                                {input ? <ArrowUpwardOutlinedIcon /> : <GraphicEqIcon />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </Box>
    );
}

export default ChatPage;
