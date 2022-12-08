import './App.css'
import './component/homepage/Style.css'

import NavBar from './NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import NotFoundPage from './pages/NotFoundPage'
import React from 'react'
import OrganisationProfile from './pages/OrganisationProfile'
import Volunteers from './pages/VolunteersPage'
import AboutPage from './pages/AboutPage'
import OrganisationsPage from './pages/OrganisationsPage'
import VolunteerNetwork from './pages/VolunteerNetwork'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <div id="page-body">
          <Routes>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/" element={<Homepage />} />
            <Route path="/volunteer" element={<Volunteers />} />
            <Route path="/VNetwork" element={<VolunteerNetwork />} />

            <Route path="/organizations" element={<OrganisationsPage />} />
            <Route
              path="/organizations/:organizationId"
              element={<OrganisationProfile />}
            />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
