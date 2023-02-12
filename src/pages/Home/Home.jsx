import React from 'react'
import './Home.css'
import Fitures from '../../component/Fitures/Fitures'
import Chart from '../../component/Chart/Chart'
import { dataHomeChart } from '../../data'
import LastMembers from '../../component/LastMembers/LastMembers'
import LastTransaction from '../../component/LastTransaction/LastTransaction'

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
      <div className='home-botton'>
        <div className='last-member-home'><LastMembers /></div>
        <div className='last-Transaction'><LastTransaction /></div>

      </div>
    </div>
  )
}
