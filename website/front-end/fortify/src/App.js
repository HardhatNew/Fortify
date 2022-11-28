import './App.css'
import NavBar from './NavBar'
import Homepage from './pages/Homepage'

import React from 'react'
import SignUpPage from './pages/SignUpPage'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <SignUpPage />
      {/* <Homepage /> */}
    </div>
  )
}

export default App
