import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Sidbar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ReportIcon from '@mui/icons-material/Report';

export default function Sidbar() {

    const [route, setRoute] = useState(window.location.pathname)

    useEffect(()=>{
        setRoute(window.location.pathname)
    },[window.location.pathname])
    
    return (
        <div className='sidbar-contaner'>
            <div className='sidbar'>
                <div className='sidmenu'>
                    <div className='sid-title'>داشبورد</div>
                    <ul className='sid-item'>
                        <Link to={'/'} className="Link"><li className={`sid-item-li ${route[1] !== 'p' && route !== '/userList' ? 'active' : ''}`}><LineStyleIcon />خانه</li></Link>
                        <li className='sid-item-li premium'>< TimelineIcon /> <span className='premium-sidebar'>premium</span> تحلیل</li>
                        <li className='sid-item-li premium'><TrendingUpIcon /> <span className='premium-sidebar'>premium</span> فروش</li>
                    </ul>
                </div>
                <div className='sidmenu'>
                    <div className='sid-title'>دسترسی سریع</div>
                    <ul className='sid-item'>
                        <Link to={'/userList'} className="Link"><li className={`sid-item-li ${route === '/userList' ? 'active' : ''}`}>< PermIdentityIcon />کاربران</li></Link>
                        <Link to={'/products'} className="Link"><li className={`sid-item-li ${route[1] === 'p' ? 'active' : ''}`}>< StorefrontIcon /> محصولات</li></Link>
                        <li className='sid-item-li premium'>< AttachMoneyIcon /> <span className='premium-sidebar'>premium</span> معاملات</li>
                        <li className='sid-item-li premium'>< ReportIcon /> <span className='premium-sidebar'>premium</span> گزارش ها</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
