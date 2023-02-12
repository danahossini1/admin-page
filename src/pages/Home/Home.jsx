import React from 'react'
import './Home.css'
import Fitures from '../../component/TopNav/Fitures/Fitures'

export default function Home() {
  return (
    <div className='home-contaner'>
      <div className='Home-fitures'>
        <Fitures />
        <Fitures />
        <Fitures />
      </div>
      
    </div>
  )
}
