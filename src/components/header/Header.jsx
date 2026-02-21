import React from 'react'
import './Header.css'
import chatgptIcon from '../../assets/chatgpt.svg'
import ViewSidebarIcon from '@mui/icons-material/ViewSidebar';

function Header() {
  return (
    <div className='header-container'>
        <button className='btn-icon'>
            <img src={chatgptIcon} alt='chatgpt logo'/>
        </button>
        <button className='btn-icon'>
            <ViewSidebarIcon />
        </button>
    </div>
  )
}

export default Header