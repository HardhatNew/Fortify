import './App.css'
import './component/homepage/Style.css'
import NavBar from './NavBar'
import Homepage from './pages/Homepage'

import React from 'react'
import OrganisationForm from './pages/OrganisationForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <OrganisationForm />
      {/*<SignUpPage />*/}
      <Homepage />
    </div>
  )
}

export default App
