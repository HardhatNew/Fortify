import './App.css'
import './component/homepage/Style.css'

import NavBar from './NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import NotFoundPage from './pages/NotFoundPage'
import React from 'react'
import OrganisationForm from './pages/OrganisationForm'
import Volunteers from './pages/VolunteersPage'
import AboutPage from './pages/AboutPage'

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
            <Route path="/organization" element={<OrganisationForm />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
