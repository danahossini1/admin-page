import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import './TopNav.css'
import { Link } from 'react-router-dom';

export default function TopNav() {
    return (
        <>
            <div className='topBar-contaner'>
                <div className='topbar'>
                    <div className='top-left' >
                       <Link to='./' style={{textDecoration:'none'}}> <h2 className='top-logo'>پنل ادمین</h2></Link>
                    </div>
                    <div className='top-right'>
                        <div className='top-icon'>
                            <SettingsIcon />
                            <span className='icon-notif'>4</span>
                        </div>
                        <div className='top-icon'>
                            <NotificationsNoneIcon />
                            <span className='icon-notif'>2</span>
                        </div>
                    
                        <img src='/image/dana.jpg' className='top-user-img' />
                    </div>
                </div>
            </div>
        </>
    )
}
