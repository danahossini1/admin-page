import React from 'react'
import './Home.css'
import Fitures from '../../component/Fitures/Fitures'
import Chart from '../../component/Chart/Chart'
import { dataHomeChart } from '../../data'

export default function Home() {
  return (
    <div className='home-contaner'>
      <div className='Home-fitures'>
        <Fitures />
        <Fitures />
        <Fitures />
      </div>
      <div className='home-chart'>
        <Chart data={dataHomeChart} title='month price' grid />
      </div>
      
    </div>
  )
}
