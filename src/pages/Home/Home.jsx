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
      <div className='home-botton'>
        <div className='last-member-home'><LastMembers /></div>
        <div className='last-Transaction'><LastTransaction /></div>
      </div>
      <div className='Home-fitures'>
        <Fitures 
        name={'ماه'}
        title={' تغییرات نسبت به ماه گذشته '}
        price={'۲,۲۱,۶۰۰'}
        status={'down'}
        statusMain={'۸'}
        />
        <Fitures 
        name={'فصل'}
        title={'تغییرات نسبت به  فصل گذشته'}
        price={'۹,۱۹۰,۰۰۰'}
        status={'up'}
        statusMain={'۲۱'}
        />
        <Fitures 
        name={'سال'}
        title={'تغییرات نسبت به  سال گذشته'}
        price={'۷۵,۰۰۰,۰۰۰'}
        status={'up'}
        statusMain={'۶۰'}
        />
      </div>
      <div className='home-chart'>
        <Chart data={dataHomeChart} title='نمودار سا لا نه' grid />
      </div>
    </div>
  )
}
