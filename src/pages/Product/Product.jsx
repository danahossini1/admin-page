import React, { useEffect, useState } from 'react'
import './Product.css'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Chart from '../../component/Chart/Chart'
import { Allproduct, Sale } from '../../data'
import IosShareIcon from '@mui/icons-material/IosShare';

export default function Product() {

  const route = useParams()

  const [product, setProduct] = useState('')

  const filterProduct = async () => {
    const productById = Allproduct.filter((item) => { return item.id === route.Id })
    console.log(productById);

  }

  filterProduct()

  useEffect(() => {
    const productById = Allproduct.filter(item => item.id === +route.Id)
    setProduct(...productById)
  }, [])


  return (
    <div className='productpage-contaner'>
      <div className='productpage-head'>
        <h2 className='productpage-title'>صفحه محصول</h2>
        <Link to={``}><button className='productpage-button'>ایجاد محصول</button></Link>
      </div>
      <div className='product-top'>
        <div className='product-top-left'><Chart data={Sale} title='فروش در 3 ماه اخیر ' /> </div>
        <div className='product-top-right'>
          <div className='product-top-right-top'>
            <img src={product.avatar} className='product-top-right-top-img' />
            <span>مشخصات لپ تاپ</span>
          </div>
          <div className='product-top-right-botton' >
            <div > <span>Id: </span> <span className='pt-detailes'>{product.id}</span></div>
            <div > <span>نام: </span> <span className='pt-detailes'>{product.name}</span></div>
            <div > <span>قیمت: </span> <span className='pt-detailes'>{product.price}</span></div>
            <div > <span>موجودی: </span> <span className='pt-detailes'>{product.active}</span></div>
            <div > <span>استوک است ؟: </span> <span className='pt-detailes'>{product.isStock}</span></div>
          </div>
        </div>
      </div>
      <div className='product-bottom'>
        <div className='product-bottom-left'>
          <label>ویرایش محصول</label>
          <input type='text' placeholder='نام محصول' className='Product-input'></input>
          <label>استوک است ؟</label>
          <select>
            <option value="Yes">بله</option>
            <option value="No">خیر</option>
          </select>
          <label>موجود است ؟</label>
          <select>
            <option value="Yes">بله</option>
            <option value="No">خیر</option>
          </select>
        </div>
        <div className='product-bottom-right'>
          <div><img src={product.avatar} width='150px' /> <IosShareIcon className='product-icon' /> </div>
          <div><button className='Product-btn-button'>{'آپلود تصویر'}</button></div>
        </div>
      </div>
    </div>
  )
}
