import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import logo from './images/logo.png'
import React from 'react'
import SignUpPage from './component/navbar/SignUp'
const NavBar = () => {
  const [modalShow, setModalShow] = React.useState(false)
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Fortify
          </Navbar.Brand>

          <Nav className="justify-content-center ">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/organizations">Organizations</Nav.Link>
            <Nav.Link href="/volunteer">Volunteer</Nav.Link>
            <Nav.Link href="/VNetwork">Volunteer Network</Nav.Link>

            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <Nav className="SLNav">
            <Nav.Link href="#link">Login</Nav.Link>

            <Nav.Link
              onClick={() => setModalShow(true)}
              className="NBtn"
              href="#link"
            >
              Sign Up
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <SignUpPage show={modalShow} onHide={() => setModalShow(false)} />
    </>
  )
}
export default NavBar
