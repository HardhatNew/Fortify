import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import './style.css'
const SignUpPage = (props) => {
  return (
    <Modal
      className="modalSignUp"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">SignUp</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="FullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Full Name" autoFocus />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPlaintextPassword">
            <Form.Label>Password</Form.Label>

            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPlaintextPassword">
            <Form.Label>Confirm Password</Form.Label>

            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPlaintextPassword">
            <Form.Label>Sign As</Form.Label>

            <Form.Check
              id="company"
              label="Company"
              name="signAs"
              type="radio"
            />
            <Form.Check
              id="volunteer"
              label="Volunteer"
              name="signAs"
              type="radio"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Comments</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={props.onHide}>
          SignUp
        </Button>
        <Button variant="danger" onClick={props.onHide}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
export default SignUpPage
