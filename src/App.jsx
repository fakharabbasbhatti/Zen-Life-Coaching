import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavbarHero from './components/ButterfllyWork/NavbarHero'
import Butterflly from './pages/Butterflly'
import ButterfllyGetStarted from './pages/ButterfllyGetStarted'
import ButterfllyServices from './pages/ButterfllyServices'
import ButterfllyAbout from './pages/ButterfllyAbout'
import ButterfllyTeam from './pages/ButterfllyTeam'
import Ali from './components/ButterfllyTeam/Ali'
import Footer from './components/ButterfllyWork/Footer'
import ButterfllyContactLink from './pages/ButterfllyContactLink'
import Consulting from './pages/Consulting'
import HumanResorce from './pages/HumanResorce'
import Goods from './pages/Goods'


const App = () => {
  return (
    <>
     {/* <BrowserRouter>
       <NavbarHero />
       <Routes>y
         <Route path="/" element={<Butterflly />} />
         <Route path="/getstarted" element={<ButterfllyGetStarted />} />
         <Route path="/services" element={<ButterfllyServices />} />
         <Route path="/about" element={<ButterfllyAbout />} />
         <Route path="/team" element={<ButterfllyTeam />} />
         <Route path="/contact" element={<ButterfllyContactLink />} />
         <Route path="/:userId" element={<Ali />} />
       </Routes>
       <Footer />
     </BrowserRouter> */}

{/* <Consulting/> */}
{/* <HumanResorce/> */}

<Goods/>
    </>
)}

export default App