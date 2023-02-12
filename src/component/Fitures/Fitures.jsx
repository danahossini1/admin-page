import React from 'react'
import './Fitures.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function Fitures() {
  return (
    <div className='fiture-contaner'>
        <div className='fiture'>
            <span className='fiture-title'>month</span>
            <div className='fiture-other'>
                <span className='fiture-price'>$22.5</span>
                <span className='fiture-sum'>2.3 <ArrowUpwardIcon className='fiture-icon'/></span>
            </div>
            <span className='fiture-footer'>Compared to last Month</span>
        </div>
        
    </div>
  )
}
