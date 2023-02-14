import React from 'react'
import './LastMembers.css'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { LastNewUser } from '../../data';

export default function LastMembers() {
    
    let users=LastNewUser

    return (
        <>
        <div className='lsm-contaner'>
            <div className='lsm-title'>New Join Members</div>
            {users.map(user=>
                 <div className='lsm-ul'>
                <ul>
                    <li className='lsm-li'>
                        <img src={user.img} className='home-botton-img' />
                        <div className="lsm-user">
                            <span className='lsm-user-name'>{user.name}</span>
                            <span className='lsm-user-job'>{user.job} </span>
                        </div>
                        <span className='lsm-icon'>< RemoveRedEyeIcon className='lsm-iconn'/></span>
                    </li>
                </ul>
            </div>
                )}
            
           
            
        </div>
        </>
    )
}
