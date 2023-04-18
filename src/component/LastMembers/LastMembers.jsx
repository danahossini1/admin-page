import React from 'react'
import './LastMembers.css'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { LastNewUser } from '../../data';
import { Link } from 'react-router-dom';

export default function LastMembers() {

    let users = LastNewUser

    return (
        <>
            <div className='lsm-contaner'>
                <div className='lsm-title'>کاربران جدید</div>
                {users.map((user,index) =>
                    <div key={index} className='lsm-ul'>
                        <ul>
                            <li className='lsm-li'>
                                <div className='last-member__img'>
                                    <img src={user.img} className='home-botton-img' />
                                </div>
                                <div className="lsm-user">
                                    <span className='lsm-user-name'>{user.name}</span>
                                    <span className='lsm-user-job'>{user.job} </span>
                                </div>
                                <Link to='/userList'> <span className='lsm-icon'>< RemoveRedEyeIcon className='lsm-iconn' /></span></Link>
                            </li>
                        </ul>
                    </div>
                )}



            </div>
        </>
    )
}
