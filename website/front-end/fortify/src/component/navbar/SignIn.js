//Page done by David Wang

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import './style.css'
import { useState } from 'react'

const SignInPage = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [signAS, setSignAs] = useState('')
  const submitForm = () => {
    let setData = {}
    setData.fullName = fullName
    setData.password = password
    setData.email = email
    setData.signAS = signAS
    console.log('info ', setData)
    props.onHide()
  }

  return (
    <Modal
      className="modalSignIn"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Sign In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="FullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              name="fullName"
              type="text"
              placeholder="Full Name"
              autoFocus
              onChange={(event) => setFullName(event.target.value)}
              value={fullName}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>

            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="signAS"
            onChange={(event) => setSignAs(event.target.value)}
            value={signAS}
          >
            <Form.Label>Sign in as</Form.Label>

            <Form.Check
              id="company"
              label="Company"
              name="signAs"
              type="radio"
              value="company"
            />
            <Form.Check
              id="volunteer"
              label="Volunteer"
              name="signAs"
              type="radio"
              value="volunteer"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={submitForm}>
          Sign In
        </Button>
        <Button variant="danger" onClick={props.onHide}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
export default SignInPage
