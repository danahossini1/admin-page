import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'

export default function Product() {
  return (
    <div className='productpage-contaner'>
        <h1 className='productpage-title'>Product</h1>
        <Link to={``}><button className='productpage-button'>Create</button></Link>
    </div>
  )
}
