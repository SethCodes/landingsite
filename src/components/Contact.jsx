import React from "react";
import "../css/contact.css";
import { Form, Button, Card } from "react-bootstrap";

function Contact(props) {
  function submitMessage() {
    console.log();
  }

  function handleChange(props) {}

  return (
    <div id="contact">
      <h1 className="contact-h1">Contact Me</h1>
      <Card className="form-bg" style={{ border: "none" }}>
        <Form className="form-bg">
          <div className="row">
            <div className="col-6">
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
            </div>
            <div className="col-6">
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
            </div>
          </div>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows="3" placeholder="Message" />
          </Form.Group>
          <Button variant="outline-primary">Submit</Button>
        </Form>
      </Card>
    </div>
  );
}

export default Contact;