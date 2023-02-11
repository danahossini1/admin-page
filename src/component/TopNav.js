import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import './TopNav.css'

export default function TopNav() {
    return (
        <>
            <div className='topBar-contaner'>
                <div className='topbar'>
                    <div className='top-left' >
                        <h2 className='top-logo'>TEST PROJECT</h2>
                    </div>
                    <div className='top-right'>
                        <div className='top-icon'>
                            <SettingsIcon />
                            <span className='icon-notif'>2</span>
                        </div>
                        <div className='top-icon'>
                            <NotificationsNoneIcon />
                            <span className='icon-notif'>2</span>
                        </div>
                        <div className='top-icon'>
                            <LanguageIcon />
                        </div>
                        <img src='./logo512.png' className='top-user-img' />
                    </div>
                </div>
            </div>
        </>
    )
}
