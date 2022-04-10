import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import '../../App.css'

function UserProfile ({user}) {
    return (
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder={user.attributes.email} disabled/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="********" disabled/>
          </Form.Group>
        </Row>
        <br />
        <Row>
          <Form.Group className="mb-3">
            <Form.Label column lg={2}>
              Company Name
            </Form.Label>
            <Form.Control type="text" placeholder="Company Name" />
          </Form.Group>
        </Row>
        <br />
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>First Name</Form.Label>
            <Form.Control placeholder="First Name" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Last Name</Form.Label>
            <Form.Control placeholder="Last Name"/>
          </Form.Group>
        </Row>
        <br />
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Bio:</Form.Label>
          <Form.Control as="textarea" rows={2} />
        </Form.Group>
  
      </Form>
    )
}

export default (UserProfile);