import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavbarHero from './components/ButterfllyWork/NavbarHero'
import Butterflly from './pages/Butterflly'
// import ButterfllyGetStarted from './pages/ButterfllyGetStarted'
import ButterfllyAbout from './pages/ButterfllyAbout'
import ButterfllyTeam from './pages/ButterfllyTeam'
import ButterfllyServices from './pages/ButterfllyServices'
import ButterfllyTermsPolicy from './pages/ButterfllyTermsPolicy'
import ButterfllyContactLink from './pages/ButterfllyContactLink'
import Ali from './components/ButterfllyTeam/Ali'
import CoachingSessionsServices from './pages/CoachingSessionsServices'
import GroupWorkshopsServices from './pages/GroupWorkshopsServices'
import VirtualSessionsServices from './pages/VirtualSessionsServices'
import ResourceLibraryServices from './pages/ResourceLibraryServices'
import ProgressTracking from './components/ProgressTrackingButterflly/ProgressTracking'
import MobileAppServices from './pages/MobileAppServices'
import Footer from './components/ButterfllyWork/Footer'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavbarHero />
        <Routes>
          <Route path="/" element={<Butterflly />} />
          {/* <Route path="/getstarted" element={<ButterfllyGetStarted />} /> */}
          <Route path="/about" element={<ButterfllyAbout />} />
          <Route path="/team" element={<ButterfllyTeam />} />
          <Route path="/services" element={<ButterfllyServices />} />
          <Route path="/termspolicy" element={<ButterfllyTermsPolicy />} />
          <Route path="/contact" element={<ButterfllyContactLink />} />
          <Route path="/coachingsessions" element={<CoachingSessionsServices />} />
          <Route path="/groupwork" element={<GroupWorkshopsServices />} />
          <Route path="/virtualsessions" element={<VirtualSessionsServices />} />
          <Route path="/resourcelibrary" element={<ResourceLibraryServices />} />
          <Route path="/progresstracking" element={<ProgressTracking />} />
          <Route path="/mobileapp" element={<MobileAppServices />} />
          <Route path="/:userId" element={<Ali />} />
        </Routes>
        <Footer />
      </BrowserRouter>


    </>
  )
}

export default App

