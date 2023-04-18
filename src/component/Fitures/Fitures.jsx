import React from 'react'
import './Fitures.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function Fitures({ name, title, price, status, statusMain }) {
  return (
    <div className='fiture-contaner'>
      <div className='fiture'>
        <span className='fiture-title'>{name}</span>
        <div className='fiture-other'>
          <span className='fiture-price'> {price} <span style={{fontSize:20}}>تومان</span> </span>
          <span className='fiture-sum'>{statusMain}% {status === 'up' ? <ArrowUpwardIcon className='fiture-icon-up' /> : <ArrowDownwardIcon className='fiture-icon-down' />}</span>
        </div>
        <span className='fiture-footer'>{title}</span>
      </div>

    </div>
  )
}
