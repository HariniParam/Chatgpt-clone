import React from "react";
import SidePanel from "../components/sidePanel/SidePanel";
import ChatPanel from "../components/chatPanel/ChatPanel";
import "./PageLayout.css";
import { Stack } from "@mui/material";
import { useState } from "react";

function PageLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [chatKey, setChatKey] = useState(0);
  const [isChatActive, setIsChatActive] = useState(false);

  const handleNewChat = () => {
    setChatKey(chatKey + 1);
    setIsChatActive(false);
  }

  return (
    <Stack direction="row" className="main-container">
      <SidePanel isCollapsed={isCollapsed} setCollapsed={setIsCollapsed} onNewChat={handleNewChat} />
      <ChatPanel collapsed={isCollapsed} chatKey={chatKey} isChatActive={isChatActive} setIsChatActive={setIsChatActive} />
    </Stack>
  );
}

export default PageLayout;
