import React from 'react'
import NavberPortfolio from '../components/Portfolio/NavberPortfolio'
import HeroPortfolio from '../components/Portfolio/HeroPortfolio';
import WorkPortfolio from '../components/Portfolio/WorkPortfolio';
import BlogPortfolio from '../components/Portfolio/BlogPortfolio';
import ContactPortfolio from '../components/Portfolio/ContactPortfolio';
import FooterPortfolio from '../components/Portfolio/FooterPortfolio';

const Portfolio = () => {
  return (
    <div>
        <NavberPortfolio/>
        <HeroPortfolio/>
        <WorkPortfolio/>
        <BlogPortfolio/>
        <ContactPortfolio/>
        <FooterPortfolio/>
    </div>
  )
}

export default Portfolio;