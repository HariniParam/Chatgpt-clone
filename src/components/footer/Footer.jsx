import React from 'react'
import './Footer.css'
import Button from "@mui/material/Button";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-div'>
            <AccountCircleOutlinedIcon className='profile-icon'/>
            <div className='footer-detail'>
                <p className='footer-name'>Harini P</p>
                <span className='footer-free'>Free</span>
            </div>
        </div>
        
        <Button variant="outlined" className='upgrade-btn' disableRipple>Upgrade</Button>
    </div>
  )
}

export default Footer