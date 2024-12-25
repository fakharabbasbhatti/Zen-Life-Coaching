import React from 'react'
import HeroTeam from '../components/ButterfllyTeam/HeroTeam';
import CardTeam from '../components/ButterfllyTeam/CardTeam';
import ServicesTeam from '../components/ButterfllyTeam/ServicesTeam';



const ButterfllyTeam = () => {
  return (
    <div className="bg-[#fce4a2]">
       <HeroTeam/>
        <CardTeam/>
        <ServicesTeam/>
      </div>
  )
}

export default ButterfllyTeam;