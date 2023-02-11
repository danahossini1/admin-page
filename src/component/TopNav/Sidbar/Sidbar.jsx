import React from 'react'
import './Sidbar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportIcon from '@mui/icons-material/Report';

export default function Sidbar() {
    return (
        <div className='sidbar-contaner'>
            <div className='sidbar'>
                <div className='sidmenu'>
                    <div className='sid-title'>dashboard</div>
                    <ul className='sid-item'>
                        <li className='sid-item-li'><LineStyleIcon/> Home</li>
                        <li className='sid-item-li'>< TimelineIcon/> Analytics</li>
                        <li className='sid-item-li'><TrendingUpIcon /> Sales</li>
                    </ul>
                </div>
                <div className='sidmenu'>
                    <div className='sid-title'>Quick Menu</div>
                    <ul className='sid-item'>
                        <li className='sid-item-li'>< PermIdentityIcon/> User</li>
                        <li className='sid-item-li'>< PermIdentityIcon/> New User</li>
                        <li className='sid-item-li'>< StorefrontIcon/> Products</li>
                        <li className='sid-item-li'>< AttachMoneyIcon/> Transactions</li>
                        <li className='sid-item-li'>< ReportIcon/> Reports</li>
                    </ul>
                </div>
                <div className='sidmenu'>
                    <div className='sid-title'>Notifications</div>
                    <ul className='sid-item'>
                        <li className='sid-item-li'>< MailOutlineIcon/> Mail</li>
                        <li className='sid-item-li'>< DynamicFeedIcon/> feedback</li>
                        <li className='sid-item-li'>< ChatBubbleOutlineIcon/> Messages</li>
                    </ul>
                </div>
                <div className='sidmenu'>
                    <div className='sid-title'>Staff</div>
                    <ul className='sid-item'>
                        <li className='sid-item-li'><WorkOutlineIcon/> Manage</li>
                        <li className='sid-item-li'>< TimelineIcon/> Analytics</li>
                        <li className='sid-item-li'>< ReportIcon/> Reports</li>
                    </ul>
                </div>

            </div>

        </div>
    )
}
