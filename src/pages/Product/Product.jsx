import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'
import Chart from '../../component/Chart/Chart'
import { Sale } from '../../data'
import IosShareIcon from '@mui/icons-material/IosShare';

export default function Product() {
  return (
    <div className='productpage-contaner'>
      <div className='productpage-head'>
        <h2 className='productpage-title'>Product</h2>
        <Link to={``}><button className='productpage-button'>Create</button></Link>
      </div>
      <div className='product-top'>
        <div className='product-top-left'><Chart data={Sale} title='sale for 3 month' /> </div>
        <div className='product-top-right'>
          <div className='product-top-right-top'>
            <img src='/image/lap1.jpg' className='product-top-right-top-img' />
            <span>lop top dell</span>
          </div>
          <div className='product-top-right-botton' >
            <div > <span>Id: </span> <span style={{color:'gray'}}>152</span></div>
            <div > <span>Name: </span> <span style={{color:'gray'}}>Dell</span></div>
            <div > <span>Sales: </span> <span style={{color:'gray'}}>$54.899</span></div>
            <div > <span>Active: </span> <span style={{color:'gray'}}>Yes</span></div>
            <div > <span>In Stock: </span> <span style={{color:'gray'}}>No</span></div>
          </div>
        </div>
      </div>
      <div className='product-bottom'>
        <div className='product-bottom-left'>
          <label>Product Name</label>
          <input type='text' placeholder='Enter Product Name' className='Product-input'></input>
          <label>In Stock</label>
          <select>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <label>Active</label>
          <select>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className='product-bottom-right'>
          <div><img src='/image/lap1.jpg' width='150px'/> <IosShareIcon className='product-icon' /> </div>
          <div><button className='Product-btn-button'>{'Upload (Edit)'}</button></div>
        </div>
      </div>
    </div>
  )
}
