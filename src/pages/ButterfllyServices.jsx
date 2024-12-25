import React from 'react'
import HeroServices from '../components/ButterfllyServices/HeroServices';
import CradServices from '../components/ButterfllyServices/CardServices';
import CardSecServices from '../components/ButterfllyServices/CardSecServices';

const ButterfllyServices = () => {
  return (
    <div className='bg-[#F5E2AC]'>
        <HeroServices/>
        <CradServices/>
        <CardSecServices/>
    </div>
  )
}

export default ButterfllyServices;