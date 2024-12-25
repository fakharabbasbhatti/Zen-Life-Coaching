import React from 'react'
import Hero from '../components/ButterfllyWork/Hero'
import CardFirst from '../components/ButterfllyWork/CardFirst'
import CardSecond from '../components/ButterfllyWork/CardSecond'
import CardThird from '../components/ButterfllyWork/CardThird'
import CardFour from '../components/ButterfllyWork/CardFour'


const Butterflly = () => {
  return (
    <div className='bg-[#ffffa8]'>
      <Hero/>
        <CardFirst/>
        <CardSecond/>
        <CardThird/>
        <CardFour/>
    </div>
  )
}

export default Butterflly;