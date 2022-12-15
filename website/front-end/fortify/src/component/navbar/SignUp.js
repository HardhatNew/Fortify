// author Ali Al-kinani
//2/12/2022

/* 
More details goes here....
what the from about 
what supposed to do
*/
import { AiOutlineArrowRight } from 'react-icons/ai'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import './style.css'
import { useState } from 'react'

const SignUpPage = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [comments, setComments] = useState('')
  const [signAS, setSignAs] = useState('')
  const [checkPassword] = useState('')
  const submitForm = () => {
    let setData = {}
    setData.fullName = fullName
    setData.password = password
    setData.comments = comments
    setData.email = email
    setData.signAS = signAS
    console.log('info ', setData)
    props.onHide()
  }
  function setCheckPassword(value) {
    let message = document.querySelector('#errorMassage')
    if (password !== value) {
      message.innerHTML = 'Your passwords not matching'
    } else message.innerHTML = ' '
  }
  return (
    <Modal
      className="modalSignUp"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
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
          <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>

            <Form.Control
              type="password"
              placeholder="Confirm Password"
              onChange={(event) => setCheckPassword(event.target.value)}
            />
            <p id="errorMassage"></p>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="signAS"
            onChange={(event) => setSignAs(event.target.value)}
            value={signAS}
          >
            <Form.Label>Sign up as</Form.Label>

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
          Next <AiOutlineArrowRight />
        </Button>
        <Button variant="danger" onClick={props.onHide}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
export default SignUpPage
