import React from 'react'
import HeroAbout from '../components/ButterfllyAbout/HeroAbout'
import CardAbout from '../components/ButterfllyAbout/CardAbout';
import CardSecAbout from '../components/ButterfllyAbout/CardSecAbout';
import CardThirdAbout from '../components/ButterfllyAbout/CardThirdAbout';
import CardFoursAbout from '../components/ButterfllyAbout/CardFoursAbout';

const ButterfllyAbout = () => {
    return (
        <div className='bg-[#F5E2AC]'>
            <HeroAbout />
            <CardAbout />
            <CardSecAbout />
            <CardThirdAbout />
            <CardFoursAbout />
        </div>
    )
}

export default ButterfllyAbout;