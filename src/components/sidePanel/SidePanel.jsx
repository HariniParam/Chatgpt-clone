import React from 'react'
import './SidePanel.css'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import ChatHistory from '../chatHistory/ChatHistory'
import Button from "@mui/material/Button";
import EditSquareIcon from '@mui/icons-material/EditSquare';
import SearchIcon from '@mui/icons-material/Search';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import Divider from '@mui/material/Divider';

function SidePanel() {
  return (
    <div className='sidepanel-container'>
        <Header />
        <div className='option-container'>
            <Button startIcon={<EditSquareIcon />} variant="outlined" fullWidth className="sidebarButton">New chat</Button>
            <Button startIcon={<SearchIcon />} variant="outlined" fullWidth className="sidebarButton">Search chats</Button>
            <Button startIcon={<CollectionsOutlinedIcon />} variant="outlined" fullWidth className="sidebarButton">Images</Button>
            <Button startIcon={<AppsOutlinedIcon />} variant="outlined" fullWidth className="sidebarButton">Apps</Button>
            <Button startIcon={<TerminalOutlinedIcon />} variant="outlined" fullWidth className="sidebarButton">Codex</Button>
            <Button startIcon={<CreateNewFolderOutlinedIcon />} variant="outlined" fullWidth className="sidebarButton">Projects</Button>
        </div>
        <ChatHistory />
        <Divider className='divider'/>
        <Footer />
    </div>
  )
}

export default SidePanel
