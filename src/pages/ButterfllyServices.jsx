import React from 'react'
import HeroServices from '../components/ButterfllyServices/HeroServices';
import CradServices from '../components/ButterfllyServices/CardServices';
import CardSecServices from '../components/ButterfllyServices/CardSecServices';
import CardThirdServices from '../components/ButterfllyServices/CardThirdServices';

const ButterfllyServices = () => {
  return (
    <div className='bg-[#F5E2AC] h-auto'>
        <HeroServices/>
        <CradServices/>
        <CardSecServices/>
        <CardThirdServices/>
    </div>
  )
}

export default ButterfllyServices;